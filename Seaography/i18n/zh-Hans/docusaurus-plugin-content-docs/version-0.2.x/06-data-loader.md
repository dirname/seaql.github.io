# DataLoader

Seasql 使用 [async_graphql::dataloader](https://docs.rs/async-graphql/latest/async_graphql/dataloader/index.html) 在查询嵌套对象时处理 N+1 问题。

考虑以下 GraphQL 查询：

```graphql
{
  film(
    pagination: { pages: { limit: 3, page: 0 }}
    filters: { releaseYear: { gte: "2006" } }
    orderBy: { title: ASC }
  ) {
    nodes {
      filmId
      title
      description
      releaseYear
      filmActor {
        actor {
          actorId
          firstName
          lastName
        }
      }
    }
    pages
    current
  }
}
```

在幕后，以下 SQL 被查询：

```sql
SELECT "film"."film_id",
       "film"."title",
       "film"."description",
       "film"."release_year",
       "film"."language_id",
       "film"."original_language_id",
       "film"."rental_duration",
       "film"."rental_rate",
       "film"."length",
       "film"."replacement_cost",
       "film"."rating",
       "film"."special_features",
       "film"."last_update"
FROM "film"
WHERE "film"."release_year" >= '2006'
ORDER BY "film"."title" ASC
LIMIT 3 OFFSET 0

SELECT "film_actor"."actor_id", "film_actor"."film_id", "film_actor"."last_update"
FROM "film_actor"
WHERE "film_actor"."film_id" IN (1, 3, 2)

SELECT "actor"."actor_id", "actor"."first_name", "actor"."last_name", "actor"."last_update"
FROM "actor"
WHERE "actor"."actor_id" IN (24, 162, 20, 160, 1, 188, 123, 30, 53, 40, 2, 64, 85, 198, 10, 19, 108, 90)
```

以 `film_actor` 为例，我们想从数据库中获取 ID 为 `(1, 3, 2)` 的 `film_actor`。我们将 ID 给予 `DataLoader`，它有两个目的 - 它告诉 `DataLoader` 应该获取哪些行，以及，作为唯一标识符确定调用者，从而确定查询结果的正确接收者。

```rust
pub struct FilmActorFK(pub sea_orm::Value);

// film::Model
impl Model {
    pub async fn FilmActor<'a>(
        &self,
        ctx: &async_graphql::Context<'a>,
    ) -> Option<Vec<super::film_actor::Model>> {
        let data_loader = ctx
            .data::<async_graphql::dataloader::DataLoader<crate::OrmDataloader>>()
            .unwrap();

        let from_column: super::film::Column = // ...

        let key = FilmActorFK(self.get(from_column));

        let data: Option<_> = data_loader.load_one(key) // 使用外键进行批处理查询
            .await
            .unwrap();

        data
    }
}
```

在 `DataLoader` 内部，它将以批处理方式执行选择。然后，返回一个以 ID 为键的哈希映射。这允许我们将查询结果与接收者关联，从而将相应结果返回给正确的接收者。

```rust
#[async_trait::async_trait]
impl async_graphql::dataloader::Loader<FilmActorFK> for crate::OrmDataloader {
    type Value = Vec<super::film_actor::Model>;
    type Error = std::sync::Arc<sea_orm::error::DbErr>;

    async fn load(
        &self,
        keys: &[FilmActorFK],
    ) -> Result<std::collections::HashMap<FilmActorFK, Self::Value>, Self::Error> {
        let key_values: Vec<_> = keys
            .into_iter()
            .map(|key| key.0.to_owned())
            .collect();

        let to_column: super::film_actor::Column = // ...

        let data: std::collections::HashMap<FilmActorFK, Self::Value> = super::film_actor::Entity::find()
            .filter(to_column.is_in(key_values)) // 根据一批外键过滤
            .all(&self.db)
            .await?
            .into_iter()
            .map(|model| {
                let key = FilmActorFK(model.get(to_column));
                (key, model) // 将行收集到哈希映射中，以外键为键
            })
            .into_group_map();

        Ok(data)
    }
}
```