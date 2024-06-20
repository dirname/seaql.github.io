# 编写迁移

每个迁移包含两个方法：`up` 和 `down`。`up` 方法用于更改数据库模式，例如添加新表、列或索引，而 `down` 方法则撤销在 `up` 方法中执行的操作。

SeaORM 的迁移系统具有以下优势：

1. 使用 SeaQuery 或 SQL 编写 DDL 语句
2. 执行多个带有条件的 DDL
3. 使用 SeaORM API 种植数据

## 创建迁移

通过执行 `sea-orm-cli migrate generate` 命令来生成一个新的迁移文件。

如果你给文件命名时使用了空格，它将根据约定自动转换。

```shell
sea-orm-cli migrate generate NAME_OF_MIGRATION [--local-time]

# 例如，为了生成下面所示的 `migration/src/m20220101_000001_create_table.rs`
sea-orm-cli migrate generate create_table

# 这个命令创建与上面命令相同的迁移文件
sea-orm-cli migrate generate "create table"
```

或者你可以使用以下模板来创建一个迁移文件。按照命名约定 `mYYYYMMDD_HHMMSS_migration_name.rs` 来命名文件。

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

此外，你必须在 [`MigratorTrait::migrations`](https://docs.rs/sea-orm-migration/*/sea_orm_migration/migrator/trait.MigratorTrait.html#tymethod.migrations) 方法中包含新的迁移。请注意，迁移应按时间顺序排列。

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

参见 [`SchemaManager`](https://docs.rs/sea-orm-migration/*/sea_orm_migration/manager/struct.SchemaManager.html) 获取 API 参考。

### 使用 SeaQuery

点击 [这里](https://github.com/SeaQL/sea-query#table-create) 快速浏览 SeaQuery 的 DDL 语句。

你可以使用 `[DeriveIden]` 宏定义将在你的迁移中使用的标识符。

```rust
#[derive(DeriveIden)]
enum Post {
    Table, // 这是一个特殊情况；将映射为 `post`
    Id,
    Title,
    #[sea_orm(iden = "full_text")] // 重命名标识符
    Text,
}

assert_eq!(Post::Table.to_string(), "post");
assert_eq!(Post::Id.to_string(), "id");
assert_eq!(Post::Title.to_string(), "title");
assert_eq!(Post::Text.to_string(), "full_text");
```

以下是一些你可能觉得有用的常见 DDL 片段。

#### 模式创建方法
- 创建表
    ```rust
    use sea_orm::{EnumIter, Iterable};

    #[derive(DeriveIden)]
    enum Post {
        Table,
        Id,
        Title,
        #[sea_orm(iden = "text")] // 重命名标识符
        Text,
        Category,
    }

    #[derive(Iden, EnumIter)]
    pub enum Category {
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
                    ColumnDef::new(Post::Category)
                        .enumeration(Alias::new("category"), Category::iter()),
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
- 创建数据类型（仅限 PostgreSQL）
    ```rust
    use sea_orm::{EnumIter, Iterable};

    #[derive(DeriveIden)]
    struct CategoryEnum;

    #[derive(DeriveIden, EnumIter)]
    enum CategoryVariants {
        Feed,
        #[sea_orm(iden = "story")]
        Story,
    }

    manager
        .create_type(
            Type::create()
                .as_enum(CategoryEnum)
                .values(CategoryVariants::iter())
                .to_owned(),
        )
        .await?;
    ```

#### 模式修改方法
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
- 修改数据类型（仅限 PostgreSQL）
    ```rust
    manager.alter_type(sea_query::Type::alter()..)
    ```
- 删除数据类型（仅限 PostgreSQL）
    ```rust
    manager.drop_type(sea_query::extension::postgres::Type()..)
    ```

#### 模式检查方法

- 是否存在表
    ```rust
    manager.has_table("table_name")
    ```
- 是否存在列
    ```rust
    manager.has_column("table_name", "column_name")
    ```
- 是否存在索引
    ```rust
    manager.has_index("table_name", "index_name")
    ```

### 使用原始 SQL

你可以用原始 SQL 编写迁移文件，但这样你就会失去 SeaQuery 提供的多后端兼容性。

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

        // 如果 SQL 包含值绑定，则构建一个 `Statement`
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

## 小贴士 1：在一个迁移中组合多个模式更改

你可以在 up 和 down 迁移函数中组合多个更改。这是一个完整的示例：

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
    
    Ok(()) // 一切顺利！
}
```

这里是我们匹配的 down 函数：

```rust
async fn down(&self, manager: &SchemaManager) -> Result<(), DbErr> {
    
    manager.drop_index(Index::drop().name("idx-post-title").to_owned())
    .await?;
    
    manager.drop_table(Table::drop().table(Post::Table).to_owned())
    .await?;

    Ok(()) // 一切顺利！
}
```

## 小贴士 2：`ADD COLUMN IF NOT EXISTS`

由于这种语法在 MySQL 中不可用，你可以：

```rust
async fn up(&self, manager: &SchemaManager) -> Result<(), DbErr> {
    if manager.has_column("my_table", "col_to_add").await? {
        // ALTER TABLE `my_table` ADD COLUMN `col_to_add` ..
    }

    Ok(())
}
```

## 小贴士 3：使用实体播种数据

```rust
async fn up(&self, manager: &SchemaManager) -> Result<(), DbErr> {
    let db = manager.get_connection();

    cake::ActiveModel {
        name: Set("Cheesecake".to_owned()),
        ..Default::default()
    }
    .insert(db)
    .await?;

    Ok(())
}
```

[完整示例](https://github.com/SeaQL/sea-orm/blob/master/examples/seaography_example/migration/src/m20230102_000001_seed_bakery_data.rs)。

## 原子性迁移

迁移将在 Postgres 中以原子方式执行，这意味着迁移脚本将在事务中执行。如果迁移失败，对数据库所做的更改将被回滚。然而，原子性迁移在 MySQL 和 SQLite 中不受支持。

你可以在每个迁移中开始一个事务来进行操作，如 [事务性播种示例数据](03-migration/04-seeding-data.md#seeding-data-transactionally) 对于新创建的表。

## 先有模式还是先有实体？

从大局来看，我们推荐先有模式的方法：你先编写迁移，然后从活动数据库生成实体。

有时，你可能想要使用 [`create_*_from_entity`](09-schema-statement/01-create-table.md) 方法通过几个手写的实体文件引导你的数据库。

如果你打算永远不改变实体模式，或者你可以保留原始实体并在迁移文件中嵌入一个副本，这样做是完全没问题的。