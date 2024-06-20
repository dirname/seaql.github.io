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

`DeriveEntityModel` 宏承担了定义与 `Model`，`Column` 和 `PrimaryKey` 关联的 `Entity` 的大部分工作。

### 表名

`table_name` 属性指定了数据库中的对应表。
可选地，你也可以通过 `schema_name` 指定数据库模式（仅限 Postgres）。

```rust
#[sea_orm(table_name = "cake", schema_name = "public")]
pub struct Model { ... }
```

## 列

### 列类型

列类型会根据以下映射自动推导：

| Rust 类型 | 数据库类型 |
| --------- | ------------- |
| String | Char |
| String | String |
| u8, i8 | TinyInteger |
| u16, i16 | SmallInteger |
| u32, i32 | Integer |
| u64, i64 | BigInteger |
| f32 | Float |
| f64 | Double |
| bool | Boolean |
| NaiveDate | Date |
| NaiveTime | Time |
| DateTime (chrono::NaiveDateTime) | DateTime |
| DateTimeWithTimeZone (chrono::DateTime&lt;FixedOffset&gt;) | TimestampWithTimeZone |
| Uuid (uuid::Uuid) | Uuid |
| Json (serde_json::Value) | Json |
| Decimal (rust_decimal::Decimal) | Decimal |
| Vec&lt;u8&gt; | Binary |

你可以使用 `column_type` 属性覆盖 Rust 类型和 `ColumnType` 之间的默认映射。

```rust
#[sea_orm(column_type = "Text")]
pub name: String
```

### 额外属性

你可以在列上添加额外的属性 `unique`，`indexed` 和 `nullable`。

如果你为可选属性指定了自定义的 `column_type`，你还必须指定 `nullable`。

```rust
#[sea_orm(column_type = "Text", unique, indexed, nullable)]
pub name: Option<String>
```

### 忽略属性

如果你想忽略特定的模型属性，使其不映射到数据库列，可以使用 `ignore` 注释。

```rust
#[sea_orm(ignore)]
pub ignore_me: String
```

## 主键

使用 `primary_key` 属性标记一列作为主键。

```rust
#[sea_orm(primary_key)]
pub id: i32
```

### 自动递增

默认情况下，`auto_increment` 是隐含的。通过指定 `false` 来覆盖。

```rust
#[sea_orm(primary_key, auto_increment = false)]
pub id: i32
```

### 复合键

这通常发生在连接表中，其中使用两列元组作为主键。简单地标记多个列来定义复合主键即可。

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