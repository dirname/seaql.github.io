# 数据库与异步运行时

首先，在`Cargo.toml`的`[dependencies]`部分添加`sea-orm-x`。

```toml title="Cargo.toml"
sea-orm = { version = "0.12", path = "<SEA_ORM_X_ROOT>/sea-orm-x", features = [ <DATABASE_DRIVER>, <ASYNC_RUNTIME>, "macros" ] }
```

你必须选择一个`DATABASE_DRIVER`和一个`ASYNC_RUNTIME`。如果你使用SeaORM生成的实体（很可能如此），则需要`macros`。

## DATABASE_DRIVER

你可以从以下选项中选择一个或多个：

+ `sqlz-mssql` - SQLz MSSQL

## ASYNC_RUNTIME

你必须从中选择一个：

`runtime-async-std-native-tls`, `runtime-tokio-native-tls`, `runtime-async-std-rustls`, `runtime-tokio-rustls`

基本上，它们的形式为`runtime-ASYNC_RUNTIME-TLS_LIB`：

+ `ASYNC_RUNTIME`可以是[`async-std`](https://crates.io/crates/async-std) 或者 [`tokio`](https://crates.io/crates/tokio)
+ `TLS_LIB`可以是[`native-tls`](https://crates.io/crates/native-tls) 或者 [`rustls`](https://crates.io/crates/rustls)

1. 根据你的Rust Web框架选择对应的ASYNC_RUNTIME：

| ASYNC_RUNTIME | Web框架 |
| :-----------: | :-----: |
| `async-std` | [`Tide`](https://docs.rs/tide) |
| `tokio` | [`Axum`](https://docs.rs/axum), [`Actix`](https://actix.rs/), [`Poem`](https://docs.rs/poem), [`Rocket`](https://rocket.rs/) |

2. `native-tls`使用平台的原生安全设施，而`rustls`是一个（几乎）纯Rust实现。

## 额外功能

+ `debug-print` - 将每个SQL语句打印到日志器
+ `mock` - 用于单元测试的模拟接口
+ `macros` - 为你提供便利的过程宏
+ `with-chrono` - 支持[`chrono`](https://crates.io/crates/chrono)类型
+ `with-time` - 支持[`time`](https://crates.io/crates/time)类型
+ `with-json` - 支持[`serde-json`](https://crates.io/crates/serde-json)类型
+ `with-rust_decimal` - 支持[`rust_decimal`](https://crates.io/crates/rust_decimal)类型
+ `with-bigdecimal` - 支持[`bigdecimal`](https://crates.io/crates/bigdecimal)类型
+ `with-uuid` - 支持[`uuid`](https://crates.io/crates/uuid)类型
+ `postgres-array` - 支持Postgres中的数组类型（当启用`sqlx-postgres`特性时自动启用）
+ `sea-orm-internal` - 选择性加入不稳定的内部API（用于访问重导出的SQLx类型）