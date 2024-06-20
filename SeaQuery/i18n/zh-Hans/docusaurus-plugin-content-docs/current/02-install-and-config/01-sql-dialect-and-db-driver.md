# SQL 方言与数据库驱动

```toml
# Cargo.toml
[dependencies]
sea-query = "^0"
```

SeaQuery 非常轻量级，所有依赖都是可选的。

### 特性标志

宏：`derive`

异步支持：`thread-safe`（使用 `Arc` 代替 `Rc`）

SQL 方言：`backend-mysql`，`backend-postgres`，`backend-sqlite`

类型支持：`with-chrono`，`with-json`，`with-rust_decimal`，`with-bigdecimal`，`with-uuid`，
`postgres-array`

驱动支持：`sqlx-mysql`，`sqlx-postgres`，`sqlx-sqlite`，
`postgres`，`postgres-*`，`rusqlite`

Postgres 支持：`postgres`，`postgres-chrono`，`postgres-json`，`postgres-rust_decimal`，
`postgres-bigdecimal`，`postgres-uuid`，`postgres-array`，`postgres-interval`