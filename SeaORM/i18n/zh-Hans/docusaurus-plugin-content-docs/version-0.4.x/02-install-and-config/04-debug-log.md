# 调试日志

SeaORM（启用了 `debug-print` 功能）和 SQLx 都通过 [`log`](https://crates.io/crates/log) 包来记录调试信息。

你需要选择一个 [日志实现](https://docs.rs/log/0.4.14/log/#available-logging-implementations) 来捕获并查看调试日志。要使用 [`env_logger`](https://crates.io/crates/env_logger)，请参见下面的代码片段和一个完整的示例 [在这里](https://github.com/SeaQL/sea-orm/blob/master/examples/tokio/src/main.rs)。

```rust
pub async fn main() {
    env_logger::builder()
        .filter_level(log::LevelFilter::Debug)
        .is_test(true)
        .init();

    // ...
}
```

要过滤来自 `sea_orm` 的调试日志，你可以：

```bash
$ RUST_LOG=debug cargo run 2>&1 | grep sea_orm
[2021-02-02T20:20:20Z DEBUG sea_orm::driver::sqlx_mysql] SELECT `cake`.`id`, `cake`.`name` FROM `cake` LIMIT 1
```