# 数据加载器

:::tip
如果你正在构建一个大量查询嵌套关系的Web API，考虑构建一个GraphQL服务器。[Seaography](https://www.sea-ql.org/Seaography/) 是一个使用 SeaORM 实体构建 GraphQL 解析器的 GraphQL 框架。阅读 “[开始使用 Seaography](https://www.sea-ql.org/blog/2022-09-27-getting-started-with-seaography/)" 以了解更多信息。
:::

[LoaderTrait](https://docs.rs/sea-orm/*/sea_orm/query/trait.LoaderTrait.html) 提供了一个API来批量加载相关实体。

考虑这个一对多关系：

```rust
let cake_with_fruits: Vec<(cake::Model, Vec<fruit::Model>)> = Cake::find()
    .find_with_related(Fruit)
    .all(db)
    .await?;
```

生成的SQL查询是：

```sql
SELECT
    "cake"."id" AS "A_id",
    "cake"."name" AS "A_name",
    "fruit"."id" AS "B_id",
    "fruit"."name" AS "B_name",
    "fruit"."cake_id" AS "B_cake_id"
FROM "cake"
LEFT JOIN "fruit" ON "cake"."id" = "fruit"."cake_id"
ORDER BY "cake"."id" ASC
```

这很好，但如果 N 是一个大数字，1 方（Cake）的数据将被大量复制。这导致更多的数据通过网络传输。在多对多的情况下，双方都可能重复。使用Loader将确保每个模型只传输一次。因此，SeaORM目前不能同时热加载超过2个实体。

以下代码与上面加载相同的数据，但使用两个查询：

```rust
let cakes: Vec<cake::Model> = Cake::find().all(db).await?;
let fruits: Vec<Vec<fruit::Model>> = cakes.load_many(Fruit, db).await?;

for (cake, fruits) in cakes.into_iter().zip(fruits.into_iter()) { .. }
```

```sql
SELECT "cake"."id", "cake"."name" FROM "cake"
SELECT "fruit"."id", "fruit"."name", "fruit"."cake_id" FROM "fruit" WHERE "fruit"."cake_id" IN (..)
```

你可以将这些组合起来：

```rust
let cakes: Vec<cake::Model> = Cake::find().all(db).await?;
let fruits: Vec<Vec<fruit::Model>> = cakes.load_many(Fruit, db).await?;
let fillings: Vec<Vec<filling::Model>> = cakes.load_many_to_many(Filling, CakeFilling, db).await?;
```

在一个高级用例中，你可以在相关实体上应用过滤器：

```rust
let fruits_in_stock: Vec<Vec<fruit::Model>> = cakes.load_many(
    fruit::Entity::find().filter(fruit::Column::Stock.gt(0i32))
    db
).await?;
```