# 创建表

:::tip 我们需要您的帮助！📝
感谢您阅读这份文档。在您阅读的同时，能否花费几分钟时间完成我们的[SeaQL 社区调查](https://www.sea-ql.org/community-survey)？这对于 SeaORM 的持续开发和维护至关重要。
:::

为了在数据库中创建表而无需手动编写[`TableCreateStatement`](https://docs.rs/sea-query/*/sea_query/table/struct.TableCreateStatement.html)，您可以使用`Entity`派生它，通过调用[`Schema::create_table_from_entity`](https://docs.rs/sea-orm/*/sea_orm/schema/struct.Schema.html#method.create_table_from_entity)。此方法将帮助您创建数据库表，包括在`Entity`中定义的所有列和外键约束。

下面我们使用[`CakeFillingPrice`](https://github.com/SeaQL/sea-orm/blob/master/src/tests_cfg/cake_filling_price.rs)实体来演示其生成的 SQL 语句。您可以使用相同的[`TableCreateStatement`](https://docs.rs/sea-query/*/sea_query/table/struct.TableCreateStatement.html)构造相同的语句。

请注意，自版本`0.7.0`起，[`Schema::create_table_from_entity`](https://docs.rs/sea-orm/*/sea_orm/schema/struct.Schema.html#method.create_table_from_entity)不再创建索引。如果您需要在数据库中创建索引，请查阅[这里](09-schema-statement/03-create-index.md)获取详细信息。

```rust
use sea_orm::{sea_query::*, tests_cfg::*, EntityName, Schema};

let builder = db.get_database_backend();
let schema = Schema::new(builder);

assert_eq!(
    builder.build(&schema.create_table_from_entity(CakeFillingPrice)),
    builder.build(
        &Table::create()
            .table(CakeFillingPrice.table_ref())
            .col(
                ColumnDef::new(cake_filling_price::Column::CakeId)
                    .integer()
                    .not_null(),
            )
            .col(
                ColumnDef::new(cake_filling_price::Column::FillingId)
                    .integer()
                    .not_null(),
            )
            .col(
                ColumnDef::new(cake_filling_price::Column::Price)
                    .decimal()
                    .not_null(),
            )
            .primary_key(
                Index::create()
                    .name("pk-cake_filling_price")
                    .col(cake_filling_price::Column::CakeId)
                    .col(cake_filling_price::Column::FillingId)
                    .primary(),
            )
            .foreign_key(
                ForeignKeyCreateStatement::new()
                    .name("fk-cake_filling_price-cake_id-filling_id")
                    .from_tbl(CakeFillingPrice)
                    .from_col(cake_filling_price::Column::CakeId)
                    .from_col(cake_filling_price::Column::FillingId)
                    .to_tbl(CakeFilling)
                    .to_col(cake_filling::Column::CakeId)
                    .to_col(cake_filling::Column::FillingId),
            )
            .to_owned()
    )
);
```

为了进一步说明，我们将展示以下的 SQL 语句作为字符串。

- PostgreSQL
    ```rust
    use sea_orm::{tests_cfg::*, DbBackend, Schema, Statement};

    let db_postgres = DbBackend::Postgres;
    let schema = Schema::new(db_postgres);

    assert_eq!(
        db_postgres.build(&schema.create_table_from_entity(CakeFillingPrice)),
        Statement::from_string(
            db_postgres,
            [
                r#"CREATE TABLE "public"."cake_filling_price" ("#,
                r#""cake_id" integer NOT NULL,"#,
                r#""filling_id" integer NOT NULL,"#,
                r#""price" decimal NOT NULL,"#,
                r#"CONSTRAINT "pk-cake_filling_price" PRIMARY KEY ("cake_id", "filling_id"),"#,
                r#"CONSTRAINT "fk-cake_filling_price-cake_id-filling_id" FOREIGN KEY ("cake_id", "filling_id") REFERENCES "cake_filling" ("cake_id", "filling_id")"#,
                r#")"#,
            ]
            .join(" ")
        )
    );
    ```

- MySQL
    ```rust
    use sea_orm::{tests_cfg::*, DbBackend, Schema, Statement};

    let db_mysql = DbBackend::MySql;
    let schema = Schema::new(db_mysql);

    assert_eq!(
        db_mysql.build(&schema.create_table_from_entity(CakeFillingPrice)),
        Statement::from_string(
            db_mysql,
            [
                "CREATE TABLE `cake_filling_price` (",
                "`cake_id` int NOT NULL,",
                "`filling_id` int NOT NULL,",
                "`price` decimal NOT NULL,",
                "PRIMARY KEY `pk-cake_filling_price` (`cake_id`, `filling_id`),",
                "CONSTRAINT `fk-cake_filling_price-cake_id-filling_id` FOREIGN KEY (`cake_id`, `filling_id`) REFERENCES `cake_filling` (`cake_id`, `filling_id`)",
                ")",
            ]
            .join(" ")
        )
    );
    ```

- SQLite
    ```rust
    use sea_orm::{tests_cfg::*, DbBackend, Schema, Statement};

    let db_sqlite = DbBackend::Sqlite;
    let schema = Schema::new(db_sqlite);

    assert_eq!(
        db_sqlite.build(&schema.create_table_from_entity(CakeFillingPrice)),
        Statement::from_string(
            db_sqlite,
            [
                "CREATE TABLE `cake_filling_price` (",
                "`cake_id` integer NOT NULL,",
                "`filling_id` integer NOT NULL,",
                "`price` real NOT NULL,",
                "CONSTRAINT `pk-cake_filling_price`PRIMARY KEY (`cake_id`, `filling_id`),",
                "FOREIGN KEY (`cake_id`, `filling_id`) REFERENCES `cake_filling` (`cake_id`, `filling_id`)",
                ")",
            ]
            .join(" ")
        )
    );
    ```