# 条件表达式

您可以通过使用 `filter` 方法向 SeaORM 查询添加条件。您还可以通过 `having` 方法限制聚合结果。它们都接受参数类型为 [`sea_query::Condition`](https://docs.rs/sea-query/0.12.7/sea_query/query/struct.Condition.html)。

## AND 条件

使用 `Condition::all` 方法构建 AND 条件表达式，并通过 `add` 方法附加任何由 [`sea_query::SimpleExpr`](https://docs.rs/sea-query/*/sea_query/expr/enum.SimpleExpr.html) 表示的条件。

```rust
assert_eq!(
    cake::Entity::find()
        .filter(
            Condition::all()
                .add(cake::Column::Id.gte(1))
                .add(cake::Column::Name.like("%Cheese%"))
        )
        .build(DbBackend::MySql)
        .to_string(),
    [
        "SELECT `cake`.`id`, `cake`.`name` FROM `cake`",
        "WHERE `cake`.`id` >= 1 AND `cake`.`name` LIKE '%Cheese%'",
    ].join(" ")
);
```

## OR 条件

使用 `Condition::any` 方法构建 OR 条件表达式，并通过 `add` 方法附加任何由 [`sea_query::SimpleExpr`](https://docs.rs/sea-query/*/sea_query/expr/enum.SimpleExpr.html) 表示的条件。

```rust
assert_eq!(
    cake::Entity::find()
        .filter(
            Condition::any()
                .add(cake::Column::Id.eq(4))
                .add(cake::Column::Id.eq(5))
        )
        .build(DbBackend::MySql)
        .to_string(),
    [
        "SELECT `cake`.`id`, `cake`.`name` FROM `cake`",
        "WHERE `cake`.`id` = 4 OR `cake`.`id` = 5",
    ].join(" ")
);
```

## 嵌套条件

`add` 方法也可以接受另一个条件表达式。通过这种方式，我们可以灵活地构建复杂的嵌套条件。

```rust
assert_eq!(
    cake::Entity::find()
        .filter(
            Condition::any()
                .add(
                    Condition::all()
                        .add(cake::Column::Id.lte(30))
                        .add(cake::Column::Name.like("%Chocolate%"))
                )
                .add(
                    Condition::all()
                        .add(cake::Column::Id.gte(1))
                        .add(cake::Column::Name.like("%Cheese%"))
                )
        )
        .build(DbBackend::MySql)
        .to_string(),
    [
        "SELECT `cake`.`id`, `cake`.`name` FROM `cake`",
        "WHERE (`cake`.`id` <= 30 AND `cake`.`name` LIKE '%Chocolate%') OR",
        "(`cake`.`id` >= 1 AND `cake`.`name` LIKE '%Cheese%')",
    ].join(" ")
);
```

## 流畅的条件查询

如果给定的 `Option<T>` 是 `Some(_)`，则对 QueryStatement 应用操作。它使您的查询表达式保持流畅！

```rust
use sea_orm::{entity::*, query::*, tests_cfg::cake, DbBackend};

assert_eq!(
    cake::Entity::find()
        .apply_if(Some(3), |mut query, v| {
            query.filter(cake::Column::Id.eq(v))
        })
        .apply_if(Some(100), QuerySelect::limit)
        .apply_if(None, QuerySelect::offset::<Option<u64>>) // 不执行操作
        .build(DbBackend::Postgres)
        .to_string(),
    r#"SELECT "cake"."id", "cake"."name" FROM "cake" WHERE "cake"."id" = 3 LIMIT 100"#
);
```