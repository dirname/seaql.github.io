# 编写迁移

每个迁移包含两个方法：`up` 和 `down`。`up` 方法用于更改数据库模式，例如添加新表、列或索引，而 `down` 方法则撤销 `up` 方法中执行的操作。

## 创建迁移

通过执行 `sea-orm-cli migrate generate` 命令来生成一个新的迁移文件。

```shell
sea-orm-cli migrate generate NAME_OF_MIGRATION [--universal-time]

# 例如，为了生成以下的 `migration/src/m20220101_000001_create_table.rs`
sea-orm-cli migrate generate create_table
sea-orm-cli migrate generate create_table --universal-time  # 生成文件名使用 UTC 时间（推荐）
```

或者你可以使用下面的模板创建一个迁移文件。根据命名规范 `mYYYYMMDD_HHMMSS_migration_name.rs` 来命名文件。

```rust title="migration/src/m20220101_000001_create_table.rs"
use sea_orm_migration::prelude::*;

#[derive(DeriveMigrationName)]
pub struct Migration;

#[async_trait::async_trait]
impl MigrationTrait for Migration {
    async fn up(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        manager
            .create_table( ... )
            .await
    }

    async fn down(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        manager
            .drop_table( ... )
            .await
    }
}
```

此外，你还需要在 [`MigratorTrait::migrations`](https://docs.rs/sea-orm-migration/*/sea_orm_migration/migrator/trait.MigratorTrait.html#tymethod.migrations) 方法中包含新的迁移。注意迁移应该按时间顺序排序。

```rust title="migration/src/lib.rs"
pub use sea_orm_migration::*;

mod m20220101_000001_create_table;

pub struct Migrator;

#[async_trait::async_trait]
impl MigratorTrait for Migrator {
    fn migrations() -> Vec<Box<dyn MigrationTrait>> {
        vec![
            Box::new(m20220101_000001_create_table::Migration),
        ]
    }
}
```

## 定义迁移

查看 [`SchemaManager`](https://docs.rs/sea-orm-migration/*/sea_orm_migration/manager/struct.SchemaManager.html) 的 API 参考。

### SeaQuery

点击 [这里](https://github.com/SeaQL/sea-query#table-create) 快速浏览 SeaQuery 的 DDL 语句。

你需要使用 [`sea_query::Iden`](https://github.com/SeaQL/sea-query#iden) 来定义将在迁移中使用的标识符。

```rust
#[derive(Iden)]
enum Post {
    Table,
    Id,
    Title,
    #[iden = "text"] // 重命名标识符
    Text,
}

assert_eq!(Post::Table.to_string(), "post");
assert_eq!(Post::Id.to_string(), "id");
assert_eq!(Post::Title.to_string(), "title");
assert_eq!(Post::Text.to_string(), "text");
```

#### 模式创建方法
- 创建表
    ```rust
    manager
        .create_table(
            sea_query::Table::create()
                .table(Post::Table)
                .if_not_exists()
                .col(
                    ColumnDef::new(Post::Id)
                        .integer()
                        .not_null()
                        .auto_increment()
                        .primary_key()
                )
                .col(ColumnDef::new(Post::Title).string().not_null())
                .col(ColumnDef::new(Post::Text).string().not_null())
                .to_owned()
        )
    ```
- 创建索引
    ```rust
    manager.create_index(sea_query::Index::create())
    ```
- 创建外键
    ```rust
    manager.create_foreign_key(sea_query::ForeignKey::create())
    ```
- 创建数据类型（仅 PostgreSQL）
    ```rust
    manager.create_type(sea_query::Type::create())
    ```

#### 模式修改方法
- 删除表
    ```rust
    use entity::post;

    manager
        .drop_table(
            sea_query::Table::drop()
                .table(Post::Table)
                .to_owned()
        )
    ```
- 修改表
    ```rust
    manager.alter_table(sea_query::Table::alter())
    ```
- 重命名表
    ```rust
    manager.rename_table(sea_query::Table::rename())
    ```
- 清空表
    ```rust
    manager.truncate_table(sea_query::Table::truncate())
    ```
- 删除索引
    ```rust
    manager.drop_index(sea_query::Index::drop())
    ```
- 删除外键
    ```rust
    manager.drop_foreign_key(sea_query::ForeignKey::drop())
    ```
- 修改数据类型（仅 PostgreSQL）
    ```rust
    manager.alter_type(sea_query::Type::alter())
    ```
- 删除数据类型（仅 PostgreSQL）
    ```rust
    manager.drop_type(sea_query::extension::postgres::Type())
    ```

#### 模式检查方法
- 表是否存在
    ```rust
    manager.has_table(table_name)
    ```
- 列是否存在
    ```rust
    manager.has_column(table_name, column_name)
    ```

### 原生 SQL

你可以用原生 SQL 写迁移文件，但这样你就失去了 SeaQuery 提供的多后端兼容性。

```rust title="migration/src/m20220101_000001_create_table.rs"
use sea_orm::Statement;
use sea_orm_migration::prelude::*;

#[derive(DeriveMigrationName)]
pub struct Migration;

#[async_trait::async_trait]
impl MigrationTrait for Migration {
    async fn up(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        let sql = r#"
        CREATE TABLE `cake` (
            `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
            `name` varchar(255) NOT NULL
        )"#;
        let stmt = Statement::from_string(manager.get_database_backend(), sql.to_owned());
        manager.get_connection().execute(stmt).await.map(|_| ())
    }

    async fn down(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        let sql = "DROP TABLE `cake`";
        let stmt = Statement::from_string(manager.get_database_backend(), sql.to_owned());
        manager.get_connection().execute(stmt).await.map(|_| ())
    }
}
```

## 优先考虑模式还是实体？

从宏观角度看，我们推荐先有模式的方法：首先编写迁移，然后从实时数据库生成实体。

有时，你可能想要使用 [`create_*_from_entity`](09-generate-sea-query-statement/01-create-table.md) 方法，用几个手工编写的实体文件来初始化你的数据库。

如果你打算永远不改变实体模式，这样做完全没问题。或者，你可以保留原始实体，并在迁移文件中嵌入一个副本。