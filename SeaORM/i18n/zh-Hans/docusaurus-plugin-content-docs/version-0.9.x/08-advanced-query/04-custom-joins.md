# 自定义连接

您可以使用 `join` 方法来构建复杂的连接查询。它接受在实体文件中定义的任何 `RelationDef`，并且您也可以使用 `belongs_to` 方法来定义关系。通过 `JoinType`（如内连接、左连接和右连接）指定连接类型。

```rust
use sea_orm::{JoinType, RelationTrait};
use sea_query::Expr;

assert_eq!(
    cake::Entity::find()
        .column_as(filling::Column::Id.count(), "count")
        .column_as(
            Expr::tbl(Alias::new("fruit_alias"), fruit::Column::Name).into_simple_expr(),
            "fruit_name"
        )
        // 即时构建 `RelationDef`
        .join_rev(
            JoinType::InnerJoin,
            cake_filling::Entity::belongs_to(cake::Entity)
                .from(cake_filling::Column::CakeId)
                .to(cake::Column::Id)
                .into()
        )
        // 重用现有实体中的 `Relation`
        .join(JoinType::InnerJoin, cake_filling::Relation::Filling.def())
        // 使用表别名和自定义条件进行连接
        .join_as(
            JoinType::LeftJoin,
            cake::Relation::Fruit
                .def()
                .on_condition(|_left, right| {
                    Expr::tbl(right, fruit::Column::Name)
                        .like("%tropical%")
                        .into_condition()
                }),
            Alias::new("fruit_alias")
        )
        .group_by(cake::Column::Id)
        .having(filling::Column::Id.count().equals(Expr::value(2)))
        .build(DbBackend::MySql)
        .to_string(),
    [
        "SELECT `cake`.`id`, `cake`.`name`, COUNT(`filling`.`id`) AS `count`, `fruit_alias`.`name` AS `fruit_name` FROM `cake`",
        "INNER JOIN `cake_filling` ON `cake_filling`.`cake_id` = `cake`.`id`",
        "INNER JOIN `filling` ON `cake_filling`.`filling_id` = `filling`.`id`",
        "LEFT JOIN `fruit` AS `fruit_alias` ON `cake`.`id` = `fruit_alias`.`cake_id` AND `fruit_alias`.`name` LIKE '%tropical%'",
        "GROUP BY `cake`.`id`",
        "HAVING COUNT(`filling`.`id`) = 2",
    ]
    .join(" ")
);
```

> 您可以使用源自 `FromQueryResult` 特性的自定义 `struct` 来处理此类复杂查询的结果。详细信息请参见[这里](08-advanced-query/01-custom-select.md#handling-custom-selects)。