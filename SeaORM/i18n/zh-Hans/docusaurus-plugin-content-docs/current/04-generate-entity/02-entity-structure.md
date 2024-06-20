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

即使它们为空，也不要删除 `Relation` 枚举或 `ActiveModelBehavior` 实现块。
:::

## 实体

`DeriveEntityModel` 宏负责处理定义带有相关联的 `Model`、`Column` 和 `PrimaryKey` 的 `Entity` 的繁重工作。

### 表名

`table_name` 属性指定了数据库中的相应表。
可选地，您也可以通过 `schema_name` 指定数据库模式或数据库名称。

### 列名

默认情况下，所有列名都假定为 snake_case。您可以通过指定 `rename_all` 属性来覆盖整个模型中所有列的行为。

```rust
#[sea_orm(rename_all = "camelCase")]
pub struct Model { ... }
```

<details>
    <summary>您可以在此处找到 `rename_all` 属性的有效值列表</summary>

- camelCase
- kebab-case
- mixed_case
- SCREAMING_SNAKE_CASE
- snake_case
- title_case
- UPPERCASE
- lowercase
- SCREAMING-KEBAB-CASE
- PascalCase

</details>

## 列

### 列名

您可以通过指定 `column_name` 属性来覆盖列名。

```rust
#[derive(DeriveEntityModel)]
#[sea_orm(table_name = "user", rename_all = "camelCase")]
pub struct Model {
    #[sea_orm(primary_key)]
    id: i32,
    first_name: String, // firstName
    #[sea_orm(column_name = "lAsTnAmE")]
    last_name: String, // lAsTnAmE
}
```

### 列类型

列类型将根据以下映射自动推导：

:::tip SQL Server（MSSQL）后端

