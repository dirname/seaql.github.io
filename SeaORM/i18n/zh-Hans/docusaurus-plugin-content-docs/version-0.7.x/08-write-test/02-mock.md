# 模拟接口

你可以使用模拟数据库接口来对你的应用程序逻辑进行单元测试。

模拟数据库中没有数据，因此在执行CRUD操作时，你必须定义预期返回的数据。
- 应提供查询结果以支持选择操作
- 应提供执行结果以支持插入、更新和删除操作

为了确保你的应用程序逻辑的正确性，你也可以验证模拟数据库中的事务日志。

请查看我们如何使用模拟连接编写单元测试[这里](https://github.com/SeaQL/sea-orm/blob/master/src/executor/paginator.rs#L250)。

## 模拟查询结果

我们使用`MockDatabase::new(DatabaseBackend::Postgres)`为PostgreSQL创建一个模拟数据库。然后，使用`append_query_results`方法准备查询结果。请注意，我们向其传递了一个向量的向量，表示多个查询结果，每个结果有多个模型。最后，我们将它转换为连接，并像使用常规实时连接一样用它来进行CRUD操作。

`MockDatabase`的一个特别之处在于你可以检查它的事务日志。在模拟数据库上运行的任何SQL查询都会被记录；你可以验证每一笔日志，以确保你的应用程序逻辑的正确性。

```rust
#[cfg(test)]
mod tests {
    use sea_orm::{
        entity::prelude::*, entity::*, tests_cfg::*,
        DatabaseBackend, MockDatabase, Transaction,
    };

    #[async_std::test]
    async fn test_find_cake() -> Result<(), DbErr> {
        // 使用模拟查询结果创建MockDatabase
        let db = MockDatabase::new(DatabaseBackend::Postgres)
            .append_query_results(vec![
                // 第一个查询结果
                vec![cake::Model {
                    id: 1,
                    name: "纽约芝士".to_owned(),
                }],
                // 第二个查询结果
                vec![
                    cake::Model {
                        id: 1,
                        name: "纽约芝士".to_owned(),
                    },
                    cake::Model {
                        id: 2,
                        name: "巧克力森林".to_owned(),
                    },
                ],
            ])
            .append_query_results(vec![
                // 第三个查询结果
                vec![(
                    cake::Model {
                        id: 1,
                        name: "苹果蛋糕".to_owned(),
                    },
                    fruit::Model {
                        id: 2,
                        name: "苹果".to_owned(),
                        cake_id: Some(1),
                    },
                )],
            ])
            .into_connection();

        // 从MockDatabase中查找一个蛋糕
        // 返回第一个查询结果
        assert_eq!(
            cake::Entity::find().one(&db).await?,
            Some(cake::Model {
                id: 1,
                name: "纽约芝士".to_owned(),
            })
        );

        // 从MockDatabase中查找所有蛋糕
        // 返回第二个查询结果
        assert_eq!(
            cake::Entity::find().all(&db).await?,
            vec![
                cake::Model {
                    id: 1,
                    name: "纽约芝士".to_owned(),
                },
                cake::Model {
                    id: 2,
                    name: "巧克力森林".to_owned(),
                },
            ]
        );

        // 查找所有蛋糕及其相关水果
        assert_eq!(
            cake::Entity::find()
                .find_also_related(fruit::Entity)
                .all(&db)
                .await?,
            vec![(
                cake::Model {
                    id: 1,
                    name: "苹果蛋糕".to_owned(),
                },
                Some(fruit::Model {
                    id: 2,
                    name: "苹果".to_owned(),
                    cake_id: Some(1),
                })
            )]
        );

        // 检查事务日志
        assert_eq!(
            db.into_transaction_log(),
            vec![
                Transaction::from_sql_and_values(
                    DatabaseBackend::Postgres,
                    r#"SELECT "cake"."id", "cake"."name" FROM "cake" LIMIT $1"#,
                    vec![1u64.into()]
                ),
                Transaction::from_sql_and_values(
                    DatabaseBackend::Postgres,
                    r#"SELECT "cake"."id", "cake"."name" FROM "cake""#,
                    vec![]
                ),
                Transaction::from_sql_and_values(
                    DatabaseBackend::Postgres,
                    r#"SELECT "cake"."id" AS "A_id", "cake"."name" AS "A_name", "fruit"."id" AS "B_id", "fruit"."name" AS "B_name", "fruit"."cake_id" AS "B_cake_id" FROM "cake" LEFT JOIN "fruit" ON "cake"."id" = "fruit"."cake_id""#,
                    vec![]
                ),
            ]
        );

        Ok(())
    }
}
```

## 模拟执行结果

这与模拟查询结果非常相似，不同之处在于我们在这里使用了`append_exec_results`方法，并在单元测试中执行插入、更新和删除操作。`append_exec_results`方法接收一个`MockExecResult`的向量，其中每一个代表对应操作的执行结果。

```rust
#[cfg(test)]
mod tests {
    use sea_orm::{
        entity::prelude::*, entity::*, tests_cfg::*,
        DatabaseBackend, MockDatabase, MockExecResult, Transaction,
    };

    #[async_std::test]
    async fn test_insert_cake() -> Result<(), DbErr> {
        // 使用模拟执行结果创建MockDatabase
        let db = MockDatabase::new(DatabaseBackend::Postgres)
            .append_query_results(vec![
                vec![cake::Model {
                    id: 15,
                    name: "苹果派".to_owned(),
                }],
                vec![cake::Model {
                    id: 16,
                    name: "苹果派".to_owned(),
                }],
            ])
            .append_exec_results(vec![
                MockExecResult {
                    last_insert_id: 15,
                    rows_affected: 1,
                },
                MockExecResult {
                    last_insert_id: 16,
                    rows_affected: 1,
                },
            ])
            .into_connection();

        // 准备ActiveModel
        let apple = cake::ActiveModel {
            name: Set("苹果派".to_owned()),
            ..Default::default()
        };

        // 将ActiveModel插入到MockDatabase中
        assert_eq!(
            apple.clone().insert(&db).await?,
            cake::Model {
                id: 15,
                name: "苹果派".to_owned()
            }
        );

        // 如果你想检查最后插入的ID
        let insert_result = cake::Entity::insert(apple).exec(&db).await?;
        assert_eq!(insert_result.last_insert_id, 16);

        // 检查事务日志
        assert_eq!(
            db.into_transaction_log(),
            vec![
                Transaction::from_sql_and_values(
                    DatabaseBackend::Postgres,
                    r#"INSERT INTO "cake" ("name") VALUES ($1) RETURNING "id", "name""#,
                    vec!["苹果派".into()]
                ),
                Transaction::from_sql_and_values(
                    DatabaseBackend::Postgres,
                    r#"INSERT INTO "cake" ("name") VALUES ($1) RETURNING "id""#,
                    vec!["苹果派".into()]
                ),
            ]
        );

        Ok(())
    }
}
```