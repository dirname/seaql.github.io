# 数据加载器

[LoaderTrait](https://docs.rs/sea-orm/*/sea_orm/query/trait.LoaderTrait.html) 提供了一个 API 来批量加载相关实体。

考虑这样一个一对多关系：

```rust
let cake_with_fruits: Vec<(cake::Model, Vec<fruit::Model>)> = Cake::find()
    .find_with_related(Fruit)
    .all(db)
    .await?;
```

生成的 SQL 查询是：

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

这很棒，但如果 N 是一个大数字，1 方（Cake）的数据将被大量重复。这导致通过网络传输更多的数据。在多对多的情况下，双方都可能重复。使用 Loader 可以确保每个模型只传输一次。因此，SeaORM 目前不能同时热切加载超过两个实体。

以下代码用两个查询加载与上面相同的数据：

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

在高级使用情况下，你可以在相关实体上应用过滤器：

```rust
let fruits_in_stock: Vec<Vec<fruit::Model>> = cakes.load_many(
    fruit::Entity::find().filter(fruit::Column::Stock.gt(0i32)),
    db
).await?;
```