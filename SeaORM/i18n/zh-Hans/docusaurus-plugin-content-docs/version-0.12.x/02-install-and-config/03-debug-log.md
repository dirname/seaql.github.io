# 调试日志

SeaORM 通过 [`tracing`](https://crates.io/crates/tracing) 包来记录调试信息。

你可以通过启用 `debug-print` 功能标志来开启 SeaORM 的日志记录：

```toml
[dependencies.sea-orm]
version = "0.12"
features = ["debug-print"]
```

你需要设置 [`tracing-subscriber`](https://crates.io/crates/tracing-subscriber) 来捕获和查看调试日志。请参考下面的代码片段，以及一个完整的示例 [这里](https://github.com/SeaQL/sea-orm/blob/master/examples/actix_example/src/main.rs)。

```rust
pub async fn main() {
    tracing_subscriber::fmt()
        .with_max_level(tracing::Level::DEBUG)
        .with_test_writer()
        .init();

    // ...
}
```

SeaORM 的调试打印会将参数注入到 SQL 字符串中，使其更易于阅读。你将看到的是 `SELECT "chef"."name" FROM "chef" WHERE "chef"."id" = 100` 而不是 `SELECT "chef"."name" FROM "chef" WHERE "chef"."id" = $1`。

## SQLx 日志记录

SQLx 默认也会进行日志记录。如果你已经开启了 SeaORM 的 `debug-print`，可以通过传递 [`ConnectOptions`](https://docs.rs/sea-orm/*/sea_orm/struct.ConnectOptions.html) 到 `connect()` 来禁用 SQLx 的日志记录。

```rust
let mut opt = ConnectOptions::new("protocol://username:password@host/database".to_owned());
opt
    .sqlx_logging(false) // 禁用 SQLx 日志记录
    .sqlx_logging_level(log::LevelFilter::Info); // 或者设置 SQLx 日志级别

let db = Database::connect(opt).await?;
```