# 子查询

## 带有子查询的条件表达式

使用 `in_subquery` 或 `not_in_subquery` 方法来构建带有子查询的条件表达式。

```rust
use sea_orm::Condition;
use sea_query::Query;

assert_eq!(
    cake::Entity::find() // 查找蛋糕实体
        .filter( // 过滤条件
            Condition::any() // 任意条件
                .add( // 添加条件
                    cake::Column::Id.in_subquery( // 身份字段在子查询中
                        Query::select() // 选择查询
                            .expr(cake::Column::Id.max()) // 最大身份表达式
                            .from(cake::Entity) // 从蛋糕实体表
                            .to_owned() // 转换为拥有类型
                    )
                )
        )
        .build(DbBackend::MySql) // 构建 MySQL 数据库后端
        .to_string(), // 转换为字符串
    [
        "SELECT `cake`.`id`, `cake`.`name` FROM `cake`", // 选择蛋糕表中的身份和名称
        "WHERE `cake`.`id` IN (SELECT MAX(`cake`.`id`) FROM `cake`)" // 条件：蛋糕的身份在（选择蛋糕表中最大身份）中
    ]
    .join(" ") // 使用空格连接数组元素
);
```