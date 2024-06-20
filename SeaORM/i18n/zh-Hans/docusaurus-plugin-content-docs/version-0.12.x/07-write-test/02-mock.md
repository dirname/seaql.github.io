# 模拟接口

你可以使用模拟数据库接口来对你的应用程序逻辑进行单元测试。

:::info
你需要在 Cargo.toml 中启用 `mock` 特性标志。
:::

模拟数据库中没有任何数据，因此你必须定义在执行 CRUD 操作时预期返回的数据。
- 应提供查询结果以支持选择操作
- 应提供执行结果以支持插入、更新和删除操作

为了确保你的应用程序逻辑的正确性，你也可以验证模拟数据库中的事务日志。

查看我们如何使用模拟连接编写单元测试 [这里](https://github.com/SeaQL/sea-orm/blob/master/src/executor/paginator.rs#L250)。

## 模拟查询结果

我们通过 `MockDatabase::new(DatabaseBackend::Postgres)` 创建一个用于 PostgreSQL 的模拟数据库。然后，使用 `append_query_results` 方法准备查询结果。请注意，我们将向量的向量传递给它，代表多个查询结果，每个结果包含一个以上的模型。最后，我们将它转换为连接并像正常的实时连接一样使用它来进行 CRUD 操作。

`MockDatabase` 的一个特别之处在于你可以检查其事务日志。在模拟数据库上运行的任何 SQL 查询都会被记录；你可以验证每一项日志以确保你的应用程序逻辑的正确性。

```rust
#[cfg(test)]
mod tests {
    use sea_orm::{
        entity::prelude::*, entity::*, tests_cfg::*,
        DatabaseBackend, MockDatabase, Transaction,
    };

    #[async_std::test]
    async fn test_find_cake() -> Result<(), DbErr> {
        // 使用模拟查询结果创建 MockDatabase
        let db = MockDatabase::new(DatabaseBackend::Postgres)
            .append_query_results(vec![
                // 第一个查询结果
                vec![cake::Model {
                    id: 1,
                    name: "New York Cheese".to_owned(),
                }],
                // 第二个查询结果
                vec![
                    cake::Model {
                        id: 1,
                        name: "New York Cheese".to_owned(),
                    },
                    cake::Model {
                        id: 2,
                        name: "Chocolate Forest".to_owned(),
                    },
                ],
            ])
            .append_query_results(vec![
                // 第三个查询结果
                vec![
                    (
                        cake::Model {
                            id: 1,
                            name: "Apple Cake".to_owned(),
                        },
                        fruit::Model {
                            id: 2,
                            name: "Apple".to_owned(),
                            cake_id: Some(1),
                        },
                    ),
                ],
            ])
            .into_connection();

        // 从 MockDatabase 中查找一个蛋糕
        // 返回第一个查询结果
        assert_eq!(
            cake::Entity::find().one(&db).await?,
            Some(cake::Model {
                id: 1,
                name: "New York Cheese".to_owned(),
            })
        );

        // 从 MockDatabase 中查找所有蛋糕
        // 返回第二个查询结果
        assert_eq!(
            cake::Entity::find().all(&db).await?,
            vec![
                cake::Model {
                    id: 1,
                    name: "New York Cheese".to_owned(),
                },
                cake::Model {
                    id: 2,
                    name: "Chocolate Forest".to_owned(),
                },
            ]
        );

        // 查找所有蛋糕及其相关水果
        assert_eq!(
            cake::Entity::find()
                .find_also_related(fruit::Entity)
                .all(&db)
                .await?,
            vec![
                (
                    cake::Model {
                        id: 1,
                        name: "Apple Cake".to_owned(),
                    },
                    Some(fruit::Model {
                        id: 2,
                        name: "Apple".to_owned(),
                        cake_id: Some(1),
                    })
                ),
            ]
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
                    Vec::<Value>::new()
                ),
                Transaction::from_sql_and_values(
                    DatabaseBackend::Postgres,
                    r#"SELECT "cake"."id" AS "A_id", "cake"."name" AS "A_name", "fruit"."id" AS "B_id", "fruit"."name" AS "B_name", "fruit"."cake_id" AS "B_cake_id" FROM "cake" LEFT JOIN "fruit" ON "cake"."id" = "fruit"."cake_id""#,
                    Vec::<Value>::new()
                ),
            ]
        );

        Ok(())
    }
}
```

## 模拟执行结果

这与模拟查询结果非常相似，不同之处在于我们在这里使用 `append_exec_results` 方法，并且我们在单元测试中执行插入、更新和删除操作。`append_exec_results` 方法接受一个 `MockExecResult` 的向量，其中每一个代表相应操作的执行结果。

```rust
#[cfg(test)]
mod tests {
    use sea_orm::{
        entity::prelude::*, entity::*, tests_cfg::*,
        DatabaseBackend, MockDatabase, MockExecResult, Transaction,
    };

    #[async_std::test]
    async fn test_insert_cake() -> Result<(), DbErr> {
        // 使用模拟执行结果创建 MockDatabase
        let db = MockDatabase::new(DatabaseBackend::Postgres)
            .append_query_results(vec![
                vec![cake::Model {
                    id: 15,
                    name: "Apple Pie".to_owned(),
                }],
                vec![cake::Model {
                    id: 16,
                    name: "Apple Pie".to_owned(),
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

        // 准备 ActiveModel
        let apple = cake::ActiveModel {
            name: Set("Apple Pie".to_owned()),
            ..Default::default()
        };

        // 将 ActiveModel 插入到 MockDatabase
        assert_eq!(
            apple.clone().insert(&db).await?,
            cake::Model {
                id: 15,
                name: "Apple Pie".to_owned()
            }
        );

        // 如果你想检查最后一个插入的 ID
        let insert_result = cake::Entity::insert(apple).exec(&db).await?;
        assert_eq!(insert_result.last_insert_id, 16);

        // 检查事务日志
        assert_eq!(
            db.into_transaction_log(),
            vec![
                Transaction::from_sql_and_values(
                    DatabaseBackend::Postgres,
                    r#"INSERT INTO "cake" ("name") VALUES ($1) RETURNING "id", "name""#,
                    vec!["Apple Pie".into()]
                ),
                Transaction::from_sql_and_values(
                    DatabaseBackend::Postgres,
                    r#"INSERT INTO "cake" ("name") VALUES ($1) RETURNING "id""#,
                    vec!["Apple Pie".into()]
                ),
            ]
        );

        Ok(())
    }
}
```