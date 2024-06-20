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
                    cake::Column::Id.in_subquery( // 身份ID在子查询中
                        Query::select() // 查询
                            .expr(cake::Column::Id.max()) // 表达式，蛋糕ID的最大值
                            .from(cake::Entity) // 从蛋糕实体表中
                            .to_owned() // 获取所有权
                    )
                )
        )
        .build(DbBackend::MySql) // 构建SQL语句，针对MySQL数据库后端
        .to_string(), // 转换为字符串
    [
        "SELECT `cake`.`id`, `cake`.`name` FROM `cake`", // 选择蛋糕表中的ID和名称
        "WHERE `cake`.`id` IN (SELECT MAX(`cake`.`id`) FROM `cake`)", // 条件：蛋糕的ID在（选择蛋糕表中ID的最大值）中
    ]
    .join(" ") // 将两个字符串用空格连接起来
);
```