# 错误处理

SeaORM 中的所有运行时错误都由 [`DbErr`](https://docs.rs/sea-orm/*/sea_orm/error/enum.DbErr.html) 表示。

## 解析数据库特定的错误

您可以从 `DbErr::Conn`、`DbErr::Exec` 或 `DbErr::Query` 中的任何一个获取数据库特定的错误代码。

```rust
let mud_cake = cake::ActiveModel {
    id: Set(1),
    name: Set("Moldy Cake".to_owned()),
    price: Set(dec!(10.25)),
    gluten_free: Set(false),
    serial: Set(Uuid::new_v4()),
    bakery_id: Set(None),
};

// 使用其主键（`id` 列）设置为 1 插入一个新的蛋糕。
let cake = mud_cake.save(db).await.expect("无法插入蛋糕");

// 再次插入相同的行，它失败了，
// 因为每行的主键应该唯一。
let error: DbErr = cake
    .into_active_model()
    .insert(db)
    .await
    .expect_err("由于主键重复，插入应失败");

match error {
    DbErr::Exec(RuntimeErr::SqlxError(error)) => match error {
        Error::Database(e) => {
            // 我们检查数据库（本例中为 MySQL）抛出的错误代码，
            // `23000` 意味着 `ER_DUP_KEY`：我们表中有重复的键。
            assert_eq!(e.code().unwrap(), "23000");
        }
        _ => panic!("意外的 sqlx-error 类型"),
    },
    _ => panic!("意外的错误类型"),
}
```