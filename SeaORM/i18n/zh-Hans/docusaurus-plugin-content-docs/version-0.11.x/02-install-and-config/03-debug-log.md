# 调试日志

SeaORM（启用了`debug-print`特性）通过[`tracing`](https://crates.io/crates/tracing)包记录调试消息。

你需要设置[`tracing-subscriber`](https://crates.io/crates/tracing-subscriber)来捕获和查看调试日志。参考下面的代码片段，一个完整的示例[在这里](https://github.com/SeaQL/sea-orm/blob/master/examples/actix_example/src/main.rs)。

```rust
pub async fn main() {
    tracing_subscriber::fmt()
        .with_max_level(tracing::Level::DEBUG)
        .with_test_writer()
        .init();

    // ...
}
```

要过滤来自`sea_orm`的调试日志，你可以：

```bash
$ RUST_LOG=debug cargo run 2>&1 | grep sea_orm
[2021-02-02T20:20:20Z DEBUG sea_orm::driver::sqlx_mysql] SELECT `cake`.`id`, `cake`.`name` FROM `cake` LIMIT 1
```

## 禁用SQLx日志

为了配置连接，使用[`ConnectOptions`](https://docs.rs/sea-orm/*/sea_orm/struct.ConnectOptions.html)接口：

```rust
let mut opt = ConnectOptions::new("protocol://username:password@host/database".to_owned());
opt.sqlx_logging(false) // 禁用SQLx日志
    .sqlx_logging_level(log::LevelFilter::Info); // 设置SQLx日志级别

let db = Database::connect(opt).await?;
```