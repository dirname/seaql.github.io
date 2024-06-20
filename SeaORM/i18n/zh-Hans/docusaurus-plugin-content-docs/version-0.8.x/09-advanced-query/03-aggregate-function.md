# 聚合函数

您可以使用 `group_by` 方法对从 SeaORM 查询中选择的结果进行分组。如果您希望进一步限制分组后的结果集，`having` 方法可以帮助您实现这一点。

## 按列分组

`group_by` 方法可以接受实体的列或复杂的 [`sea_query::SimpleExpr`](https://docs.rs/sea-query/0.8/sea_query/expr/enum.SimpleExpr.html)。

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

## Having

`having` 方法可以接受前面章节中介绍的任何条件表达式。

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