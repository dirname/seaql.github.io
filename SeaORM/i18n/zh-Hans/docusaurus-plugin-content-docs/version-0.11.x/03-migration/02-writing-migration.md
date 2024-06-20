# 编写迁移

每个迁移包含两个方法：`up` 和 `down`。`up` 方法用于更改数据库模式，例如添加新表、列或索引，而 `down` 方法则撤销在 `up` 方法中执行的操作。

## 创建迁移

通过执行 `sea-orm-cli migrate generate` 命令生成新的迁移文件。

```shell
sea-orm-cli migrate generate NAME_OF_MIGRATION [--local-time]

# 例如，为了生成以下的 `migration/src/m20220101_000001_create_table.rs`
sea-orm-cli migrate generate create_table
```

或者，您可以使用下面的模板创建迁移文件。根据命名约定 `mYYYYMMDD_HHMMSS_migration_name.rs` 来命名文件。

```rust title="migration/src/m20220101_000001_create_table.rs"
use sea_orm_migration::prelude::*;

#[derive(DeriveMigrationName)]
pub struct Migration;

#[async_trait]
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

此外，您必须将新迁移包含在 [`MigratorTrait::migrations`](https://docs.rs/sea-orm-migration/*/sea_orm_migration/migrator/trait.MigratorTrait.html#tymethod.migrations) 方法中。请注意，迁移应按时间顺序排序。

```rust title="migration/src/lib.rs"
pub use sea_orm_migration::*;

mod m20220101_000001_create_table;

pub struct Migrator;

#[async_trait]
impl MigratorTrait for Migrator {
    fn migrations() -> Vec<Box<dyn MigrationTrait>> {
        vec![
            Box::new(m20220101_000001_create_table::Migration),
        ]
    }
}
```

## 定义迁移

请参阅 [`SchemaManager`](https://docs.rs/sea-orm-migration/*/sea_orm_migration/manager/struct.SchemaManager.html) 以获取 API 参考。

### SeaQuery

点击 [这里](https://github.com/SeaQL/sea-query#table-create) 快速浏览 SeaQuery 的 DDL 语句。

您需要使用 [`sea_query::Iden`](https://github.com/SeaQL/sea-query#iden) 来定义将在迁移中使用的标识符。

```rust
#[derive(Iden)]
enum Post {
    Table,
    Id,
    Title,
    #[iden = "text"] // 重命名标识符
    Text,
    Category,
}

