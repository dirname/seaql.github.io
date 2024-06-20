# 设置迁移

使用SeaQuery或SQL编写的迁移来版本控制你的数据库模式。

## 迁移表

一个名为`seaql_migrations`的表将在你的数据库中创建，用于跟踪已应用的迁移。当你运行迁移时，它会自动创建。

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

通过执行`sea-orm-cli migrate init`来设置迁移目录。

```shell
# 在`./migration`中设置迁移目录
$ sea-orm-cli migrate init
正在初始化迁移目录...
正在创建文件`./migration/src/lib.rs`
正在创建文件`./migration/src/m20220101_000001_create_table.rs`
正在创建文件`./migration/src/main.rs`
正在创建文件`./migration/Cargo.toml`
正在创建文件`./migration/README.md`
完成！

# 如果你想在其他地方设置迁移目录
$ sea-orm-cli migrate init -d ./other/migration/dir
```

你应该有一个类似以下结构的迁移目录。

```
migration
├── Cargo.toml
├── README.md
└── src
    ├── lib.rs                              # 迁移器API，用于集成
    ├── m20220101_000001_create_table.rs    # 一个示例迁移文件
    └── main.rs                             # 迁移器CLI，用于手动运行
```

## 工作区结构

推荐将你的cargo工作区结构如下，以便在app crate和迁移crate之间共享SeaORM实体。查看[集成示例](https://github.com/SeaQL/sea-orm/tree/master/examples)以进行演示。

### 实体Crate

在你的根工作区中创建一个实体crate。

<details>
    <summary>你还没有定义SeaORM实体？</summary>

你可以创建一个没有实体文件的实体crate。然后，编写迁移并运行它以在数据库中创建表。最后，使用`sea-orm-cli` [生成SeaORM实体](03-generate-entity/01-sea-orm-cli.md)，并将实体文件输出到`entity/src/entities`文件夹。

生成实体文件后，你可以在`entity/src/lib.rs`中添加以下行以重新导出生成的实体：

```rust
mod entities;
pub use entities::*;
```
</details>

```
entity
├── Cargo.toml      # 包含SeaORM依赖项
└── src
    ├── lib.rs      # 重新导出SeaORM和实体
    └── post.rs     # 定义`post`实体
```

指定SeaORM依赖项。

```toml title="entity/Cargo.toml"
[dependencies]
sea-orm = { version = "^0" }
```

### 迁移Crate

导入[`sea-orm-migration`](https://crates.io/crates/sea-orm-migration)包。如果你在编写迁移时需要一些SeaORM实体，你可以导入实体crate。

```toml title="migration/Cargo.toml"
[dependencies]
sea-orm-migration = { version = "^0" }
entity = { path = "../entity" } # 取决于你的需求
```

让我们写一个迁移。详细的说明在下一节。

```rust title="migration/src/m20220120_000001_create_post_table.rs"
use entity::post::*;
use sea_orm_migration::prelude::*;

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
                    .table(Entity)
                    .if_not_exists()
                    .col(
                        ColumnDef::new(Column::Id)
                            .integer()
                            .not_null()
                            .auto_increment()
                            .primary_key(),
                    )
                    .col(ColumnDef::new(Column::Title).string().not_null())
                    .col(ColumnDef::new(Column::Text).string().not_null())
                    .to_owned(),
            )
            .await
    }

    // 如果你反对向后迁移，你不必实现这个
    async fn down(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        manager
            .drop_table(Table::drop().table(Entity).to_owned())
            .await
    }
}
```

### 应用Crate

这是应用程序逻辑所在的地方。

创建一个包含app、entity和migration crate的工作区，并将entity crate导入到app crate中。

如果你想将迁移工具作为你应用的一部分打包，你也可能想导入migration crate。

```toml title="./Cargo.toml"
[workspace]
members = [".", "entity", "migration"]

[dependencies]
entity = { path = "entity" }
migration = { path = "migration" } # 取决于你的需求

[dependencies.sea-orm]
version = "^0"
features = [ ... ]
```

在你的应用中，你可以在启动时运行迁移器。

```rust title="src/main.rs"
use migration::{Migrator, MigratorTrait};

let connection = sea_orm::Database::connect(&database_url).await?;
Migrator::up(&connection, None).await?;
```