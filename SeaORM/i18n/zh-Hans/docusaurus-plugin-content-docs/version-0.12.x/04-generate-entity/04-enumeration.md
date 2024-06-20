# 枚举

你可以在模型中使用 Rust 枚举，其中的值映射到数据库中的字符串、整数或原生枚举。

### 字符串

```rust
#[derive(EnumIter, DeriveActiveEnum)]
#[sea_orm(rs_type = "String", db_type = "String(Some(1))")]
pub enum Category {
    #[sea_orm(string_value = "B")]
    大,
    #[sea_orm(string_value = "S")]
    小,
}
```

### 整数

```rust
#[derive(EnumIter, DeriveActiveEnum)]
#[sea_orm(rs_type = "i32", db_type = "Integer")]
pub enum Color {
    #[sea_orm(num_value = 0)]
    黑色,
    #[sea_orm(num_value = 1)]
    白色,
}
```

或者，你可以这样写：
```rust
#[derive(EnumIter, DeriveActiveEnum)]
#[sea_orm(rs_type = "i32", db_type = "Integer")]
pub enum Color {
    黑色 = 0,
    白色 = 1,
}
```

## 原生数据库枚举

```rust
#[derive(EnumIter, DeriveActiveEnum)]
#[sea_orm(rs_type = "String", db_type = "Enum", enum_name = "tea")]
pub enum Tea {
    #[sea_orm(string_value = "EverydayTea")]
    日常茶,
    #[sea_orm(string_value = "BreakfastTea")]
    早餐茶,
}
```

### MySQL

MySQL 枚举只是列定义的一部分，并且不能在不同的表中重用。

```rust
Table::create()
    .table(Posts::TableName)
    .col(
        ColumnDef::new(Posts::ColumnName)
            .enumeration(Alias::new("tea"), [Alias::new("EverydayTea"), Alias::new("BreakfastTea")]),
    )

"CREATE TABLE `table_name` (`column_name` ENUM('EverydayTea', 'BreakfastTea'))",
```

### Postgres

如果你使用的是 Postgres，枚举必须在迁移中的单独的 `Type` 语句中创建，你可以通过以下方式创建它：

#### 1. 自定义 TYPE 语句

[完整示例](https://github.com/SeaQL/sea-orm/blob/master/sea-orm-migration/tests/common/migration/m20220118_000004_create_tea_enum.rs)。

```rust
// 在迁移中运行此代码：

manager
    .create_type(
        // CREATE TYPE "tea" AS ENUM ('EverydayTea', 'BreakfastTea')
        Type::create()
            .as_enum(Alias::new("tea"))
            .values([Alias::new("EverydayTea"), Alias::new("BreakfastTea")])
            .to_owned(),
    )
    .await?;
```

#### 2. `create_enum_from_active_enum`

```rust
// 我们可以在迁移中这样做：

use sea_orm::{Schema, DbBackend};
let schema = Schema::new(DbBackend::Postgres);

manager
    .create_type(
        // CREATE TYPE "tea" AS ENUM ('EverydayTea', 'BreakfastTea')
        schema.create_enum_from_active_enum::<Tea>(),
    )
    .await?;
```

## 实现

你可以通过使用 [`DeriveActiveEnum`](https://docs.rs/sea-orm/*/sea_orm/derive.DeriveActiveEnum.html) 宏来实现 [`ActiveEnum`](https://docs.rs/sea-orm/*/sea_orm/entity/trait.ActiveEnum.html)。

```rust
use sea_orm::entity::prelude::*;

#[derive(Debug, PartialEq, Eq, EnumIter, DeriveActiveEnum)]
#[sea_orm(
    rs_type = "String",
    db_type = "String(Some(1))",
    enum_name = "category"
)]
pub enum Category {
    #[sea_orm(string_value = "B")]
    大,
    #[sea_orm(string_value = "S")]
    小,
}
```

<details>
  <summary>为了说明目的，这大致是宏实现的内容：</summary>
  <div>

```rust
use sea_orm::entity::prelude::*;

#[derive(Debug, PartialEq, Eq, EnumIter)]
pub enum Category {
    大,
    小,
}

// 手动实现
impl ActiveEnum for Category {
    // 宏属性 `rs_type` 被粘贴在这里
    type Value = String;

    // 默认情况下，如果未明确提供 `enum_name`，则为驼峰命名的 Rust 枚举名
    fn name() -> String {
        "category".to_owned()
    }

    // 将 Rust 枚举变体映射到对应的 `num_value` 或 `string_value`
    fn to_value(&self) -> Self::Value {
        match self {
            Self::大 => "B",
            Self::小 => "S",
        }
        .to_owned()
    }

    // 将 `num_value` 或 `string_value` 映射到对应的 Rust 枚举变体
    fn try_from_value(v: &Self::Value) -> Result<Self, DbErr> {
        match v.as_ref() {
            "B" => Ok(Self::大),
            "S" => Ok(Self::小),
            _ => Err(DbErr::Type(format!(
                "Category 枚举的意外值: {}",
                v
            ))),
        }
    }

    // 宏属性 `db_type` 被粘贴在这里
    fn db_type() -> ColumnDef {
        ColumnType::String(Some(1)).def()
    }
}
```
  </div>
</details>

## 在模型上使用 ActiveEnum

```rust
use sea_orm::entity::prelude::*;

// 定义 `Category` 活动枚举
#[derive(Debug, Clone, PartialEq, Eq, EnumIter, DeriveActiveEnum)]
#[sea_orm(rs_type = "String", db_type = "String(Some(1))")]
pub enum Category {
    #[sea_orm(string_value = "B")]
    大,
    #[sea_orm(string_value = "S")]
    小,
}

#[derive(Clone, Debug, PartialEq, Eq, DeriveEntityModel)]
#[sea_orm(table_name = "active_enum")]
pub struct Model {
    #[sea_orm(primary_key)]
    pub id: i32,
    // 使用 `Category` 活动枚举表示数据库列
    pub category: Category,
    pub category_opt: Option<Category>,
}

#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]
pub enum Relation {}

impl ActiveModelBehavior for ActiveModel {}
```