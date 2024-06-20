# 原生SQL

## 通过原生SQL查询

您可以使用适当的参数绑定语法从原生查询中选择`Model`，即对于MySQL和SQLite使用`?`，对于PostgreSQL使用`$N`。

```rust
let 芝士: Option<蛋糕::Model> = 蛋糕::Entity::find()
    .from_raw_sql(Statement::from_sql_and_values(
        DbBackend::Postgres,
        r#"SELECT "蛋糕"."id", "蛋糕"."name" FROM "蛋糕" WHERE "id" = $1"#,
        vec![1.into()],
    ))
    .one(&db)
    .await?;
```

您也可以选择一个自定义的模型。在这里，我们选择蛋糕表中的所有唯一名称。

```rust
#[derive(Debug, FromQueryResult)]
pub struct 唯一的蛋糕 {
    name: String,
}

let 独特的: Vec<唯一的蛋糕> = 唯一的蛋糕::find_by_statement(Statement::from_sql_and_values(
        DbBackend::Postgres,
        r#"SELECT "蛋糕"."name" FROM "蛋糕" GROUP BY "蛋糕"."name"#,
        vec![],
    ))
    .all(&db)
    .await?;
```

您可以分页`SelectorRaw`并批量获取`Model`。

```rust
let mut 蛋糕页面 = 蛋糕::Entity::find()
    .from_raw_sql(Statement::from_sql_and_values(
        DbBackend::Postgres,
        r#"SELECT "蛋糕"."id", "蛋糕"."name" FROM "蛋糕" WHERE "id" = $1"#,
        vec![1.into()],
    ))
    .paginate(db, 50);
 
while let Some(蛋糕们) = 蛋糕页面.fetch_and_next().await? {
    // 在蛋糕们: Vec<蛋糕::Model> 上执行某些操作
}
```

## 获取原生SQL查询

在任何CRUD操作上使用`build`和`to_string`方法来获取特定于数据库的原生SQL，这在调试时非常有用。

```rust
use sea_orm::DatabaseBackend;

assert_eq!(
    蛋糕填充::Entity::find_by_id((6, 8))
        .build(DatabaseBackend::MySql)
        .to_string(),
    vec![
        "SELECT `蛋糕填充`.`蛋糕_id`, `蛋糕填充`.`填充物_id` FROM `蛋糕填充`",
        "WHERE `蛋糕填充`.`蛋糕_id` = 6 AND `蛋糕填充`.`填充物_id` = 8",
    ].join(" ")
);
```

## 使用 Raw Query & Execute 接口

您可以使用`sea-query`构建SQL语句，并直接在SeaORM内的`DatabaseConnection`接口上进行查询/执行。

### 使用`query_one`和`query_all`方法获取自定义结果

```rust
let 查询结果: Option<QueryResult> = db
    .query_one(Statement::from_string(
        DatabaseBackend::MySql,
        "SELECT * FROM `蛋糕`;".to_owned(),
    ))
    .await?;
let 查询结果 = 查询结果.unwrap();
let id: i32 = 查询结果.try_get("", "id")?;

let 查询结果向量: Vec<QueryResult> = db
    .query_all(Statement::from_string(
        DatabaseBackend::MySql,
        "SELECT * FROM `蛋糕`;".to_owned(),
    ))
    .await?;
```

### 使用`execute`方法执行查询

```rust
let 执行结果: ExecResult = db
    .execute(Statement::from_string(
        DatabaseBackend::MySql,
        "DROP DATABASE IF EXISTS `sea`;".to_owned(),
    ))
    .await?;
assert_eq!(执行结果.rows_affected(), 1);
```