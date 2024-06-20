# 连接池

要获取数据库连接，请使用[`Database`](https://docs.rs/sea-orm/0.7/sea_orm/struct.Database.html)接口：

```rust
let db: DatabaseConnection = Database::connect("protocol://username:password@host/database").await?;
```

`protocol`可以是`mysql:`,`postgres:`或`sqlite:`。

`host`通常是`localhost`，一个域名或IP地址。

在幕后，创建并由[`DatabaseConnection`](https://docs.rs/sea-orm/0.7/sea_orm/enum.DatabaseConnection.html)拥有的一个[`sqlx::Pool`](https://docs.rs/sqlx/0.5/sqlx/struct.Pool.html)。

每次在它上调用`execute`或`query_one/all`时，都会从池中获取并释放一个连接。

多个查询将在你等待它们时并行执行。

## 连接选项

要配置连接，使用[`ConnectOptions`](https://docs.rs/sea-orm/0.7/sea_orm/struct.ConnectOptions.html)接口：

```rust
let mut opt = ConnectOptions::new("protocol://username:password@host/database".to_owned());
opt.max_connections(100)
   .min_connections(5)
   .connect_timeout(Duration::from_secs(8))
   .idle_timeout(Duration::from_secs(8))
   .max_lifetime(Duration::from_secs(8))
   .sqlx_logging(true);

let db = Database::connect(opt).await?;
```

为了配置底层SQLite数据库，请使用SQLite的[URI Filenames](https://www.sqlite.org/c3ref/open.html)。例如，要以读写模式打开数据库，如果数据库不存在则创建，我们将指定`sqlite://data.db?mode=rwc`。