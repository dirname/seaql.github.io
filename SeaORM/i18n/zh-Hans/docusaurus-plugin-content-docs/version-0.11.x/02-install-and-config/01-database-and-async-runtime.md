# 数据库与异步运行时

首先，请在我们的[GitHub仓库](https://github.com/SeaQL/sea-orm)上给我们点个星！您的支持对于SeaORM的持续维护至关重要。

然后，在您的`Cargo.toml`文件的`[dependencies]`部分添加`sea-orm`。

```toml title="Cargo.toml"
sea-orm = { version = "^0", features = [ <DATABASE_DRIVER>, <ASYNC_RUNTIME>, "macros" ] }
```

您必须选择一个`DATABASE_DRIVER`和一个`ASYNC_RUNTIME`。如果使用SeaORM生成的实体（很可能用到），则需要`macros`。

## DATABASE_DRIVER

您可以从以下选项中选择一个或多个：

+ `sqlx-mysql` - SQLx MySQL 和 MariaDB
+ `sqlx-postgres` - SQLx PostgreSQL
+ `sqlx-sqlite` - SQLx SQLite

参见：[SQLx文档](https://docs.rs/crate/sqlx/latest/features)。

## ASYNC_RUNTIME

您必须从以下选项中选择一个：

`runtime-actix-native-tls`, `runtime-async-std-native-tls`, `runtime-tokio-native-tls`, `runtime-actix-rustls`, `runtime-async-std-rustls`, `runtime-tokio-rustls`

基本上，它们的形式为`runtime-ASYNC_RUNTIME-TLS_LIB`：

+ `ASYNC_RUNTIME`可以是[`actix`](https://crates.io/crates/actix)，[`async-std`](https://crates.io/crates/async-std)，或[`tokio`](https://crates.io/crates/tokio)
+ `TLS_LIB`可以是[`native-tls`](https://crates.io/crates/native-tls)或[`rustls`](https://crates.io/crates/rustls)

1. 根据您使用的Rust Web框架选择对应的ASYNC_RUNTIME：

| ASYNC_RUNTIME | Web框架   |
| :-----------: | :--------: |
| `actix`       | [`Actix`](https://actix.rs/) |
| `async-std`   | [`Tide`](https://docs.rs/tide) |
| `tokio`       | [`Axum`](https://docs.rs/axum), [`Rocket`](https://rocket.rs/), [`Poem`](https://docs.rs/poem) |

2. `native-tls`使用平台的原生安全设施，而`rustls`是一个纯Rust实现。

## 额外特性

+ `debug-print` - 将每个SQL语句打印到日志器
+ `mock` - 用于单元测试的模拟接口
+ `macros` - 为您方便的程序宏
+ `with-chrono` - 支持[`chrono`](https://crates.io/crates/chrono)类型
+ `with-time` - 支持[`time`](https://crates.io/crates/time)类型
+ `with-json` - 支持[`serde-json`](https://crates.io/crates/serde-json)类型
+ `with-rust_decimal` - 支持[`rust_decimal`](https://crates.io/crates/rust_decimal)类型
+ `with-bigdecimal` - 支持[`bigdecimal`](https://crates.io/crates/bigdecimal)类型
+ `with-uuid` - 支持[`uuid`](https://crates.io/crates/uuid)类型
+ `postgres-array` - 支持Postgres中的数组类型
+ `sea-orm-internal` - 选择性启用不稳定的内部API（为了访问重导出的SQLx类型）