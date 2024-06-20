# 聚合函数

你可以使用 `group_by` 方法对从 SeaORM 查询中选择的结果进行分组。如果你想进一步限制分组结果集，`having` 方法可以帮助你实现这一目标。

## 按列分组

`group_by` 方法可以接受实体的一个列或是一个复杂的 [`sea_query::SimpleExpr`](https://docs.rs/sea-query/*/sea_query/expr/enum.SimpleExpr.html)。

```rust
assert_eq!(
    cake::Entity::find()
        .select_only()
        .column(cake::Column::Name)
        .group_by(cake::Column::Name)
        .build(DbBackend::Postgres)
        .to_string(),
    r#"SELECT "cake"."name" FROM "cake" GROUP BY "cake"."name""#
);
```

## 使用 Having 条件

`having` 方法可以接受在前一节中介绍的任何条件表达式。

```rust
assert_eq!(
    cake::Entity::find()
        .having(cake::Column::Id.eq(4))
        .having(cake::Column::Id.eq(5))
        .build(DbBackend::MySql)
        .to_string(),
    "SELECT `cake`.`id`, `cake`.`name` FROM `cake` HAVING `cake`.`id` = 4 AND `cake`.`id` = 5"
);
```