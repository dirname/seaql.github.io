# 调试日志

SeaORM（启用了 `debug-print` 功能）通过 [`tracing`](https://crates.io/crates/tracing) 包记录调试消息。

你需要设置 up [`tracing-subscriber`](https://crates.io/crates/tracing-subscriber) 来捕获和查看调试日志。参见下面的代码片段，以及一个完整示例 [在这里](https://github.com/SeaQL/sea-orm/blob/master/examples/actix_example/src/main.rs)。

```rust
pub async fn main() {
    tracing_subscriber::fmt()
        .with_max_level(tracing::Level::DEBUG)
        .with_test_writer()
        .init();

    // ...
}
```

要从 `sea_orm` 过滤调试日志，你可以：

```bash
$ RUST_LOG=debug cargo run 2>&1 | grep sea_orm
[2021-02-02T20:20:20Z DEBUG sea_orm::driver::sqlx_mysql] SELECT `cake`.`id`, `cake`.`name` FROM `cake` LIMIT 1
```