# 数据库与异步运行时

首先，在你的 `Cargo.toml` 的 `[dependencies]` 部分添加 `sea-orm`。

```toml title="Cargo.toml"
sea-orm = { version = "^0", features = [ <DATABASE_DRIVER>, <ASYNC_RUNTIME>, "macros" ] }
```

你必须选择一个 `DATABASE_DRIVER` 和一个 `ASYNC_RUNTIME`。如果你使用 SeaORM 的生成实体（很可能），则需要 `macros`。

## DATABASE_DRIVER

你可以从以下选项中选择一个或多个：

+ `sqlx-mysql` - SQLx MySQL 和 MariaDB
+ `sqlx-postgres` - SQLx PostgreSQL
+ `sqlx-sqlite` - SQLx SQLite

更多信息：[SQLx 文档](https://docs.rs/crate/sqlx/latest/features)。

## ASYNC_RUNTIME

你必须从中选择一个：

`runtime-actix-native-tls`, `runtime-async-std-native-tls`, `runtime-tokio-native-tls`, `runtime-actix-rustls`, `runtime-async-std-rustls`, `runtime-tokio-rustls`

基本上，它们的形式为 `runtime-ASYNC_RUNTIME-TLS_LIB`：

+ `ASYNC_RUNTIME` 可以是 [`actix`](https://crates.io/crates/actix), [`async-std`](https://crates.io/crates/async-std), 或者 [`tokio`](https://crates.io/crates/tokio)
+ `TLS_LIB` 可以是 [`native-tls`](https://crates.io/crates/native-tls) 或者 [`rustls`](https://crates.io/crates/rustls)

1. 根据你的 Rust Web 框架选择对应的 ASYNC_RUNTIME：

| ASYNC_RUNTIME | Web 框架  |
| :-----------: | :------------: |
| `actix` | [`Actix`](https://actix.rs/) |
| `async-std` | [`Tide`](https://docs.rs/tide) |
| `tokio` | [`Rocket`](https://rocket.rs/) |

2. `native-tls` 使用平台的原生安全设施，而 `rustls` 是纯 Rust 实现。

## 额外特性

`debug-print` - 将每个 SQL 语句打印到日志器

`mock` - 用于单元测试的模拟接口