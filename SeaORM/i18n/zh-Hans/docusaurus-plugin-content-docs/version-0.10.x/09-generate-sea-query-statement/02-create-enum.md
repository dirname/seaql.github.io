# 创建枚举

您可以通过 `Schema` 辅助结构生成 SQL 语句，以创建具有枚举列的数据库表。

## 字符串与整数枚举

这只是一个映射到 Rust 枚举的普通字符串/整数列。实体定义示例：

```rust title="active_enum.rs"
use sea_orm::entity::prelude::*;

#[derive(Clone, Debug, PartialEq, DeriveEntityModel)]
#[sea_orm(schema_name = "public", table_name = "active_enum")]
pub struct Model {
    #[sea_orm(primary_key)]
    pub id: i32,
    pub category: Option<Category>,
    pub color: Option<Color>,
}

#[derive(Debug, Clone, PartialEq, EnumIter, DeriveActiveEnum)]
#[sea_orm(rs_type = "String", db_type = "String(Some(1))")]
pub enum Category {
    #[sea_orm(string_value = "B")]
    大型,
    #[sea_orm(string_value = "S")]
    小型,
}

#[derive(Debug, Clone, PartialEq, EnumIter, DeriveActiveEnum)]
#[sea_orm(rs_type = "i32", db_type = "Integer")]
pub enum Color {
    #[sea_orm(num_value = 0)]
    黑色,
    #[sea_orm(num_value = 1)]
    白色,
}
```

作为说明，枚举只是普通的数据库列。

```rust
use sea_orm::{sea_query, Schema};

let builder = db.get_database_backend();
let schema = Schema::new(builder);

assert_eq!(
    builder.build(&schema.create_table_from_entity(active_enum::Entity)),
    builder.build(
        &sea_query::Table::create()
            .table(active_enum::Entity.table_ref())
            .col(
                sea_query::ColumnDef::new(active_enum::Column::Id)
                    .integer()
                    .not_null()
                    .auto_increment()
                    .primary_key(),
            )
            .col(sea_query::ColumnDef::new(active_enum::Column::Category).string_len(1))
            .col(sea_query::ColumnDef::new(active_enum::Column::Color).integer())
            .to_owned()
    )
);
```

## 数据库原生枚举

不同数据库对枚举的支持各不相同。让我们逐一介绍。

考虑以下实体：

```rust title="active_enum.rs"
use sea_orm::entity::prelude::*;

#[derive(Clone, Debug, PartialEq, DeriveEntityModel)]
#[sea_orm(schema_name = "public", table_name = "active_enum")]
pub struct Model {
    #[sea_orm(primary_key)]
    pub id: i32,
    pub tea: Option<Tea>,
}

#[derive(Debug, Clone, PartialEq, EnumIter, DeriveActiveEnum)]
#[sea_orm(rs_type = "String", db_type = "Enum", enum_name = "tea")]
pub enum Tea {
    #[sea_orm(string_value = "EverydayTea")]
    日常茶,
    #[sea_orm(string_value = "BreakfastTea")]
    早餐茶,
}
```

注意 `db_type` 和额外的 `enum_name` 属性。

### PostgreSQL

PostgreSQL 中的枚举由 [`TypeCreateStatement`](https://docs.rs/sea-query/*/sea_query/extension/postgres/struct.TypeCreateStatement.html) 定义，可以从 `Entity` 使用方法 [`Schema::create_enum_from_entity`](https://docs.rs/sea-orm/*/sea_orm/schema/struct.Schema.html#method.create_enum_from_entity) 创建。

您也可以从 `ActiveEnum` 使用方法 [`Schema::create_enum_from_active_enum`](https://docs.rs/sea-orm/*/sea_orm/schema/struct.Schema.html#method.create_enum_from_active_enum) 创建。

```rust
use sea_orm::{Schema, Statement};

let db_postgres = DbBackend::Postgres;
let schema = Schema::new(db_postgres);

assert_eq!(
    schema
        .create_enum_from_entity(active_enum::Entity)
        .iter()
        .map(|stmt| db_postgres.build(stmt))
        .collect::<Vec<_>>(),
    vec![Statement::from_string(
        db_postgres,
        r#"CREATE TYPE "tea" AS ENUM ('EverydayTea', 'BreakfastTea')"#.to_owned()
    ),]
);

assert_eq!(
    db_postgres.build(&schema.create_enum_from_active_enum::<Tea>()),
    Statement::from_string(
        db_postgres,
        r#"CREATE TYPE "tea" AS ENUM ('EverydayTea', 'BreakfastTea')"#.to_owned()
    )
);

assert_eq!(
    db_postgres.build(&schema.create_table_from_entity(active_enum::Entity)),
    Statement::from_string(
        db_postgres,
        vec![
            r#"CREATE TABLE "public"."active_enum" ("#,
            r#""id" serial NOT NULL PRIMARY KEY,"#,
            r#""tea" tea"#,
            r#")"#,
        ]
        .join(" ")
    ),
);
```

### MySQL

在 MySQL 中，枚举是在创建表时定义的，因此您只需要调用一次方法 [`Schema::create_table_from_entity`](https://docs.rs/sea-orm/*/sea_orm/schema/struct.Schema.html#method.create_table_from_entity)。

```rust
use sea_orm::{Schema, Statement};

let db_mysql = DbBackend::MySql;
let schema = Schema::new(db_mysql);

assert_eq!(
    db_mysql.build(&schema.create_table_from_entity(active_enum::Entity)),
    Statement::from_string(
        db_mysql,
        vec![
            "CREATE TABLE `active_enum` (",
            "`id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,",
            "`tea` ENUM('EverydayTea', 'BreakfastTea')",
            ")",
        ]
        .join(" ")
    ),
);
```

### SQLite

SQLite 不支持枚举，所以它将被存储为 `TEXT`。

```rust
use sea_orm::{Schema, Statement};

let db_sqlite = DbBackend::Sqlite;
let schema = Schema::new(db_sqlite);

assert_eq!(
    db_sqlite.build(&schema.create_enum_from_entity(active_enum::Entity)),
    Statement::from_string(
        db_sqlite,
        vec![
            "CREATE TABLE `active_enum` (",
            "`id` integer NOT NULL PRIMARY KEY AUTOINCREMENT,",
            "`tea` text",
            ")",
        ]
        .join(" ")
    ),
);
```