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

对于 Rust 原始数据类型的映射。

| Rust 类型 | 数据库类型 <br/> ([`ColumnType`](https://docs.rs/sea-orm/0.7/sea_orm/entity/enum.ColumnType.html)) |
| --------- | ------------- |
| `String` | 字符串 |
| `String` | 文本 |
| `i8` | 小整数 |
| `u8` | 无符号小整数 |
| `i16` | 短整数 |
| `u16` | 短无符号 |
| `i32` | 整数 |
| `u32` | 无符号 |
| `i64` | 大整数 |
| `u64` | 大无符号 |
| `f32` | 浮点 |
| `f64` | 双精度 |
| `bool` | 布尔 |
| `Vec<u8>` | 二进制 |

对于 Rust 非原始数据类型的映射。你可以在 [`entity/prelude.rs`](https://github.com/SeaQL/sea-orm/blob/master/src/entity/prelude.rs) 中查看所有重导出的类型。

| Rust 类型 | 数据库类型 <br/> ([`ColumnType`](https://docs.rs/sea-orm/0.7/sea_orm/entity/enum.ColumnType.html)) |
| --------- | ------------- |
| `Date`: chrono::NaiveDate <br/>`TimeDate`: time::Date | 日期 |
| `Time`: chrono::NaiveTime <br/>`TimeTime`: time::Time | 时间 |
| `DateTime`: chrono::NaiveDateTime <br/>`TimeDateTime`: time::PrimitiveDateTime | 日期时间 |
| `DateTimeLocal`: chrono::DateTime<本地> <br/>`DateTimeUtc`: chrono::DateTime&lt;Utc&gt; | 时间戳 |
| `DateTimeWithTimeZone`: chrono::DateTime<固定偏移量> <br/>`TimeDateTimeWithTimeZone`: time::OffsetDateTime | 带时区的时间戳 |
| `Uuid`: uuid::Uuid | UUID |
| `Json`: serde_json::Value | JSON |
| `Decimal`: rust_decimal::Decimal | 十进制 |

你可以通过 `column_type` 属性来覆盖 Rust 类型与 `ColumnType` 之间的默认映射。

```rust
#[sea_orm(column_type = "Text")]
pub name: String
```

### 额外属性

你可以在列上添加额外属性 `default_value`、`unique`、`indexed` 和 `nullable`。

如果你为可选属性指定了自定义 `column_type`，你也必须指定 `nullable`。

```rust
#[sea_orm(column_type = "Text", default_value = "Sam", unique, indexed, nullable)]
pub name: Option<String>
```

### 忽略属性

如果你想忽略特定的模型属性，使其不映射到任何数据库列，你可以使用 `ignore` 注释。

```rust
#[sea_orm(ignore)]
pub ignore_me: String
```

## 主键

使用 `primary_key` 属性将列标记为主键。

```rust
#[sea_orm(primary_key)]
pub id: i32
```

### 自动递增

默认情况下，`auto_increment` 对于 `primary_key` 列是隐含的。通过指定 `false` 来覆盖它。

```rust
#[sea_orm(primary_key, auto_increment = false)]
pub id: i32
```

### 复合键

这通常出现在连接表中，其中使用两列元组作为主键。只需注解多个列来定义复合主键。默认情况下，复合键的 `auto_increment` 是 `false`。

```rust
pub struct Model {
    #[sea_orm(primary_key)]
    pub cake_id: i32,
    #[sea_orm(primary_key)]
    pub fruit_id: i32,
}
```

## 关系

`DeriveRelation` 宏是一个简单的包装器，用于实现 `RelationTrait`。

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

在下一节中了解更多关于关系的信息。
