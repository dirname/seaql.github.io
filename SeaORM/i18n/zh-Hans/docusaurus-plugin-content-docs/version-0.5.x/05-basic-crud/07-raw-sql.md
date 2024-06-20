# 原生SQL

## 通过原生SQL查询

您可以使用适用于绑定参数的适当语法从原生查询中选择 `Model`，即对于MySQL和SQLite使用 `?` ，而对于PostgreSQL使用 `$N` 。

```rust
let cheese: Option<cake::Model> = cake::Entity::find()
    .from_raw_sql(Statement::from_sql_and_values(
        DbBackend::Postgres,
        r#"SELECT "cake"."id", "cake"."name" FROM "cake" WHERE "id" = $1"#,
        vec![1.into()],
    ))
    .one(&db)
    .await?;
```

您也可以选择一个自定义模型。这里，我们从蛋糕表中选取所有唯一名称。

```rust
#[derive(Debug, FromQueryResult)]
pub struct UniqueCake {
    name: String,
}

let unique: Vec<UniqueCake> = UniqueCake::find_by_statement(Statement::from_sql_and_values(
        DbBackend::Postgres,
        r#"SELECT "cake"."name" FROM "cake" GROUP BY "cake"."name"#,
        vec![],
    ))
    .all(&db)
    .await?;
```

## 获取原生SQL查询

在任何CRUD操作上使用 `build` 和 `to_string` 方法来获取用于调试目的的数据库特定的原生SQL。

```rust
use sea_orm::DatabaseBackend;

assert_eq!(
    cake_filling::Entity::find_by_id((6, 8))
        .build(DatabaseBackend::MySql)
        .to_string(),
    vec![
        "SELECT `cake_filling`.`cake_id`, `cake_filling`.`filling_id` FROM `cake_filling`",
        "WHERE `cake_filling`.`cake_id` = 6 AND `cake_filling`.`filling_id` = 8",
    ].join(" ")
);
```

## 使用Raw Query & Execute接口

您可以使用 `sea-query` 构建SQL语句，并直接在SeaORM内的 `DatabaseConnection` 接口上进行查询/执行。

### 使用 `query_one` 和 `query_all` 方法获取自定义结果

```rust
let query_res: Option<QueryResult> = db
    .query_one(Statement::from_string(
        DatabaseBackend::MySql,
        "SELECT * FROM `cake`;".to_owned(),
    ))
    .await?;
let query_res = query_res.unwrap();
let id: i32 = query_res.try_get("", "id")?;

let query_res_vec: Vec<QueryResult> = db
    .query_all(Statement::from_string(
        DatabaseBackend::MySql,
        "SELECT * FROM `cake`;".to_owned(),
    ))
    .await?;
```

### 使用 `execute` 方法执行查询

```rust
let exec_res: ExecResult = db
    .execute(Statement::from_string(
        DatabaseBackend::MySql,
        "DROP DATABASE IF EXISTS `sea`;".to_owned(),
    ))
    .await?;
assert_eq!(exec_res.rows_affected(), 1);
```