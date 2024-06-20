# 自定义查询

默认情况下，SeaORM 会选取在 `Column` 枚举中定义的所有列。如果需要，您可以覆盖这些默认设置。

## 清除默认的列选择

如果需要，通过调用 `select_only` 方法来清除默认的选择。然后，您可以在其后选择部分属性或甚至自定义表达式。

```rust
// 选择所有列
assert_eq!(
    cake::Entity::find()
        .build(DbBackend::Postgres)
        .to_string(),
    r#"SELECT "cake"."id", "cake"."name" FROM "cake""#
);
```

## 只选择部分属性

使用 `select_only` 和 `column` 方法结合来只选择您想要的属性。

```rust
// 只选择 name 列
assert_eq!(
    cake::Entity::find()
        .select_only()
        .column(cake::Column::Name)
        .build(DbBackend::Postgres)
        .to_string(),
    r#"SELECT "cake"."name" FROM "cake""#
);
```

## 选择自定义表达式

使用 `column_as` 方法选择任何自定义表达式，它接受任何[`sea_query::SimpleExpr`](https://docs.rs/sea-query/*/sea_query/expr/enum.SimpleExpr.html)和一个别名。使用[`sea_query::Expr`](https://docs.rs/sea-query/*/sea_query/expr/struct.Expr.html)辅助函数来构建 `SimpleExpr`。

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

## 处理自定义查询结果

您可以使用从 `FromQueryResult` 特征派生的自定义 `struct` 来处理复杂查询的结果。当处理不能直接转换为模型的自定义列或多表联接时，这特别有用。它可以用来接收任何查询的结果，甚至是原始 SQL。

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
    // 重用现有实体中的 `Relation`
    .join(JoinType::InnerJoin, cake_filling::Relation::Filling.def())
    .group_by(cake::Column::Id)
    .into_model::<CakeAndFillingCount>()
    .all(db)
    .await?;
```