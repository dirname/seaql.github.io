# 运行迁移

## 在任何MSSQL模式上运行迁移

默认情况下，迁移将在 `dbo` 模式下运行，现在你可以在CLI或程序化地运行迁移时覆盖它。

对于CLI，你可以使用 `-s` / `--database_schema` 选项指定目标模式：
* 通过 sea-orm-cli: `sea-orm-cli migrate -u mssql://root:root@localhost/database -s my_schema`
* 通过 SeaORM 迁移器: `cargo run -- -u mssql://root:root@localhost/database -s my_schema`

你也可以在目标模式上程序化地运行迁移：

```rust
// 使用默认的 `dbo` 模式
let connect_options = ConnectOptions::new("mssql://root:root@localhost/database");
// 或者，覆盖默认模式
let connect_options = ConnectOptions::new("mssql://root:root@localhost/database?currentSchema=my_schema");

let db = Database::connect(connect_options).await?;

migration::Migrator::up(&db, None).await?;
```