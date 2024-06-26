# 运行迁移

在定义了迁移之后，你可以在终端中或在应用程序启动时应用或回滚迁移。

## 命令行界面（CLI）

迁移可以在终端中手动运行。`DATABASE_URL` 必须在你的环境中设置，请按照 [这里](04-generate-entity/01-sea-orm-cli.md#configure-environment) 的说明进行配置。

支持的命令：
- `init`：初始化迁移目录
- `generate`：生成一个新的迁移文件
- `up`：应用所有待处理的迁移
- `up -n 10`：应用 10 个待处理的迁移
- `down`：回滚最近应用的迁移
- `down -n 10`：回滚最近 10 个应用的迁移
- `status`：检查所有迁移的状态
- `fresh`：从数据库中删除所有表，然后重新应用所有迁移
- `refresh`：回滚所有已应用的迁移，然后重新应用所有迁移
- `reset`：回滚所有已应用的迁移

### 通过 `sea-orm-cli`

`sea-orm-cli` 实际上会执行 `cargo run --manifest-path ./migration/Cargo.toml -- COMMAND`。

```shell
$ sea-orm-cli migrate COMMAND
```

你可以自定义清单路径。

```shell
$ sea-orm-cli migrate COMMAND -d ./other/migration/dir
```

### 通过 SeaSchema 迁移器 CLI

运行在 `migration/main.rs` 中定义的迁移器 CLI。

```shell
cd migration
cargo run -- COMMAND
```

## 通过编程方式迁移

你可以使用实现了 [`MigratorTrait`](https://docs.rs/sea-orm-migration/*/sea_orm_migration/migrator/trait.MigratorTrait.html) 的 `Migrator` 在应用程序启动时执行迁移。

```rust title="src/main.rs"
use migration::{Migrator, MigratorTrait};

/// 应用所有待处理的迁移
Migrator::up(db, None).await?;

/// 应用 10 个待处理的迁移
Migrator::up(db, Some(10)).await?;

/// 回滚所有已应用的迁移
Migrator::down(db, None).await?;

/// 回滚最近 10 个已应用的迁移
Migrator::down(db, Some(10)).await?;

/// 检查所有迁移的状态
Migrator::status(db).await?;

/// 从数据库中删除所有表，然后重新应用所有迁移
Migrator::fresh(db).await?;

/// 回滚所有已应用的迁移，然后重新应用所有迁移
Migrator::refresh(db).await?;

/// 回滚所有已应用的迁移
Migrator::reset(db).await?;
```

## 在任何 PostgreSQL 架构上运行迁移

默认情况下，迁移将在 `public` 架构上运行，现在你可以在 CLI 或编程方式下运行迁移时覆盖它。

对于 CLI，你可以使用 `-s` / `--database_schema` 选项指定目标架构：
* 通过 sea-orm-cli: `sea-orm-cli migrate -u postgres://root:root@localhost/database -s my_schema`
* 通过 SeaORM 迁移器: `cargo run -- -u postgres://root:root@localhost/database -s my_schema`

你也可以编程方式在目标架构上运行迁移：

```rust
let connect_options = ConnectOptions::new("postgres://root:root@localhost/database")
    .set_schema_search_path("my_schema") // 覆盖默认架构
    .to_owned();

let db = Database::connect(connect_options).await?

migration::Migrator::up(&db, None).await?;
```

## 检查迁移状态

你可以使用 `MigratorTrait::get_pending_migrations()` 和 `MigratorTrait::get_applied_migrations()` 来检索迁移列表。

```rust
let migrations = Migrator::get_pending_migrations(db).await?;
assert_eq!(migrations.len(), 5);

let migration = migrations[0];
assert_eq!(migration.name(), "m20220118_000002_create_fruit_table");
assert_eq!(migration.status(), MigrationStatus::Pending);
```