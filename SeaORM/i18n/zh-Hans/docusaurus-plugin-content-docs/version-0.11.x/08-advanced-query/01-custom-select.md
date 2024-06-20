# 自定义查询

默认情况下，SeaORM 会选取在 `Column` 枚举中定义的所有列。如果只想选择特定的列，你可以覆盖这些默认设置。

```rust
// 选取所有列
assert_eq!(
    cake::Entity::find()
        .build(DbBackend::Postgres)
        .to_string(),
    r#"SELECT "cake"."id", "cake"."name" FROM "cake""#
);
```

## 选择部分属性

通过调用 `select_only` 方法来清除默认的选择。然后，你可以选择一些属性或自定义表达式。

```rust
// 只选取 name 列
assert_eq!(
    cake::Entity::find()
        .select_only()
        .column(cake::Column::Name)
        .build(DbBackend::Postgres)
        .to_string(),
    r#"SELECT "cake"."name" FROM "cake""#
);
```

如果你想同时选择多个属性，可以提供一个数组。

```rust
assert_eq!(
    cake::Entity::find()
        .select_only()
        .columns([cake::Column::Id, cake::Column::Name])
        .build(DbBackend::Postgres)
        .to_string(),
    r#"SELECT "cake"."id", "cake"."name" FROM "cake""#
);
```

高级示例：有条件地选择除特定列之外的所有列。

```rust
assert_eq!(
    cake::Entity::find()
        .select_only()
        .columns(cake::Column::iter().filter(|col| match col {
            cake::Column::Id => false,
            _ => true,
        }))
        .build(DbBackend::Postgres)
        .to_string(),
    r#"SELECT "cake"."name" FROM "cake""#
);
```

## 选择自定义表达式

使用 `column_as` 方法选择任何自定义表达式，它接受任何 [`sea_query::SimpleExpr`](https://docs.rs/sea-query/*/sea_query/expr/enum.SimpleExpr.html) 和一个别名。使用 [`sea_query::Expr`](https://docs.rs/sea-query/*/sea_query/expr/struct.Expr.html) 辅助函数来构建 `SimpleExpr`。

```rust
use sea_query::{Alias, Expr};

assert_eq!(
    cake::Entity::find()
        .column_as(Expr::col(cake::Column::Id).max().sub(Expr::col(cake::Column::Id)), "id_diff")
        .column_as(Expr::cust("CURRENT_TIMESTAMP"), "current_time")
        .build(DbBackend::Postgres)
        .to_string(),
    r#"SELECT "cake"."id", "cake"."name", MAX("id") - "id" AS "id_diff", CURRENT_TIMESTAMP AS "current_time" FROM "cake""#
);
```

## 处理查询结果

### 自定义结构体

你可以使用从 `FromQueryResult` 特征派生的自定义 `struct` 来处理复杂查询的结果。当处理不能直接转换为模型的自定义列或多表连接时，这特别有用。它可以用于接收任何查询的结果，甚至是原始 SQL。

```rust
use sea_orm::{FromQueryResult, JoinType, RelationTrait};
use sea_query::Expr;

#[derive(FromQueryResult)]
struct CakeAndFillingCount {
    id: i32,
    name: String,
    count: i32,
}

let cake_counts: Vec<CakeAndFillingCount> = cake::Entity::find()
    .column_as(filling::Column::Id.count(), "count")
    .join_rev(
        // 在运行时构造 `RelationDef`
        JoinType::InnerJoin,
        cake_filling::Entity::belongs_to(cake::Entity)
            .from(cake_filling::Column::CakeId)
            .to(cake::Column::Id)
            .into()
    )
    // 从现有实体重用一个 `Relation`
    .join(JoinType::InnerJoin, cake_filling::Relation::Filling.def())
    .group_by(cake::Column::Id)
    .into_model::<CakeAndFillingCount>()
    .all(db)
    .await?;
```

### 非结构化元组

你可以使用 `into_tuple` 方法选择一个元组（或单个值）。

```rust
use sea_orm::{entity::*, query::*, tests_cfg::cake, DeriveColumn, EnumIter};

let res: Vec<(String, i64)> = cake::Entity::find()
    .select_only()
    .column(cake::Column::Name)
    .column(cake::Column::Id.count())
    .group_by(cake::Column::Name)
    .into_tuple()
    .all(&db)
    .await?;
```