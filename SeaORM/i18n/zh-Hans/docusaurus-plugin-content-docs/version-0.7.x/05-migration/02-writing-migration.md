# 编写迁移

每个迁移包含两个方法：`up` 和 `down`。`up` 方法用于更改数据库模式，例如添加新表、列或索引，而 `down` 方法则撤销在 `up` 方法中执行的操作。

## 创建迁移文件

你可以通过复制现有的迁移文件或下面的模板来创建一个迁移。请记住，根据命名规范 `mYYYYMMDD_HHMMSS_migration_name.rs` 命名文件，并相应地更新 [`MigrationName::name`](https://docs.rs/sea-schema/0.5/sea_schema/migration/trait.MigrationName.html#tymethod.name) 方法。

```rust title="migration/src/m20220101_000001_create_table.rs"
use sea_schema::migration::prelude::*;

pub struct Migration;

impl MigrationName for Migration {
    fn name(&self) -> &str {
        "m20220101_000001_create_table"
    }
}

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

此外，你必须在 [`MigratorTrait::migrations`](https://docs.rs/sea-schema/0.5/sea_schema/migration/migrator/trait.MigratorTrait.html#tymethod.migrations) 方法中包含新的迁移。请注意，迁移应按时间顺序排序。

```rust title="migration/src/lib.rs"
pub use sea_schema::migration::*;

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

[`SchemaManager`](https://docs.rs/sea-schema/0.5/sea_schema/migration/manager/struct.SchemaManager.html) 可以帮助您使用 SeaQuery 或原始 SQL 定义迁移

### SeaQuery

点击 [这里](https://github.com/SeaQL/sea-query#usage) 快速了解 SeaQuery。

#### 模式创建方法
- 创建表
    ```rust
    use entity::post;

    manager
        .create_table(
            sea_query::Table::create()
                .table(post::Entity)
                .if_not_exists()
                .col(
                    ColumnDef::new(post::Column::Id)
                        .integer()
                        .not_null()
                        .auto_increment()
                        .primary_key(),
                )
                .col(ColumnDef::new(post::Column::Title).string().not_null())
                .col(ColumnDef::new(post::Column::Text).string().not_null())
                .to_owned()
        )
    ```
    <details>
        <summary>如果你没有定义 SeaORM 实体？</summary>

    ```rust
    manager
        .create_table(
            Table::create()
                .table(Post::Table)
                .if_not_exists()
                .col(
                    ColumnDef::new(Post::Id)
                        .integer()
                        .not_null()
                        .auto_increment()
                        .primary_key(),
                )
                .col(ColumnDef::new(Post::Title).string().not_null())
                .col(ColumnDef::new(Post::Text).string().not_null())
                .to_owned()
        )

    // 使用 SeaQuery 的 `Iden` 宏定义标识符
    #[derive(Iden)]
    pub enum Post {
        Table,
        Id,
        Title,
        Text,
    }
    ```
    </details>
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
                .table(post::Entity)
                .to_owned()
        )
    ```
    <details>
        <summary>如果你没有定义 SeaORM 实体？</summary>

    ```rust
    manager
        .drop_table(
            sea_query::Table::drop()
                .table(Post::Table)
                .to_owned()
        )

    // 使用 SeaQuery 的 `Iden` 宏定义标识符
    #[derive(Iden)]
    pub enum Post {
        Table,
        Id,
        Title,
        Text,
    }
    ```
    </details>
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
- 是否存在表
    ```rust
    manager.has_table(table_name)
    ```
- 是否存在列
    ```rust
    manager.has_column(table_name, column_name)
    ```

### 原始 SQL

你也可以使用原始 SQL 定义迁移。

```rust
use sea_orm::Statement;
use sea_schema::migration::prelude::*;

pub struct Migration;

impl MigrationName for Migration {
    fn name(&self) -> &str {
        "m20220101_000001_create_table"
    }
}

#[async_trait::async_trait]
impl MigrationTrait for Migration {
    async fn up(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        let sql = "CREATE TABLE `cake` ( `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY, `name` varchar(255) NOT NULL )";
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