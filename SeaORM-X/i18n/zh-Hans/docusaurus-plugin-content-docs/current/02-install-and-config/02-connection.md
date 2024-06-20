# 数据库连接

要获取数据库连接，请使用[`Database`](https://docs.rs/sea-orm/*/sea_orm/struct.Database.html)接口：

```rust
let db: DatabaseConnection = Database::connect("protocol://username:password@host/database").await?;
```

`protocol` 可以是 `mssql:` 等。

`host` 通常是 `localhost`，一个域名或 IP 地址。

:::tip

如果你无法使 `localhost` 工作，尝试输入 IP 地址和端口号，例如 `127.0.0.1:1433` 或者甚至是 `192.168.x.x`。

:::

在幕后，创建并由[`DatabaseConnection`](https://docs.rs/sea-orm/*/sea_orm/enum.DatabaseConnection.html)拥有的 `sqlz::Pool` 被创建。

每次你调用 `execute` 或 `query_one/all`，池中都会获取并释放一个连接。

当你 `await` 它们时，多个查询将并行执行。

## 连接字符串

这里有一些针对特定数据库选项的提示：

### MSSQL

#### 指定模式

如果模式为 `dbo`，简单地写：

```
mssql://username:password@host/database
```

或者，通过提供额外的 `currentSchema` 查询参数来指定模式名称。

```
mssql://username:password@host/database?currentSchema=my_schema
```

#### 信任对等证书

你可以通过提供额外的 `trustCertificate` 查询参数来信任对等证书。

```
mssql://username:password@host/database?trustCertificate=true
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
    .sqlx_logging_level(log::LevelFilter::Info);

let db = Database::connect(opt).await?;
```

## 检查连接是否有效

检查与数据库的连接是否仍然有效。

```rust
|db: DatabaseConnection| {
    assert!(db.ping().await.is_ok());
    db.clone().close().await;
    assert!(matches!(db.ping().await, Err(DbErr::ConnectionAcquire)));
}
```

## 关闭连接

连接会在丢弃时自动关闭。要显式关闭连接，请调用 `close` 方法。

```rust
let db = Database::connect(url).await?;

// 在这里关闭连接
db.close().await?;
```