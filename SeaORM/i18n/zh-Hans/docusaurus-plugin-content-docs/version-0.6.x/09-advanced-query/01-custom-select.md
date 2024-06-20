# 自定义查询

默认情况下，SeaORM 会选取在 `Column` 枚举中定义的所有列。如果只想选取特定的列，你可以覆盖这些默认设置。

## 清除默认选取

根据需要，通过调用 `select_only` 方法来清除默认选取。然后，你可以在其后选取某些属性或甚至自定义表达式。

```rust
// 选取所有列
assert_eq!(
    cake::Entity::find()
        .build(DbBackend::Postgres)
        .to_string(),
    r#"SELECT "cake"."id", "cake"."name" FROM "cake""#
);
```

## 仅选取部分属性

结合使用 `select_only` 和 `column` 方法来仅选取你想要的属性。

```rust
// 仅选取 name 列
assert_eq!(
    cake::Entity::find()
        .select_only()
        .column(cake::Column::Name)
        .build(DbBackend::Postgres)
        .to_string(),
    r#"SELECT "cake"."name" FROM "cake""#
);
```

## 选取自定义表达式

使用 `column_as` 方法选取任何自定义表达式，它接受任何 [`sea_query::SimpleExpr`](https://docs.rs/sea-query/*/sea_query/expr/enum.SimpleExpr.html) 和一个别名。利用 [`sea_query::Expr`](https://docs.rs/sea-query/*/sea_query/expr/struct.Expr.html) 辅助函数来构建 `SimpleExpr`。

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

## 处理自定义选取

你可以使用源自 `FromQueryResult` 特性的自定义 `struct` 来处理复杂查询的结果。当处理无法直接转换为模型的自定义列或多表联接时，这特别有用。它可以用来接收任何查询的结果，甚至是原始 SQL。

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
        // 现场构建 `RelationDef`
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