MSSQL 的列类型映射可以在 [这里](https://www.sea-ql.org/SeaORM-X/docs/generate-entity/entity-structure/) 找到。

:::

对于 Rust 原始数据类型的映射。

| Rust 类型 | 数据库类型 <br/> ([`ColumnType`](https://docs.rs/sea-orm/*/sea_orm/entity/enum.ColumnType.html)) | SQLite <br/> 数据类型 | MySQL <br/> 数据类型 | PostgreSQL <br/> 数据类型 |
| --------- | --------- | --------- | --------- | --------- |
| `String` | Char | char | char | char |
| `String` | String | varchar | varchar | varchar |
| `i8` | TinyInteger | tinyint | tinyint | char |
| `u8` | TinyUnsigned | tinyint  | tinyint unsigned | N/A |
| `i16` | SmallInteger | smallint | smallint | smallint |
| `u16` | SmallUnsigned | smallint | smallint unsigned | N/A |
| `i32` | Integer | integer | int | integer |
| `u32` | Unsigned | integer | int unsigned | N/A |
| `i64` | BigInteger | bigint | bigint | bigint |
| `u64` | BigUnsigned | bigint | bigint unsigned | N/A |
| `f32` | Float | float | float | real |
| `f64` | Double | double | double | double precision |
| `bool` | Boolean | boolean | bool | bool |
| `Vec<u8>` | Binary | blob | blob | bytea |

对于 Rust 非原始数据类型的映射。您可以在 [`entity/prelude.rs`](https://github.com/SeaQL/sea-orm/blob/master/src/entity/prelude.rs) 中查看所有重新导出的类型。

| Rust 类型 | 数据库类型 <br/> ([`ColumnType`](https://docs.rs/sea-orm/*/sea_orm/entity/enum.ColumnType.html)) | SQLite <br/> 数据类型 | MySQL <br/> 数据类型 | PostgreSQL <br/> 数据类型 |
| --------- | --------- | --------- | --------- | --------- |
| `Date`: chrono::NaiveDate <br/>`TimeDate`: time::Date | Date | date_text | date | date |
| `Time`: chrono::NaiveTime <br/>`TimeTime`: time::Time | Time | time_text | time | time |
| `DateTime`: chrono::NaiveDateTime <br/>`TimeDateTime`: time::PrimitiveDateTime | DateTime | datetime_text | datetime | timestamp |
| `DateTimeLocal`: chrono::DateTime&lt;Local&gt; <br/>`DateTimeUtc`: chrono::DateTime&lt;Utc&gt; | Timestamp | timestamp_text | timestamp | N/A |
| `DateTimeWithTimeZone`: chrono::DateTime&lt;FixedOffset&gt; <br/>`TimeDateTimeWithTimeZone`: time::OffsetDateTime | TimestampWithTimeZone | timestamp_with_timezone_text | timestamp | timestamp with time zone |
| `Uuid`: uuid::Uuid, uuid::fmt::Braced, uuid::fmt::Hyphenated, uuid::fmt::Simple, uuid::fmt::Urn | Uuid | uuid_text | binary(16) | uuid |
| `Json`: serde_json::Value | Json | json_text | json | json |
| `Decimal`: rust_decimal::Decimal | Decimal | real | decimal | decimal |

您可以通过 `column_type` 属性覆盖 Rust 类型与 `ColumnType` 之间的默认映射。

```rust
#[sea_orm(column_type = "Text")]
pub name: String
```

如果您需要将 JSON 字段反序列化为结构体，您需要为其派生 `FromJsonQueryResult`。

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
数组数据类型是 Postgres 独有的功能。您可以定义 SeaORM 已支持的类型的向量。
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

### 其他属性

您可以在列上添加其他属性 `default_value`、`unique`、`indexed` 和 `nullable`。

如果您为可选属性指定了自定义 `column_type`，则还必须指定 `nullable`。

```rust
#[sea_orm(column_type = "Text", default_value = "Sam", unique, indexed, nullable)]
pub name: Option<String>
```

### 在选择和保存时转换列类型

如果您需要以一种类型选择一列，但将其以另一种类型保存到数据库中，您可以指定 `select_as` 和 `save_as` 属性来进行转换。一个典型的用例是从数据库中选择类型为 `citext`（不区分大小写的文本）的列，并在 Rust 中将其作为 `String` 类型选择，然后将其保存回数据库作为 `citext`。应该如下定义模型字段：

```rust
#[sea_orm(select_as = "text", save_as = "citext")]
pub case_insensitive_text: String
```

### 忽略属性

如果您希望忽略特定的模型属性，使其不映射到任何数据库列，可以使用 `ignore` 注释。

```rust
#[sea_orm(ignore)]
pub ignore_me: String
```

## 主键

使用 `primary_key` 属性标记一列为主键。

```rust
#[sea_orm(primary_key)]
pub id: i32
```

### 自增

默认情况下，`auto_increment` 对于 `primary_key` 列是隐含的。通过指定 `false` 来覆盖它。

```rust
#[sea_orm(primary_key, auto_increment = false)]
pub id: i32
```

### 复合键

这通常发生在连接表中，其中使用两列元组作为主键。只需注解多个列来定义复合主键。复合键的 `auto_increment` 是 `false`。

主键的最大元数为 12。

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

如果没有关系，简单地写：

```rust
#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]
pub enum Relation {}
```

[Related](https://docs.rs/sea-orm/*/sea_orm/entity/trait.Related.html) 特性将实体连接在一起，以便您可以构建同时选择两个实体的查询。

有关关系的更多信息，请参阅 [关系](06-relation/01-one-to-one.md) 章节。

## 活动模型行为

在 `ActiveModel` 上不同操作的钩子。例如，您可以执行自定义验证逻辑或触发副作用。在事务中，您甚至可以在操作完成后中止操作，阻止其保存到数据库中。

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

    /// 将在插入/更新前触发
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

    /// 将在插入/更新后触发
    async fn after_save<C>(model: Model, db: &C, insert: bool) -> Result<Model, DbErr>
    where
        C: ConnectionTrait,
    {
        Ok(model)
    }

    /// 将在删除前触发
    async fn before_delete<C>(self, db: &C) -> Result<Self, DbErr>
    where
        C: ConnectionTrait,
    {
        Ok(self)
    }

    /// 将在删除后触发
    async fn after_delete<C>(self, db: &C) -> Result<Self, DbErr>
    where
        C: ConnectionTrait,
    {
        Ok(self)
    }
}
```

如果不需要任何自定义，简单地写：

```rust
impl ActiveModelBehavior for ActiveModel {}
```