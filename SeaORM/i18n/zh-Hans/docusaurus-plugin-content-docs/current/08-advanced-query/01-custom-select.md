# 自定义查询

:::caution 我们需要您的支持！⭐
感谢您使用 SeaORM。请在我们的[GitHub仓库](https://github.com/SeaQL/sea-orm)上给我们点星！您的支持对 SeaORM 的持续开发和维护至关重要。
:::

默认情况下，SeaORM 将选择 `Column` 枚举中定义的所有列。如果您只想选择某些特定的列，您可以覆盖这些默认设置。

```rust
// 选择所有列
assert_eq!(
    cake::Entity::find()
        .build(DbBackend::Postgres)
        .to_string(),
    r#"SELECT "cake"."id", "cake"."name" FROM "cake""#
);
```

## 选择部分属性

通过调用 `select_only` 方法来清除默认的选择。然后，您可以选择一些属性或自定义表达式。

```rust
// 只选择 name 列
assert_eq!(
    cake::Entity::find()
        .select_only()
        .column(cake::Column::Name)
        .build(DbBackend::Postgres)
        .to_string(),
    r#"SELECT "cake"."name" FROM "cake""#
);
```

如果您想一次选择多个属性，可以提供一个数组。

```rust
assert_eq!(
    cake::Entity::find()
        .select_only()
        .columns([cake::Column::Id, cake::Column::Name])
        .build(DbBackend::Postgres)
        .to_string(),
    r#"SELECT "cake"."id", "cake"."name" FROM "cake""#
);
```

高级示例：有条件地选择除特定列外的所有列。

```rust
assert_eq!(
    cake::Entity::find()
        .select_only()
        .columns(cake::Column::iter().filter(|col| match col {
            cake::Column::Id => false,
            _ => true,
        }))
        .build(DbBackend::Postgres)
        .to_string(),
    r#"SELECT "cake"."name" FROM "cake""#
);
```

### 可选字段

从 0.12 版本开始，SeaORM 支持 `Option<T>` 模型字段的部分选择。如果选择结果不包含 `Option<T>` 字段，则会填充 `None` 值而不会抛出错误。

```rust
customer::ActiveModel {
    name: Set("Alice".to_owned()),
    notes: Set(Some("Want to communicate with Bob".to_owned())),
    ..Default::default()
}
.save(db)
.await?;

// 故意省略了 `notes` 字段
let customer = Customer::find()
    .select_only()
    .column(customer::Column::Id)
    .column(customer::Column::Name)
    .one(db)
    .await
    .unwrap();

// 选择结果不包含 `notes` 字段。
// 由于它是 `Option<String>` 类型，它将为 `None` 并且不会抛出错误。
assert_eq!(customers.notes, None);
```

## 选择自定义表达式

使用 `column_as` / `expr_as` 方法选择任何自定义表达式，它接受任何 [`sea_query::SimpleExpr`](https://docs.rs/sea-query/*/sea_query/expr/enum.SimpleExpr.html) 和别名。使用 [`sea_query::Expr`](https://docs.rs/sea-query/*/sea_query/expr/struct.Expr.html) 辅助函数构建 `SimpleExpr`。

```rust
use sea_query::{Alias, Expr, Func};

assert_eq!(
    cake::Entity::find()
        .column_as(Expr::col(cake::Column::Id).max().sub(Expr::col(cake::Column::Id)), "id_diff")
        .column_as(Expr::cust("CURRENT_TIMESTAMP"), "current_time")
        .build(DbBackend::Postgres)
        .to_string(),
    r#"SELECT "cake"."id", "cake"."name", MAX("id") - "id" AS "id_diff", CURRENT_TIMESTAMP AS "current_time" FROM "cake""#
);

assert_eq!(
    cake::Entity::find()
        .expr_as(Func::upper(Expr::col((cake::Entity, cake::Column::Name))), "name_upper")
        .build(DbBackend::MySql)
        .to_string(),
    "SELECT `cake`.`id`, `cake`.`name`, UPPER(`cake`.`name`) AS `name_upper` FROM `cake`"
);
```

## 处理查询结果

### 自定义结构体

您可以使用源自 `FromQueryResult` 特性的自定义 `struct` 来处理复杂查询的结果。当处理不能直接转换成模型的自定义列或多个连接时，它特别有用。它可以用来接收任何查询的结果，甚至是原始 SQL。

```rust
use sea_orm::{FromQueryResult, JoinType, RelationTrait};
use sea_query::Expr;

#[derive(FromQueryResult)]
struct CakeAndFillingCount {
    id: i32,
    name: String,
    count: i32,
}

let cake_counts: Vec<CakeAndFillingCount> = cake::Entity::find()
    .column_as(filling::Column::Id.count(), "count")
    .join_rev(
        // 在运行时构造 `RelationDef`
        JoinType::InnerJoin,
        cake_filling::Entity::belongs_to(cake::Entity)
            .from(cake_filling::Column::CakeId)
            .to(cake::Column::Id)
            .into()
    )
    // 从现有实体重用一个 `Relation`
    .join(JoinType::InnerJoin, cake_filling::Relation::Filling.def())
    .group_by(cake::Column::Id)
    .into_model::<CakeAndFillingCount>()
    .all(db)
    .await?;
```

### 非结构化元组

您可以使用 `into_tuple` 方法选择一个元组（或单个值）。

```rust
use sea_orm::{entity::*, query::*, tests_cfg::cake, DeriveColumn, EnumIter};

let res: Vec<(String, i64)> = cake::Entity::find()
    .select_only()
    .column(cake::Column::Name)
    .column(cake::Column::Id.count())
    .group_by(cake::Column::Name)
    .into_tuple()
    .all(&db)
    .await?;
```

## 选择部分模型

在 `0.12` 中，我们引入了一个新的特质 `PartialModelTrait` 和配套宏 `DerivePartialModel`，以改进自定义选择的易用性。

而不是：

```rust
use user::Entity as User;

#[derive(FromQueryResult)]
struct PartialUser {
    pub id: i32,
    pub avatar: String,
    pub unique_id: Uuid,
}

let query = User::find()
    .select_only()
    .column(Column::Id)
    .column(Column::Avatar)
    .column(Column::UniqueId)
    .into_model::<PartialUser>();
```

您可以定义一个部分模型，并自动选择相应的列：

```rust
#[derive(DerivePartialModel, FromQueryResult)]
#[sea_orm(entity = "User")]
struct PartialUser {
    pub id: i32,
    pub avatar: String,
    pub unique_id: Uuid,
}

let query = User::find().into_partial_model::<PartialUser>();
```

:::tip 自 `1.0.0-rc.2` 起
`DerivePartialModel` 宏属性 `entity` 支持复杂类型
```rust
#[sea_orm(entity = "<entity::Model as ModelTrait>::Entity")]
struct PartialUser {
    ..
}
```
:::

高级用法包括列重映射和自定义表达式：

```rust
#[derive(DerivePartialModel, FromQueryResult)]
#[sea_orm(entity = "User")]
struct PartialRow {
    #[sea_orm(from_col = "id")]
    user_id: i32,
    #[sea_orm(from_expr = "Expr::col(user::Column::Id).add(1)")]
    next_id: i32,
}

// 上述等价于：
User::find()
    .column_as(user::Column::Id, "user_id")
    .column_as(Expr::col(user::Column::Id).add(1), "next_id")
```