# 设置迁移

> 如果您已经有一个包含表和数据的数据库，可以跳过本章，直接进入 [生成 SeaORM 实体](04-generate-entity/01-sea-orm-cli.md)。

如果您是从一个全新的数据库开始，最好对您的数据库模式进行版本控制。SeaORM 配备了一个迁移工具，允许您用 SeaQuery 或 SQL 编写迁移。

## 迁移表

在您的数据库中会创建一个名为 `seaql_migrations` 的表，用于跟踪已应用的迁移。当您运行迁移时，它将自动创建。

## 创建迁移目录

首先，使用 `cargo` 安装 `sea-orm-cli`。

```shell
cargo install sea-orm-cli
```

然后，通过执行 `sea-orm-cli migrate init` 来设置迁移目录。

```shell
# 在 `./migration` 中设置迁移目录
$ sea-orm-cli migrate init
正在初始化迁移目录...
正在创建文件 `./migration/src/lib.rs`
正在创建文件 `./migration/src/m20220101_000001_create_table.rs`
正在创建文件 `./migration/src/main.rs`
正在创建文件 `./migration/Cargo.toml`
正在创建文件 `./migration/README.md`
完成！

# 如果您想在其他地方设置迁移目录
$ sea-orm-cli migrate init -d ./other/migration/dir
```

您应该有一个如下结构的迁移目录。

```
migration
├── Cargo.toml
├── README.md
└── src
    ├── lib.rs                              # 迁移器 API，用于集成
    ├── m20220101_000001_create_table.rs    # 一个示例迁移文件
    └── main.rs                             # 迁移器 CLI，用于手动运行
```

## 工作区结构

建议您按照以下方式构建 cargo 工作区，以便在 app crate 和迁移 crate 之间共享 SeaORM 实体。查看 [集成示例](https://github.com/SeaQL/sea-orm/tree/master/examples) 以了解演示。

### 迁移 Crate

导入 `sea-orm-migration` 和 `async-std` crate。

```toml title="migration/Cargo.toml"
[dependencies]
async-std = { version = "^1", features = ["attributes", "tokio1"] }

[dependencies.sea-orm-migration]
version = "^0"
features = [
  # 如果您想通过 CLI 运行迁移，请至少启用一个 `ASYNC_RUNTIME` 和 `DATABASE_DRIVER` 特性。
  # 查看支持的特性列表：https://www.sea-ql.org/SeaORM/docs/install-and-config/database-and-async-runtime。
  # 例如。
  # "runtime-tokio-rustls",  # `ASYNC_RUNTIME` 特性
  # "sqlx-postgres",         # `DATABASE_DRIVER` 特性
]
```

让我们编写一个迁移。详细的说明在下一节。

```rust title="migration/src/m20220120_000001_create_post_table.rs"
use sea_orm_migration::prelude::*;

#[derive(DeriveMigrationName)]
pub struct Migration;

#[async_trait]
impl MigrationTrait for Migration {
    async fn up(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        // 将下面的示例替换为自己的迁移脚本
        todo!();
    }

    async fn down(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        // 将下面的示例替换为自己的迁移脚本
        todo!();
    }
}
```

### 实体 Crate

在您的根工作区中创建一个实体 crate。

<details>
    <summary>您还没有定义 SeaORM 实体？</summary>

您可以创建一个没有实体文件的实体 crate。然后，编写迁移并运行它来在数据库中创建表。最后，使用 `sea-orm-cli` [生成 SeaORM 实体](04-generate-entity/01-sea-orm-cli.md)，并将实体文件输出到 `entity/src/entities` 文件夹。

生成实体文件后，您可以在 `entity/src/lib.rs` 中添加以下行来重新导出生成的实体：

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
sea-orm = { version = "^0" }
```

### 应用 Crate

这是应用程序逻辑所在的地方。

创建一个包含 app、entity 和 migration crate 的工作区，并将 entity crate 导入到 app crate。

如果我们希望将迁移工具作为应用的一部分捆绑在一起，您还可能需要导入迁移 crate。

```toml title="./Cargo.toml"
[workspace]
members = [".", "entity", "migration"]

[dependencies]
entity = { path = "entity" }
migration = { path = "migration" } # 取决于您的需求

[dependencies.sea-orm]
version = "^0"
features = [ ... ]
```

在您的应用中，您可以在启动时运行迁移器。

```rust title="src/main.rs"
use migration::{Migrator, MigratorTrait};

let connection = sea_orm::Database::connect(&database_url).await?;
Migrator::up(&connection, None).await?;
```