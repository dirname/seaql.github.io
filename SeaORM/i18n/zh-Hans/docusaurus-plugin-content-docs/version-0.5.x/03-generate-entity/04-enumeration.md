# 枚举

你可以在模型中使用 Rust 枚举，其中的值映射到数据库中的字符串、整数或原生枚举。

- 字符串
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

- 整数
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

- 原生数据库枚举
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

## 实现

你可以手动实现 [`ActiveEnum`](https://docs.rs/sea-orm/0.5/sea_orm/entity/trait.ActiveEnum.html)，或者使用宏 [`DeriveActiveEnum`](https://docs.rs/sea-orm/0.5/sea_orm/derive.DeriveActiveEnum.html)。

### 宏实现

参阅 [`DeriveActiveEnum`](https://docs.rs/sea-orm/0.5/sea_orm/derive.DeriveActiveEnum.html) 获取宏属性的完整规范。

```rust
use sea_orm::entity::prelude::*;

// 使用宏
#[derive(Debug, PartialEq, EnumIter, DeriveActiveEnum)]
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

### 手动实现

```rust
use sea_orm::entity::prelude::*;

// 手动实现
#[derive(Debug, PartialEq, EnumIter)]
pub enum Category {
    大,
    小,
}

impl ActiveEnum for Category {
    // 宏属性 `rs_type` 在这里被粘贴
    type Value = String;

    // 默认情况下，如果未明确提供 `enum_name`，则Rust枚举的名称为驼峰式命名
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
                "对于 Category 枚举意外的值: {}",
                v
            ))),
        }
    }

    // 宏属性 `db_type` 在这里被粘贴
    fn db_type() -> ColumnDef {
        ColumnType::String(Some(1)).def()
    }
}
```

## 在模型上使用 ActiveEnum

```rust
use sea_orm::entity::prelude::*;

// 定义 `Category` 活动枚举
#[derive(Debug, Clone, PartialEq, EnumIter, DeriveActiveEnum)]
#[sea_orm(rs_type = "String", db_type = "String(Some(1))")]
pub enum Category {
    #[sea_orm(string_value = "B")]
    大,
    #[sea_orm(string_value = "S")]
    小,
}

#[derive(Clone, Debug, PartialEq, DeriveEntityModel)]
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