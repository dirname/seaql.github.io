# 实体结构

让我们来看一个简单的 [Cake](https://github.com/SeaQL/sea-orm/blob/master/src/tests_cfg/cake.rs) 实体。

```rust
use sea_orm::entity::prelude::*;

#[derive(Clone, Debug, PartialEq, DeriveEntityModel)]
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

impl ActiveModelBehavior for ActiveModel {}
```

## 实体

`DeriveEntityModel` 宏承担了定义与 `Model`、`Column` 和 `PrimaryKey` 关联的 `Entity` 的大部分工作。

### 表名

`table_name` 属性指定了数据库中的对应表。
可选地，你也可以通过 `schema_name` 指定数据库模式或数据库名称。

```rust
#[sea_orm(table_name = "cake", schema_name = "public")]
pub struct Model { ... }
```

## 列

### 列名

所有列名默认为蛇形命名法。你可以通过指定 `column_name` 属性来覆盖列名。

```rust
#[sea_orm(column_name = "name")]
pub name: String
```

### 列类型

列类型会根据以下映射自动推导：

对于 Rust 基本数据类型的映射。

| Rust 类型 | 数据库类型 <br/> ([`ColumnType`](https://docs.rs/sea-orm/0.9/sea_orm/entity/enum.ColumnType.html)) | SQLite <br/> 数据类型 | MySQL <br/> 数据类型 | PostgreSQL <br/> 数据类型 |
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
| `u64` | BigUnsigned | integer | bigint unsigned | N/A |
| `f32` | Float | real | float | real |
| `f64` | Double | real | double | double precision |
| `bool` | Boolean | integer | bool | bool |
| `Vec<u8>` | Binary | blob | blob | bytea |

对于 Rust 非基本数据类型的映射。你可以在 [`entity/prelude.rs`](https://github.com/SeaQL/sea-orm/blob/master/src/entity/prelude.rs) 中检查所有重新导出的类型。

| Rust 类型 | 数据库类型 <br/> ([`ColumnType`](https://docs.rs/sea-orm/0.9/sea_orm/entity/enum.ColumnType.html)) | SQLite <br/> 数据类型 | MySQL <br/> 数据类型 | PostgreSQL <br/> 数据类型 |
| --------- | --------- | --------- | --------- | --------- |
| `Date`: chrono::NaiveDate <br/>`TimeDate`: time::Date | Date | text | date | date |
| `Time`: chrono::NaiveTime <br/>`TimeTime`: time::Time | Time | text | time | time |
| `DateTime`: chrono::NaiveDateTime <br/>`TimeDateTime`: time::PrimitiveDateTime | DateTime | text | datetime | timestamp |
| `DateTimeLocal`: chrono::DateTime&lt;Local&gt; <br/>`DateTimeUtc`: chrono::DateTime&lt;Utc&gt; | Timestamp | text | timestamp | N/A |
| `DateTimeWithTimeZone`: chrono::DateTime&lt;FixedOffset&gt; <br/>`TimeDateTimeWithTimeZone`: time::OffsetDateTime | TimestampWithTimeZone | text | timestamp | timestamp with time zone |
| `Uuid`: uuid::Uuid | Uuid | text | binary(16) | uuid |
| `Json`: serde_json::Value | Json | text | json | json |
| `Decimal`: rust_decimal::Decimal | Decimal | real | decimal | decimal |

你可以通过 `column_type` 属性覆盖 Rust 类型和 `ColumnType` 之间的默认映射。

```rust
#[sea_orm(column_type = "Text")]
pub name: String
```

如果你需要将 JSON 字段反序列化为结构体。你需要为它派生 `FromJsonQueryResult`。

```rust
#[derive(Clone, Debug, PartialEq, DeriveEntityModel)]
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
#[derive(Clone, Debug, PartialEq, Serialize, Deserialize, FromJsonQueryResult)]
pub struct KeyValue {
    pub id: i32,
    pub name: String,
    pub price: f32,
    pub notes: Option<String>,
}
```

### 额外属性

你可以向列添加额外的属性 `default_value`、`unique`、`indexed` 和 `nullable`。

如果你为可选属性指定了自定义 `column_type`，你必须同时指定 `nullable`。

```rust
#[sea_orm(column_type = "Text", default_value = "Sam", unique, indexed, nullable)]
pub name: Option<String>
```

### 忽略属性

如果你想忽略某个特定的模型属性，使其不映射到任何数据库列，你可以使用 `ignore` 注解。

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

### 自动递增

默认情况下，对于 `primary_key` 列隐含 `auto_increment`。通过指定 `false` 来覆盖它。

```rust
#[sea_orm(primary_key, auto_increment = false)]
pub id: i32
```

### 复合键

这通常出现在连接表中，其中使用两列元组作为主键。只需注释多列即可定义复合主键。默认情况下，复合键的 `auto_increment` 是 `false`。

```rust
pub struct Model {
    #[sea_orm(primary_key)]
    pub cake_id: i32,
    #[sea_orm(primary_key)]
    pub fruit_id: i32,
}
```

## 关系

`DeriveRelation` 宏是实现 `RelationTrait` 的简单包装器。

```rust
#[derive(DeriveRelation)]
pub enum Relation {
    #[sea_orm(has_many = "super::fruit::Entity")]
    Fruit,
}
```

扩展成

```rust
impl RelationTrait for Relation {
    fn def(&self) -> RelationDef {
        match self {
            Self::Fruit => Entity::has_many(super::fruit::Entity).into(),
        }
    }
}
```

在下一节了解更多关于关系的信息。
