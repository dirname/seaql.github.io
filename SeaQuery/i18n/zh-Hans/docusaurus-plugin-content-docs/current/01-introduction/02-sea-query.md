# SeaQuery 概念

## 1. Query Builder

`Query` 是 `QueryBuilder` 的一个实例，用于构建 SQL 查询。`Query` 可以通过 `DatabaseConnection` 的 `query` 方法创建。

```rust
use sea_orm::entity::prelude::*;
use sea_orm::DatabaseConnection;

let db: DatabaseConnection = ...;
let query: Query = db.query(...);
```

## 2. Table

`Table` 表示数据库中的表。它包含列和主键的元数据。`Table` 可以通过 `Entity` 访问。

```rust
use sea_orm::entity::prelude::*;

let users = Entity::User;
```

## 3. Column

`Column` 表示数据库表中的列。它包含列的元数据，如名称、类型和是否允许为 NULL。`Column` 可以通过 `Table` 或 `Entity` 访问。

```rust
use sea_orm::entity::prelude::*;

let user_id = Entity::User.column(Entity::UserId);
```

## 4. Expr

`Expr` 表示 SQL 表达式。它可以是值、列、函数或其他表达式的组合。`Expr` 可以通过 `Query` 或 `Column` 创建。

```rust
use sea_orm::entity::prelude::*;

let expr: Expr = Expr::col(Entity::User.column(Entity::UserName)).eq("John Doe");
```

## 5. Condition

`Condition` 表示 SQL 查询中的 WHERE 子句。它由一个或多个 `Expr` 组成，可以使用 AND 或 OR 连接。`Condition` 可以通过 `Expr` 创建。

```rust
use sea_orm::entity::prelude::*;

let condition: Condition = Expr::col(Entity::User.column(Entity::UserName)).eq("John Doe")
    .and(Expr::col(Entity::User.column(Entity::Age)).gt(30));
```

## 6. OrderBy

`OrderBy` 表示 SQL 查询中的 ORDER BY 子句。它由一个或多个 `Column` 和排序方向组成。`OrderBy` 可以通过 `Query` 创建。

```rust
use sea_orm::entity::prelude::*;

let order_by: OrderBy = OrderBy::asc(Entity::User.column(Entity::UserName));
```

## 7. Paginator

`Paginator` 提供了分页功能。它可以通过 `Query` 创建，并指定每页的数量。`Paginator` 可以迭代以获取分页的数据。

```rust
use sea_orm::entity::prelude::*;

let paginator: Paginator = db.find_entity(Entity::User).paginate(10);
```

## 8. Transaction

`Transaction` 表示数据库事务。它可以包含一个或多个 `Query`。`Transaction` 可以通过 `DatabaseConnection` 创建。

```rust
use sea_orm::entity::prelude::*;

let transaction: Transaction = db.begin();
transaction.query(...);
transaction.commit();
```

## 9. QueryFilter

`QueryFilter` 是一组预定义的过滤器，用于在查询中快速应用常见的条件。例如，`is_active()` 将添加一个条件来只选择活动的记录。`QueryFilter` 可以通过 `Query` 创建。

```rust
use sea_orm::entity::prelude::*;

let query: Query = db.find_entity(Entity::User).filter(QueryFilter::is_active());
```

## 10. QueryOrder

`QueryOrder` 允许轻松地向查询添加排序条件。例如，`order_by_asc()` 将按升序对结果进行排序。`QueryOrder` 可以通过 `Query` 创建。

```rust
use sea_orm::entity::prelude::*;

let query: Query = db.find_entity(Entity::User).order_by_asc(Entity::User.column(Entity::UserName));
```

## 11. QueryLimit

`QueryLimit` 用于限制查询返回的结果数量。例如，`limit(10)` 将只返回前 10 条记录。`QueryLimit` 可以通过 `Query` 创建。

```rust
use sea_orm::entity::prelude::*;

let query: Query = db.find_entity(Entity::User).limit(10);
```

## 12. QueryOffset

`QueryOffset` 用于设置查询的偏移量。例如，`offset(10)` 将跳过前 10 条记录。`QueryOffset` 可以通过 `Query` 创建。

```rust
use sea_orm::entity::prelude::*;

let query: Query = db.find_entity(Entity::User).offset(10);
```