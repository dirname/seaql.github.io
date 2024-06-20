# 错误处理

SeaORM 中的所有运行时错误都由 [`DbErr`](https://docs.rs/sea-orm/*/sea_orm/error/enum.DbErr.html) 表示。

## 处理常见 SQL 错误

你可以使用 `DbErr::sql_err()` 方法将与 SQL 相关的错误转换为常见的数据库错误 `SqlErr`，例如唯一约束或外键违反错误。

```rust
assert!(matches!(
    cake.into_active_model().insert(db).await
        .expect_err("插入具有重复主键的行"),
    .sql_err(),
    Some(SqlErr::UniqueConstraintViolation(_))
));

assert!(matches!(
    fk_cake.insert(db).await
        .expect_err("插入具有无效外键的行"),
    .sql_err(),
    Some(SqlErr::ForeignKeyConstraintViolation(_))
));
```

## 处理特定于数据库的错误

你可以从 `RuntimeErr` 中检索特定于数据库的错误代码：

```rust
let my_cake = cake::ActiveModel { id: Set(1), .. };

// 插入一个其主键（`id` 列）设置为 1 的新蛋糕。
let cake = my_cake.save(db).await.expect("无法插入蛋糕");

// 再次插入相同的行，它失败了，因为每行的主键应该是唯一的。
let error: DbErr = cake
    .into_active_model()
    .insert(db)
    .await
    .expect_err("由于主键重复，插入应失败");

match error {
    DbErr::Exec(RuntimeErr::SqlxError(error)) => match error {
        sqlx::Error::Database(e) => {
            // 我们检查数据库（在这种情况下是 MySQL）抛出的错误代码，
            // `23000` 意味着 `ER_DUP_KEY`：我们在表中有重复的键。
            assert_eq!(e.code().unwrap(), "23000");
        }
        _ => panic!("意外的 sqlx::Error 类型"),
    },
    _ => panic!("意外的 DbErr 类型"),
}
```