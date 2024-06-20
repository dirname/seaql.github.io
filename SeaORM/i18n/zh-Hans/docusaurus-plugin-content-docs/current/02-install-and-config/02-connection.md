# 数据库连接

要获取数据库连接，请使用[`Database`](https://docs.rs/sea-orm/*/sea_orm/struct.Database.html)接口：

```rust
let db: DatabaseConnection = Database::connect("protocol://username:password@host/database").await?;
```

`protocol` 可以是 `mysql:`, `postgres:` 或者 `sqlite:`。

`host` 通常是 `localhost`，一个域名或 IP 地址。

:::tip

如果你无法使 `localhost` 工作，尝试输入 IP 地址和端口号，例如 `127.0.0.1:3306` 或者甚至 `192.168.x.x`。

:::

在内部，创建了一个[`sqlx::Pool`](https://docs.rs/sqlx/0.5/sqlx/struct.Pool.html)，并由[`DatabaseConnection`](https://docs.rs/sea-orm/*/sea_orm/enum.DatabaseConnection.html)拥有。

每次你调用 `execute` 或 `query_one/all`，都会从池中获取并释放一个连接。

多个查询将在你等待它们时并行执行。

## 连接字符串

这里有一些针对特定数据库的选项提示：

### MySQL

暂时想不到任何

### Postgres

#### 指定模式

```
postgres://username:password@host/database?currentSchema=my_schema
```

### SQLite

#### 内存中

```
sqlite::memory:
```

#### 如果不存在则创建文件

```
sqlite://path/to/db.sqlite?mode=rwc
```

#### 只读

```
sqlite://path/to/db.sqlite?mode=ro
```

## 连接选项

为了配置连接，使用[`ConnectOptions`](https://docs.rs/sea-orm/*/sea_orm/struct.ConnectOptions.html)接口：

```rust
let mut opt = ConnectOptions::new("protocol://username:password@host/database");
opt.max_connections(100)
    .min_connections(5)
    .connect_timeout(Duration::from_secs(8))
    .acquire_timeout(Duration::from_secs(8))
    .idle_timeout(Duration::from_secs(8))
    .max_lifetime(Duration::from_secs(8))
    .sqlx_logging(true)
    .sqlx_logging_level(log::LevelFilter::Info)
    .set_schema_search_path("my_schema"); // 设置默认 PostgreSQL 模式

let db = Database::connect(opt).await?;
```

## 检查连接是否有效

检查到数据库的连接是否仍然有效。

```rust
|db: DatabaseConnection| {
    assert!(db.ping().await.is_ok());
    db.clone().close().await;
    assert!(matches!(db.ping().await, Err(DbErr::ConnectionAcquire)));
}
```

## 关闭连接

连接将在丢弃时自动关闭。要显式关闭连接，请调用 `close` 方法。

```rust
let db = Database::connect(url).await?;

// 在这里关闭连接
db.close().await?;
```