# 自定义查询

默认情况下，SeaORM 将选择在 `Column` 枚举中定义的所有列。如果希望仅选择特定的列，您可以覆盖这些默认设置。

## 清除默认选择

如需清除默认的选择，可以通过调用 `select_only` 方法。然后，您可以在其后选择某些属性或甚至自定义表达式。

```rust
// 选择所有列
assert_eq!(
    cake::Entity::find()
        .build(DbBackend::Postgres)
        .to_string(),
    r#"SELECT "cake"."id", "cake"."name" FROM "cake""#
);
```

## 仅选择部分属性

使用 `select_only` 和 `column` 方法一起，只选择您想要的属性。

```rust
// 仅选择 name 列
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

使用 `column_as` 方法选择任何自定义表达式，它接受任何 [`sea_query::SimpleExpr`](https://docs.rs/sea-query/0.9/sea_query/expr/enum.SimpleExpr.html) 和一个别名。使用 [`sea_query::Expr`](https://docs.rs/sea-query/0.9/sea_query/expr/struct.Expr.html) 辅助函数构建 `SimpleExpr`。

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

您可以使用从 `FromQueryResult` 特征派生的自定义 `struct` 来处理复杂查询的结果。当处理无法直接转换为模型的自定义列或多个连接时，这尤其有用。它可以用于接收任何查询的结果，甚至是原始 SQL。

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
        // 构建 `RelationDef` 即时
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

不使用自定义 `struct` 选择单个值也是可能的。

```rust
use sea_orm::{entity::*, query::*, tests_cfg::cake, DeriveColumn, EnumIter};

#[derive(Copy, Clone, Debug, EnumIter, DeriveColumn)]
enum QueryAs {
    CakeName,
}

let res: Vec<String> = cake::Entity::find()
    .select_only()
    .column_as(cake::Column::Name, QueryAs::CakeName)
    .into_values::<_, QueryAs>()
    .all(&db)
    .await?;

assert_eq!(
    res,
    vec!["Chocolate Forest".to_owned(), "New York Cheese".to_owned()]
);
```

您甚至可以选择元组值。

```rust
use sea_orm::{entity::*, query::*, tests_cfg::cake, DeriveColumn, EnumIter};

#[derive(Copy, Clone, Debug, EnumIter, DeriveColumn)]
enum QueryAs {
    CakeName,
    NumOfCakes,
}

let res: Vec<(String, i64)> = cake::Entity::find()
    .select_only()
    .column_as(cake::Column::Name, QueryAs::CakeName)
    .column_as(cake::Column::Id.count(), QueryAs::NumOfCakes)
    .group_by(cake::Column::Name)
    .into_values::<_, QueryAs>()
    .all(&db)
    .await?;

assert_eq!(res, vec![("Chocolate Forest".to_owned(), 2i64)]);
```