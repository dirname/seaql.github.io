# 设置迁移

使用以 SeaQuery 或原始 SQL 编写的迁移来版本控制你的数据库模式。

## 迁移表

将在你的数据库中创建一个名为 `seaql_migrations` 的表，用于跟踪已应用的迁移。当你运行迁移时，它将自动创建。

```rust
#[derive(Clone, Debug, PartialEq, DeriveEntityModel)]
#[sea_orm(table_name = "seaql_migrations")]
pub struct Model {
    #[sea_orm(primary_key, auto_increment = false)]
    pub version: String,
    pub applied_at: i64,
}
```

## 创建迁移目录

通过执行 `sea-orm-cli migrate init` 来设置迁移目录。

```shell
# 在 `./migration` 中设置迁移目录
$ sea-orm-cli migrate init
正在初始化迁移目录...
创建文件 `./migration/src/lib.rs`
创建文件 `./migration/src/m20220101_000001_create_table.rs`
创建文件 `./migration/src/main.rs`
创建文件 `./migration/Cargo.toml`
创建文件 `./migration/README.md`
完成！

# 如果你想在其他地方设置迁移目录
$ sea-orm-cli migrate init -d ./other/migration/dir
正在初始化迁移目录...
创建文件 `./other/migration/dir/src/lib.rs`
创建文件 `./other/migration/dir/src/m20220101_000001_create_table.rs`
创建文件 `./other/migration/dir/src/main.rs`
创建文件 `./other/migration/dir/Cargo.toml`
创建文件 `./other/migration/dir/README.md`
完成！
```

你应该有一个类似以下结构的迁移目录。

```
migration
├── Cargo.toml
├── README.md
└── src
    ├── lib.rs                              # 迁移器，用于程序化地运行迁移
    ├── m20220101_000001_create_table.rs    # 一个示例迁移文件
    └── main.rs                             # 迁移器 CLI，用于在控制台中运行迁移
```

## 工作区结构

建议你按照以下方式重构你的 cargo 工作区，以便在核心包和迁移包之间共享 SeaORM 实体。同时，通过重新导出确保它们都依赖于相同版本的 SeaORM。

遵循以下步骤来重构你的工作区。

查看集成示例：
- [Rocket 示例](https://github.com/SeaQL/sea-orm/tree/master/examples/rocket_example)
- [Actix 示例](https://github.com/SeaQL/sea-orm/tree/master/examples/actix_example)
- [Axum 示例](https://github.com/SeaQL/sea-orm/tree/master/examples/axum_example)
- [Poem 示例](https://github.com/SeaQL/sea-orm/tree/master/examples/poem_example)

### 实体包

在你的根工作区中创建一个实体包。它应该包含所有 SeaORM 实体，并通过重新导出在工作区中共享 SeaORM 依赖关系。

<details>
    <summary>如果你没有定义 SeaORM 实体？</summary>

你可以创建一个实体包，其中不包含任何实体文件。然后，编写迁移并运行它以在数据库中创建表。最后，使用 `sea-orm-cli` [生成 SeaORM 实体](03-generate-entity/01-sea-orm-cli.md)，并将实体文件输出到 `entity/src/entities` 文件夹。

生成实体文件后，可以通过在 `entity/src/lib.rs` 中添加以下行来重新导出生成的实体：

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
sea-orm = { version = "^0.6", features = [ <DATABASE_DRIVER>, <ASYNC_RUNTIME>, "macros" ], default-features = false }
```

重新导出 SeaORM。

```rust title="entity/src/lib.rs"
pub use sea_orm;
```

### 迁移包

对于现有的 SeaORM 用户，你可能在定义迁移时需要 SeaORM 实体。例如，在迁移中可以重用在实体中定义的列名。

依赖于实体包。

```toml title="migration/Cargo.toml"
[dependencies]
entity = { path = "../entity" }
```

为 `post` 实体编写迁移，更多关于这一点在下一节。

```rust title="migration/src/m20220120_000001_create_post_table.rs"
use sea_schema::migration::prelude::*;

pub struct Migration;

impl MigrationName for Migration {
    fn name(&self) -> &str {
        "m20220120_000001_create_post_table"
    }
}

#[async_trait::async_trait]
impl MigrationTrait for Migration {
    async fn up(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        manager
            .create_table(
                Table::create()
                    // ...
                    .to_owned(),
            )
            .await
    }

    async fn down(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        manager
            .drop_table(
                Table::drop()
                    // ...
                    .to_owned()
            )
            .await
    }
}
```

### 核心包

这是你放置应用程序逻辑的地方。

创建一个包含 core、entity 和 migration 包的工作区，并将 entity 和 migration 包也包含进来。

```toml title="Cargo.toml"
[workspace]
members = [".", "entity", "migration"]

[dependencies]
entity = { path = "entity" }
migration = { path = "migration" }
```

使用重新导出的 SeaORM 和实体。

```rust title="src/main.rs"
use entity::sea_orm;

pub use entity::post;
pub use entity::post::Entity as Post;
```