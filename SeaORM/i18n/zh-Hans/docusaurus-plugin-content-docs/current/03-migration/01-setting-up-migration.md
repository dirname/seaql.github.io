# 设置迁移

:::tip 我们需要您的帮助！📝
感谢您阅读这份文档。在您继续阅读的同时，能否花费几分钟时间完成我们的[SeaQL 社区调查](https://www.sea-ql.org/community-survey)？这对于 SeaORM 的持续开发和维护至关重要。
:::

如果您是从一个全新的数据库开始，最好对数据库模式进行版本控制。SeaORM 配备了一个迁移工具，允许您使用 SeaQuery 或 SQL 编写迁移。

如果您已经有了包含表和数据的数据库，您可以跳过本章并继续阅读[生成 SeaORM 实体](04-generate-entity/01-sea-orm-cli.md)。

## 迁移表

将在您的数据库中创建一个表来跟踪已应用的迁移。当您运行迁移时，它将自动创建。

<details>
    <summary>默认情况下，它将被命名为 `seaql_migrations`。您也可以为迁移表使用自定义名称。</summary>

```rust
#[async_trait::async_trait]
impl MigratorTrait for Migrator {
    // 覆盖迁移表的名称
    fn migration_table_name() -> sea_orm::DynIden {
        Alias::new("override_migration_table_name").into_iden()
    }
    ..
}
```  
</details>

## 创建迁移目录

首先，使用 `cargo` 安装 `sea-orm-cli`。

```shell
cargo install sea-orm-cli
```

:::tip SQL Server（MSSQL）后端

带有 MSSQL 支持的 `sea-orm-cli` 安装可在此处找到[这里](https://www.sea-ql.org/SeaORM-X/docs/migration/setting-up-migration/)。

:::

然后，通过执行 `sea-orm-cli migrate init` 来设置迁移目录。

```shell
# 在 `./migration` 中设置迁移目录
$ sea-orm-cli migrate init
初始化迁移目录...
正在创建文件 `./migration/src/lib.rs`
正在创建文件 `./migration/src/m20220101_000001_create_table.rs`
正在创建文件 `./migration/src/main.rs`
正在创建文件 `./migration/Cargo.toml`
正在创建文件 `./migration/README.md`
完成！

# 如果您想在其他地方设置迁移目录
$ sea-orm-cli migrate init -d ./other/migration/dir
```

您应该有一个结构如下所示的迁移目录。

```
migration
├── Cargo.toml
├── README.md
└── src
    ├── lib.rs                              # Migrator API，用于集成
    ├── m20220101_000001_create_table.rs    # 一个示例迁移文件
    └── main.rs                             # Migrator CLI，用于手动运行
```

请注意，如果您直接在 Git 存储库中设置迁移目录，还将创建一个 `.gitignore` 文件。

## 工作区结构

建议您按照以下方式构建您的 cargo 工作区，以便在应用程序包和迁移包之间共享 SeaORM 实体。查阅[集成示例](https://github.com/SeaQL/sea-orm/tree/master/examples)以获取演示。

### 迁移包

导入 [`sea-orm-migration`](https://crates.io/crates/sea-orm-migration) 和 [`async-std`](https://crates.io/crates/async-std) 包。

```toml title="migration/Cargo.toml"
[dependencies]
async-std = { version = "1", features = ["attributes", "tokio1"] }

[dependencies.sea-orm-migration]
version = "0.12"
features = [
  # 至少启用一个 `ASYNC_RUNTIME` 和 `DATABASE_DRIVER` 特性，如果您想要通过 CLI 运行迁移。
  # 查看支持的特性列表：https://www.sea-ql.org/SeaORM/docs/install-and-config/database-and-async-runtime。
  # 例如。
  # "runtime-tokio-rustls",  # `ASYNC_RUNTIME` 特性
  # "sqlx-postgres",         # `DATABASE_DRIVER` 特性
]
```

让我们编写一个迁移。详细说明请参阅下一节。

```rust title="migration/src/m20220120_000001_create_post_table.rs"
use sea_orm_migration::prelude::*;

#[derive(DeriveMigrationName)]
pub struct Migration;

#[async_trait]
impl MigrationTrait for Migration {
    async fn up(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        // 将下面的示例替换为您自己的迁移脚本
        todo!();
    }

    async fn down(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        // 将下面的示例替换为您自己的迁移脚本
        todo!();
    }
}
```

### 实体包

在您的根工作区中创建一个实体包。

<details>
    <summary>您还没有定义 SeaORM 实体吗？</summary>

您可以创建一个没有任何实体文件的实体包。然后，编写迁移并运行它以在数据库中创建表。最后，使用 `sea-orm-cli` [生成 SeaORM 实体](04-generate-entity/01-sea-orm-cli.md)，并将实体文件输出到 `entity/src/entities` 文件夹。

生成实体文件后，您可以通过在 `entity/src/lib.rs` 中添加以下行来重新导出生成的实体：

```rust
mod entities;
pub use entities::*;
```
</details>

```
entity
├── Cargo.toml      # 包含 SeaORM 依赖项
└── src
    ├── lib.rs      # 重新导出 SeaORM 和实体
    └── post.rs     # 定义 `post` 实体
```

指定 SeaORM 依赖项。

```toml title="entity/Cargo.toml"
[dependencies]
sea-orm = { version = "0.12" }
```

### 应用程序包

这是应用程序逻辑所在的地方。

创建一个包含应用程序、实体和迁移包的工作区，并将实体包导入应用程序包。

如果我们希望将迁移工具作为应用程序的一部分打包，您还可能想要导入迁移包。

```toml title="./Cargo.toml"
[workspace]
members = [".", "entity", "migration"]

[dependencies]
entity = { path = "entity" }
migration = { path = "migration" } # 取决于您的需求

[dependencies]
sea-orm = { version = "0.12", features = [..] }
```

在您的应用程序中，您可以在启动时运行迁移器。

```rust title="src/main.rs"
use migration::{Migrator, MigratorTrait};

let connection = sea_orm::Database::connect(&database_url).await?;
Migrator::up(&connection, None).await?;
```