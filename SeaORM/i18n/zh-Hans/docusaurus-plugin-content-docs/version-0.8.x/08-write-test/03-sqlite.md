# 使用 SQLite

如果你想要测试不需要特定数据库功能的应用逻辑，SQLite 将是一个不错的选择。

查看一个简单示例 [这里](https://github.com/SeaQL/sea-orm/blob/master/tests/basic.rs)。

## 集成测试

建议在[集成测试](https://doc.rust-lang.org/rust-by-example/testing/integration_testing.html)中执行更复杂的测试用例。以下代码片段展示了连接到数据库、设置模式和执行测试的步骤。

```rust
async fn main() -> Result<(), DbErr> {
    // 连接 SQLite
    let db = Database::connect("sqlite::memory:").await?;

    // 设置数据库模式
    setup_schema(&db).await?;

    // 执行测试
    testcase(&db).await?;

    Ok(())
}
```

## 设置数据库模式

为了在 SQLite 数据库中为测试创建表，而不是手动编写[`TableCreateStatement`](https://docs.rs/sea-query/0.8/sea_query/table/struct.TableCreateStatement.html)，你可以使用`Entity`的`Schema::create_table_from_entity`来推导它。

```rust
async fn setup_schema(db: &DbConn) {

    // 设置 Schema 辅助工具
    let schema = Schema::new(DbBackend::Sqlite);

    // 从 Entity 推导
    let stmt: TableCreateStatement = schema.create_table_from_entity(MyEntity);

    // 或者手动设置
    assert_eq!(
        stmt.build(SqliteQueryBuilder),
        Table::create()
            .table(MyEntity)
            .col(
                ColumnDef::new(MyEntity::Column::Id)
                    .integer()
                    .not_null()
            )
            //...
            .build(SqliteQueryBuilder)
    );

    // 执行创建表语句
    let result = db
        .execute(db.get_database_backend().build(&stmt))
        .await;
}
```

## 执行测试

执行测试用例并针对结果进行断言。

```rust
async fn testcase(db: &DbConn) -> Result<(), DbErr> {

    let baker_bob = baker::ActiveModel {
        name: Set("Baker Bob".to_owned()),
        contact_details: Set(serde_json::json!({
            "mobile": "+61424000000",
            "home": "0395555555",
            "address": "12 Test St, Testville, Vic, Australia"
        })),
        bakery_id: Set(2),
        ..Default::default()
    };

    let baker_insert_res = Baker::insert(baker_bob)
        .exec(db)
        .await
        .expect("无法插入面包师");

    assert_eq!(baker_insert_res.last_insert_id, 1);

    Ok(())
}
```