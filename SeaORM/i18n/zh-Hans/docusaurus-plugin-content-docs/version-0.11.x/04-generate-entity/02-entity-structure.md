# 实体结构

让我们来看一个简单的 [Cake](https://github.com/SeaQL/sea-orm/blob/master/src/tests_cfg/cake.rs) 实体。

```rust
use sea_orm::entity::prelude::*;

#[derive(Clone, Debug, PartialEq, Eq, DeriveEntityModel)]
#[sea_orm(table_name = "cake")]
pub struct Model {
    #[sea_orm(primary_key)]
    pub id: i32,
    pub name: String,
}

#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]
pub enum Relation {
    #[sea_orm(has_many = "super::fruit::Entity")]
    Fruit,
}

impl Related<super::fruit::Entity> for Entity {
    fn to() -> RelationDef {
        Relation::Fruit.def()
    }
}

impl ActiveModelBehavior for ActiveModel {}
```

:::info

即使您不希望有任何关系或额外行为，也不要删除 `Relation` 枚举或 `ActiveModelBehavior` 实现块。
保持它们的主体为空就足以使实体正常工作。

:::

## 实体

`DeriveEntityModel` 宏承担了定义带有相关 `Model`、`Column` 和 `PrimaryKey` 的 `Entity` 的繁重工作。

### 表名

`table_name` 属性指定了数据库中的对应表。
可选地，您也可以通过 `schema_name` 指定数据库模式或数据库名称。

```rust
#[sea_orm(table_name = "cake", schema_name = "public")]
pub struct Model { ... }
```

## 列

### 列名

所有列名默认为蛇形命名法。您可以通过指定 `column_name` 属性来覆盖列名。

```rust
#[sea_orm(column_name = "name")]
pub name: String
```

### 列类型

列类型将根据以下映射自动推导：

对于 Rust 原始数据类型的映射。

| Rust 类型 | 数据库类型 <br/> ([`ColumnType`](https://docs.rs/sea-orm/*/sea_orm/entity/enum.ColumnType.html)) | SQLite <br/> 数据类型 | MySQL <br/> 数据类型 | PostgreSQL <br/> 数据类型 |
| --------- | --------- | --------- | --------- | --------- |
| `String` | Char | text | char | char |
| `String` | String | text | varchar | varchar |
| `i8` | TinyInteger | integer | tinyint | char |
| `u8` | TinyUnsigned | integer  | tinyint unsigned | N/A |
| `i16` | SmallInteger | integer | smallint | smallint |
| `u16` | SmallUnsigned | integer | smallint unsigned | N/A |
| `i32` | Integer | integer | int | integer |
| `u32` | Unsigned | integer | int unsigned | N/A |
| `i64` | BigInteger | integer | bigint | bigint |
| `u64` | BigUnsigned | N/A | bigint unsigned | N/A |
| `f32` | Float | real | float | real |
| `f64` | Double | real | double | double precision |
| `bool` | Boolean | integer | bool | bool |
| `Vec<u8>` | Binary | blob | blob | bytea |

对于 Rust 非原始数据类型的映射。您可以在 [`entity/prelude.rs`](https://github.com/SeaQL/sea-orm/blob/master/src/entity/prelude.rs) 中查看所有重新导出的类型。

| Rust 类型 | 数据库类型 <br/> ([`ColumnType`](https://docs.rs/sea-orm/*/sea_orm/entity/enum.ColumnType.html)) | SQLite <br/> 数据类型 | MySQL <br/> 数据类型 | PostgreSQL <br/> 数据类型 |
| --------- | --------- | --------- | --------- | --------- |
| `Date`: chrono::NaiveDate <br/>`TimeDate`: time::Date | Date | text | date | date |
| `Time`: chrono::NaiveTime <br/>`TimeTime`: time::Time | Time | text | time | time |
| `DateTime`: chrono::NaiveDateTime <br/>`TimeDateTime`: time::PrimitiveDateTime | DateTime | text | datetime | timestamp |
| `DateTimeLocal`: chrono::DateTime&lt;Local&gt; <br/>`DateTimeUtc`: chrono::DateTime&lt;Utc&gt; | Timestamp | text | timestamp | N/A |
| `DateTimeWithTimeZone`: chrono::DateTime&lt;FixedOffset&gt; <br/>`TimeDateTimeWithTimeZone`: time::OffsetDateTime | TimestampWithTimeZone | text | timestamp | timestamp with time zone |
| `Uuid`: uuid::Uuid, uuid::fmt::Braced, uuid::fmt::Hyphenated, uuid::fmt::Simple, uuid::fmt::Urn | Uuid | text | binary(16) | uuid |
| `Json`: serde_json::Value | Json | text | json | json |
| `Decimal`: rust_decimal::Decimal | Decimal | real | decimal | decimal |

您可以通过 `column_type` 属性覆盖 Rust 类型与 `ColumnType` 之间的默认映射。

```rust
#[sea_orm(column_type = "Text")]
pub name: String
```

如果您需要将 JSON 字段反序列化为结构体。您需要为其派生 `FromJsonQueryResult`。

```rust
#[derive(Clone, Debug, PartialEq, Eq, DeriveEntityModel)]
#[sea_orm(table_name = "json_struct")]
pub struct Model {
    #[sea_orm(primary_key)]
    pub id: i32,
    // 在 `serde_json::Value` 中定义的 JSON 列
    pub json: Json,
    // 在自定义结构体中定义的 JSON 列
    pub json_value: KeyValue,
    pub json_value_opt: Option<KeyValue>,
}

// 自定义结构体必须派生 `FromJsonQueryResult`、`Serialize` 和 `Deserialize`
#[derive(Clone, Debug, PartialEq, Eq, Serialize, Deserialize, FromJsonQueryResult)]
pub struct KeyValue {
    pub id: i32,
    pub name: String,
    pub price: f32,
    pub notes: Option<String>,
}
```

:::info

PostgreSQL 支持数组数据类型，您可以在模型中定义任何已由 SeaORM 支持的类型的向量。请记住，您需要启用 `postgres-array` 功能，并且这是仅限于 Postgres 的功能。

:::

```rust
#[derive(Clone, Debug, PartialEq, DeriveEntityModel)]
#[sea_orm(table_name = "collection")]
pub struct Model {
    #[sea_orm(primary_key)]
    pub id: i32,
    pub integers: Vec<i32>,
    pub integers_opt: Option<Vec<i32>>,
    pub floats: Vec<f32>,
    pub doubles: Vec<f64>,
    pub strings: Vec<String>,
}
```

### 额外属性

您可以向列添加额外的属性 `default_value`、`unique`、`indexed` 和 `nullable`。

如果您为可选属性指定了自定义 `column_type`，则还必须指定 `nullable`。

```rust
#[sea_orm(column_type = "Text", default_value = "Sam", unique, indexed, nullable)]
pub name: Option<String>
```

### 忽略属性

如果您想忽略某个特定模型属性，使其不映射到任何数据库列，可以使用 `ignore` 注解。

```rust
#[sea_orm(ignore)]
pub ignore_me: String
```

### 在选择和保存时转换列类型

如果您需要将一列作为一种类型选择，但以另一种类型保存到数据库，可以指定 `select_as` 和 `save_as` 属性来执行转换。一个典型的应用场景是从数据库中选择类型为 `citext`（大小写不敏感的文本）的列，在 Rust 中将其作为 `String` 处理，并将其保存到数据库中作为 `citext`。应该如下定义模型字段：

```rust
#[sea_orm(select_as = "text", save_as = "citext")]
pub case_insensitive_text: String
```

## 主键

使用 `primary_key` 属性标记一列为主键。

```rust
#[sea_orm(primary_key)]
pub id: i32
```

### 自动递增

默认情况下，`auto_increment` 对 `primary_key` 列是隐含的。通过指定 `false` 来覆盖它。

```rust
#[sea_orm(primary_key, auto_increment = false)]
pub id: i32
```

### 组合键

这通常发生在连接表中，其中一对两列用作主键。只需注释多列来定义组合主键。默认情况下，组合键的 `auto_increment` 是 `false`。

```rust
pub struct Model {
    #[sea_orm(primary_key)]
    pub cake_id: i32,
    #[sea_orm(primary_key)]
    pub fruit_id: i32,
}
```

## 关系

`DeriveRelation` 是一个宏，帮助您实现 [`RelationTrait`](https://docs.rs/sea-orm/*/sea_orm/entity/trait.RelationTrait.html)。

```rust
#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]
pub enum Relation {
    #[sea_orm(has_many = "super::fruit::Entity")]
    Fruit,
}
```

如果没有关系，只需写：

```rust
#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]
pub enum Relation {}
```

[Related](https://docs.rs/sea-orm/*/sea_orm/entity/trait.Related.html) 特性将实体连接在一起，以便您可以构建查询同时选择两个实体。

在 [关系](06-relation/01-one-to-one.md) 章节中了解更多关于关系的信息。

## 活动模型行为

处理 `ActiveModel` 上不同操作的手动程序。例如，您可以执行自定义验证逻辑或触发副作用。在事务中，您甚至可以在操作完成后终止操作，阻止其保存到数据库中。

```rust
#[async_trait]
impl ActiveModelBehavior for ActiveModel {
    /// 创建具有默认值的新 ActiveModel。也用于 `Default::default()`。
    fn new() -> Self {
        Self {
            uuid: Set(Uuid::new_v4()),
            ..ActiveModelTrait::default()
        }
    }

    /// 在插入/更新前触发
    async fn before_save<C>(self, db: &C, insert: bool) -> Result<Self, DbErr>
    where
        C: ConnectionTrait,
    {
        if self.price.as_ref() <= &0.0 {
            Err(DbErr::Custom(format!(
                "[before_save] Invalid Price, insert: {}",
                insert
            )))
        } else {
            Ok(self)
        }
    }

    /// 在插入/更新后触发
    async fn after_save<C>(model: Model, db: &C, insert: bool) -> Result<Model, DbErr>
    where
        C: ConnectionTrait,
    {
        Ok(model)
    }

    /// 在删除前触发
    async fn before_delete<C>(self, db: &C) -> Result<Self, DbErr>
    where
        C: ConnectionTrait,
    {
        Ok(self)
    }

    /// 在删除后触发
    async fn after_delete<C>(self, db: &C) -> Result<Self, DbErr>
    where
        C: ConnectionTrait,
    {
        Ok(self)
    }
}
```

如果不需要自定义，只需写：

```rust
impl ActiveModelBehavior for ActiveModel {}
```