assert_eq!(Post::Table.to_string(), "post");
assert_eq!(Post::Id.to_string(), "id");
assert_eq!(Post::Title.to_string(), "title");
assert_eq!(Post::Text.to_string(), "text");
```

#### 架构创建方法
- 创建表
    ```rust
    use sea_orm::{EnumIter, Iterable};

    #[derive(Iden)]
    enum Post {
        Table,
        Id,
        Title,
        #[iden = "text"] // 重命名标识符
        Text,
        Category,
    }

    #[derive(Iden, EnumIter)]
    pub enum Category {
        Table,
        #[iden = "Feed"]
        Feed,
        #[iden = "Story"]
        Story,
    }

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
                .col(
                    // 枚举类型必须在此之前创建，参见下面的例子
                    ColumnDef::new(Post::Category)
                        .enumeration(Category::Table, [Category::Feed, Category::Story]),
                        // 或者，像下面这样编写。
                        // 请注意，要使其工作，
                        // 1. 您需要派生 `EnumIter`，
                        // 2. 将 `Iterable` 导入作用域
                        // 3. 并确保 `Category::Table` 是第一个变体
                        .enumeration(Category::Table, Category::iter().skip(1)),
                )
                .to_owned(),
        )
        .await
    ```
- 创建索引
    ```rust
    manager.create_index(sea_query::Index::create()..)
    ```
- 创建外键
    ```rust
    manager.create_foreign_key(sea_query::ForeignKey::create()..)
    ```
- 创建数据类型（仅 PostgreSQL）
    ```rust
    use sea_orm::{EnumIter, Iterable};

    #[derive(Iden, EnumIter)]
    pub enum Category {
        Table,
        #[iden = "Feed"]
        Feed,
        #[iden = "Story"]
        Story,
    }

    manager
        .create_type(
            Type::create()
                .as_enum(Category::Table)
                .values([Category::Feed, Category::Story])
                // 或者，像下面这样编写。
                // 请注意，要使其工作，
                // 1. 您需要派生 `EnumIter`，
                // 2. 将 `Iterable` 导入作用域
                // 3. 并确保 `Category::Table` 是第一个变体
                .values(Category::iter().skip(1))
                .to_owned(),
        )
        .await?;
    ```

#### 架构变更方法
- 删除表
    ```rust
    use entity::post;

    manager.drop_table(sea_query::Table::drop()..)
    ```
- 修改表
    ```rust
    manager.alter_table(sea_query::Table::alter()..)
    ```
- 重命名表
    ```rust
    manager.rename_table(sea_query::Table::rename()..)
    ```
- 清空表
    ```rust
    manager.truncate_table(sea_query::Table::truncate()..)
    ```
- 删除索引
    ```rust
    manager.drop_index(sea_query::Index::drop()..)
    ```
- 删除外键
    ```rust
    manager.drop_foreign_key(sea_query::ForeignKey::drop()..)
    ```
- 修改数据类型（仅 PostgreSQL）
    ```rust
    manager.alter_type(sea_query::Type::alter()..)
    ```
- 删除数据类型（仅 PostgreSQL）
    ```rust
    manager.drop_type(sea_query::extension::postgres::Type()..)
    ```

#### 架构检查方法
- 是否存在表
    ```rust
    manager.has_table(table_name)
    ```
- 是否存在列
    ```rust
    manager.has_column(table_name, column_name)
    ```

## 在一个迁移中组合多个架构变更

您可以在上行和下行迁移函数中组合多个变更。这是一个完整的示例：

```rust
async fn up(&self, manager: &SchemaManager) -> Result<(), DbErr> {

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
        .await?;
    
    manager
        .create_index(
            Index::create()
                .if_not_exists()
                .name("idx-post_title")
                .table(Post::Table)
                .col(Post::Title)                        
                .to_owned(),
        )
        .await?;
    
    Ok(()) // 一切正常！
}
```

这里是匹配的下行函数：

```rust
async fn down(&self, manager: &SchemaManager) -> Result<(), DbErr> {
    
    manager.drop_index(Index::drop().name("idx-post-title").to_owned())
    .await?;
    
    manager.drop_table(Table::drop().table(Post::Table).to_owned())
    .await?;

    Ok(()) // 一切正常！
}
```

### 原始 SQL

您可以使用原始 SQL 编写迁移文件，但这样一来您就失去了 SeaQuery 提供的多后端兼容性。

```rust title="migration/src/m20220101_000001_create_table.rs"
use sea_orm::Statement;
use sea_orm_migration::prelude::*;

#[derive(DeriveMigrationName)]
pub struct Migration;

#[async_trait]
impl MigrationTrait for Migration {
    async fn up(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        let db = manager.get_connection();

        // 如果 SQL 语句没有值绑定，则使用 `execute_unprepared`
        db.execute_unprepared(
            "CREATE TABLE `cake` (
                `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
                `name` varchar(255) NOT NULL
            )"
        )
        .await?;

        // 如果 SQL 包含值绑定，则构造一个 `Statement`
        let stmt = Statement::from_sql_and_values(
            manager.get_database_backend(),
            r#"INSERT INTO `cake` (`name`) VALUES (?)"#,
            ["Cheese Cake".into()]
        );
        db.execute(stmt).await?;

        Ok(())
    }

    async fn down(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        manager
            .get_connection()
            .execute_unprepared("DROP TABLE `cake`")
            .await?;

        Ok(())
    }
}
```

## 原子迁移

迁移将在 Postgres 中原子化执行，这意味着迁移脚本将在事务内执行。如果迁移失败，对数据库所做的更改将回滚。然而，MySQL 和 SQLite 不支持原子迁移。

您可以在每个迁移中开始一个事务来执行类似 [为新创建的表播种样本数据](03-migration/04-seeding-data.md#seeding-data-transactionally) 这样的操作。

## 架构优先还是实体优先？

从大局来看，我们推荐架构优先的方法：您首先编写迁移，然后从实时数据库生成实体。

有时，您可能想要使用 [`create_*_from_entity`](09-schema-statement/01-create-table.md) 方法用几个手工编写的实体文件引导您的数据库。

如果您打算永远不改变实体架构，或者，您可以保留原始实体并在迁移文件中嵌入一个副本，那么这样做是完全没问题的。