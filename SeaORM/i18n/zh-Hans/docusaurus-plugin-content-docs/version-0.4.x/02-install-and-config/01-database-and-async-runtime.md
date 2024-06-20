# 数据库与异步运行时

首先，在你的 `Cargo.toml` 的 `[dependencies]` 部分添加 `sea-orm`。

```toml title="Cargo.toml"
sea-orm = { version = "^0.4", features = [ DATABASE_DRIVER, ASYNC_RUNTIME, "macros" ], default-features = false }
```

你必须选择一个 `DATABASE_DRIVER` 和一个 `ASYNC_RUNTIME`。如果你使用 SeaORM 生成的实体（大概率会用到），那么也需要 `macros`。

## DATABASE_DRIVER

你可以从以下选项中选择一个或多个：

+ `sqlx-mysql` - SQLx MySQL 和 MariaDB
+ `sqlx-postgres` - SQLx Postgres
+ `sqlx-sqlite` - SQLx SQLite

参考：[SQLx 文档](https://docs.rs/crate/sqlx/latest/features)。

## ASYNC_RUNTIME

你必须从中选择一个：

`runtime-actix-native-tls`, `runtime-async-std-native-tls`, `runtime-tokio-native-tls`, `runtime-actix-rustls`, `runtime-async-std-rustls`, `runtime-tokio-rustls`

基本上，它们的形式为 `runtime-ASYNC_RUNTIME-TLS_LIB`：

+ `ASYNC_RUNTIME` 可以是 [`actix`](https://crates.io/crates/actix), [`async-std`](https://crates.io/crates/async-std) 或者 [`tokio`](https://crates.io/crates/tokio)
+ `TLS_LIB` 可以是 [`native-tls`](https://crates.io/crates/native-tls) 或者 [`rustls`](https://crates.io/crates/rustls)

提示 1：[`Rocket`](https://rocket.rs/) 使用 `tokio`，[`Actix`](https://actix.rs/) 使用 `actix`，[`Tide`](https://docs.rs/tide) 使用 `async-std`

提示 2：`native-tls` 使用平台原生的安全设施，而 `rustls` 是纯 Rust 实现

## 额外特性

`debug-print` - 打印每一条 SQL 语句至日志

`mock` - 用于单元测试的模拟接口