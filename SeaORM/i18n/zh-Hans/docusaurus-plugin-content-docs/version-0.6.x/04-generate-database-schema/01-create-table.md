# 创建表

为了在数据库中创建表而无需手动编写[`TableCreateStatement`](https://docs.rs/sea-query/*/sea_query/table/struct.TableCreateStatement.html)，你可以使用`Entity`派生它，通过调用[`Schema::create_table_from_entity`](https://docs.rs/sea-orm/0.6/sea_orm/schema/struct.Schema.html#method.create_table_from_entity)。这个方法将帮助你创建一个数据库表，包括在`Entity`中定义的所有列和外键约束。

下面我们将使用[`CakeFillingPrice`](https://github.com/SeaQL/sea-orm/blob/master/src/tests_cfg/cake_filling_price.rs)实体来演示其生成的SQL语句。你可以使用[`TableCreateStatement`](https://docs.rs/sea-query/*/sea_query/table/struct.TableCreateStatement.html)构建相同的语句。

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

为了进一步说明，我们将在下面以字符串形式展示SQL语句。

- PostgreSQL
    ```rust
    use sea_orm::{tests_cfg::*, DbBackend, Schema, Statement};

    let db_postgres = DbBackend::Postgres;
    let schema = Schema::new(db_postgres);

    assert_eq!(
        db_postgres.build(&schema.create_table_from_entity(CakeFillingPrice)),
        Statement::from_string(
            db_postgres,
            vec![
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
            vec![
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
            vec![
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