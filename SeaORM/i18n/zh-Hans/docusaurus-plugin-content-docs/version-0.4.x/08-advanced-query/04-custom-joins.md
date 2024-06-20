# 自定义连接

您可以使用 `join` 方法来构建复杂的连接查询。它接受在实体文件中定义的任何 `RelationDef`，您也可以通过 `belongs_to` 方法定义关系。使用 `JoinType`（如内连接、左连接和右连接）指定连接类型。

```rust
use sea_orm::{JoinType, RelationTrait};
use sea_query::Expr;

// 断言等于
assert_eq!(
    // 查找蛋糕实体
    cake::Entity::find()
        // 计算填充表的ID数量并重命名列
        .column_as(filling::Column::Id.count(), "count")
        // 反向连接，即时构造 `RelationDef`
        .join_rev(
            JoinType::InnerJoin, // 内连接类型
            // 定义蛋糕与填充之间的关系
            cake_filling::Entity::belongs_to(cake::Entity)
                .from(cake_filling::Column::CakeId) // 从蛋糕填充表的蛋糕ID
                .to(cake::Column::Id) // 到蛋糕表的ID
                .into() // 转换为关系定义
        )
        // 从现有实体重用一个 `Relation`
        .join(JoinType::InnerJoin, // 内连接类型
              cake_filling::Relation::Filling.def() // 填充关系定义
        )
        // 按照蛋糕ID分组
        .group_by(cake::Column::Id)
        // 如果填充ID的数量等于2则进行筛选
        .having(filling::Column::Id.count().equals(Expr::value(2)))
        // 构建SQL语句，针对MySQL数据库后端
        .build(DbBackend::MySql)
        .to_string(),
    [
        "SELECT `cake`.`id`, `cake`.`name`, COUNT(`filling`.`id`) AS `count` FROM `cake`",
        "INNER JOIN `cake_filling` ON `cake_filling`.`cake_id` = `cake`.`id`",
        "INNER JOIN `filling` ON `cake_filling`.`filling_id` = `filling`.`id`",
        "GROUP BY `cake`.`id`",
        "HAVING COUNT(`filling`.`id`) = 2",
    ]
    .join(" ")
);
```