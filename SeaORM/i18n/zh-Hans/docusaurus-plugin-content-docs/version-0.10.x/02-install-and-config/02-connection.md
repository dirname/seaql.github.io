# 连接池

要获取数据库连接，请使用[`Database`](https://docs.rs/sea-orm/*/sea_orm/struct.Database.html)接口：

```rust
let db: DatabaseConnection = Database::connect("protocol://username:password@host/database").await?;
```

`protocol`可以是`mysql:`, `postgres:` 或 `sqlite:`。

`host`通常是`localhost`，一个域名或一个IP地址。

在幕后，会创建并由[`DatabaseConnection`](https://docs.rs/sea-orm/*/sea_orm/enum.DatabaseConnection.html)拥有一个[`sqlx::Pool`](https://docs.rs/sqlx/0.5/sqlx/struct.Pool.html)。

每次你调用其上的`execute`或`query_one/all`时，都会从池中获取和释放一个连接。

当你`await`它们时，多个查询将并行执行。

## 连接选项

要配置连接，请使用[`ConnectOptions`](https://docs.rs/sea-orm/*/sea_orm/struct.ConnectOptions.html)接口：

```rust
let mut opt = ConnectOptions::new("protocol://username:password@host/database".to_owned());
opt.max_connections(100)
   .min_connections(5)
   .connect_timeout(Duration::from_secs(8))
   .acquire_timeout(Duration::from_secs(8))
   .idle_timeout(Duration::from_secs(8))
   .max_lifetime(Duration::from_secs(8))
   .sqlx_logging(true)
   .sqlx_logging_level(log::LevelFilter::Info)
   .set_schema_search_path("my_schema".into()); // 设置默认的PostgreSQL模式

let db = Database::connect(opt).await?;
```