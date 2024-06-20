# 数据库与异步运行时

:::caution 我们需要您的支持！⭐
感谢您使用 SeaORM。请在我们的[GitHub 仓库](https://github.com/SeaQL/sea-orm)上给我们一个星标！您的支持对于 SeaORM 的持续开发和维护至关重要。
:::

首先，在 `Cargo.toml` 文件的 `[dependencies]` 部分添加 `sea-orm`。

```toml title="Cargo.toml"
sea-orm = { version = "0.12", features = [ <DATABASE_DRIVER>, <ASYNC_RUNTIME>, "macros" ] }
```

您必须选择一个 `DATABASE_DRIVER` 和一个 `ASYNC_RUNTIME`。如果您使用 SeaORM 自动生成的实体（很可能用到），则需要 `macros` 功能。

## DATABASE_DRIVER

您可以从以下选项中选择一个或多个：

+ `sqlx-mysql` - SQLx MySQL 和 MariaDB
+ `sqlx-postgres` - SQLx PostgreSQL
+ `sqlx-sqlite` - SQLx SQLite

更多信息：[SQLx 文档](https://docs.rs/crate/sqlx/latest/features)。

## ASYNC_RUNTIME

您必须从中选择一个：

`runtime-async-std-native-tls`, `runtime-tokio-native-tls`, `runtime-async-std-rustls`, `runtime-tokio-rustls`

基本上，它们的形式为 `runtime-ASYNC_RUNTIME-TLS_LIB`：

+ `ASYNC_RUNTIME` 可以是 [`async-std`](https://crates.io/crates/async-std) 或者 [`tokio`](https://crates.io/crates/tokio)
+ `TLS_LIB` 可以是 [`native-tls`](https://crates.io/crates/native-tls) 或者 [`rustls`](https://crates.io/crates/rustls)

1. 根据您使用的 Rust Web 框架选择对应的 ASYNC_RUNTIME：

| ASYNC_RUNTIME | Web 框架  |
| :-----------: | :------------: |
| `async-std` | [`Tide`](https://docs.rs/tide) |
| `tokio` | [`Axum`](https://docs.rs/axum), [`Actix`](https://actix.rs/), [`Poem`](https://docs.rs/poem), [`Rocket`](https://rocket.rs/) |

2. `native-tls` 使用平台原生的安全设施，而 `rustls` 是一个（几乎）纯 Rust 实现。

## 额外功能

+ `debug-print` - 将每个 SQL 语句打印到日志器
+ `mock` - 单元测试的模拟接口
+ `macros` - 为您带来便利的过程宏
+ `with-chrono` - 支持 [`chrono`](https://crates.io/crates/chrono) 类型
+ `with-time` - 支持 [`time`](https://crates.io/crates/time) 类型
+ `with-json` - 支持 [`serde-json`](https://crates.io/crates/serde-json) 类型
+ `with-rust_decimal` - 支持 [`rust_decimal`](https://crates.io/crates/rust_decimal) 类型
+ `with-bigdecimal` - 支持 [`bigdecimal`](https://crates.io/crates/bigdecimal) 类型
+ `with-uuid` - 支持 [`uuid`](https://crates.io/crates/uuid) 类型
+ `postgres-array` - 支持 Postgres 中的数组类型（当启用 `sqlx-postgres` 功能时自动启用）
+ `sea-orm-internal` - 光标不稳定的内部 API（用于访问重导出的 SQLx 类型）