# 枚举类型

在模型中，您可以使用 Rust 枚举，其中的值映射到数据库中的字符串、整数或原生枚举。

### 字符串

对于字符串枚举，除了能够为每个变体指定字符串值之外，您还可以在枚举上指定 `rename_all` 属性，如果所有值都应基于大小写转换具有字符串值。

#### 手动字符串值

```rust
#[derive(EnumIter, DeriveActiveEnum)]
#[sea_orm(rs_type = "String", db_type = "String(StringLen::N(1))")]
pub enum Category {
    #[sea_orm(string_value = "B")]
    大型,
    #[sea_orm(string_value = "S")]
    小型,
}
```

#### 从变体派生的字符串值

```rust
#[derive(EnumIter, DeriveActiveEnum)]
#[sea_orm(rs_type = "String", db_type = "String(StringLen::None)")]
pub enum Category {
    #[sea_orm(string_value = "bigTask")]
    大任务,
    #[sea_orm(string_value = "smallBreak")]
    小休息,
}
```

上述代码等同于：

```rust
#[derive(EnumIter, DeriveActiveEnum)]
#[sea_orm(rs_type = "String", db_type = "String(StringLen::None)", rename_all = "camelCase")]
pub enum Category {
    大任务,
    小休息,
}
```

<details>
    <summary>您可以在这里找到 `rename_all` 属性的有效值列表</summary>

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

或者，您也可以这样编写：
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

MySQL 枚举只是列定义的一部分，不能在不同表之间重复使用。

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

如果您使用的是 Postgres，枚举必须在迁移中的单独 `Type` 语句中创建，您可以这样创建它：

#### 1. `TYPE` 语句

[完整示例](https://github.com/SeaQL/sea-orm/blob/master/sea-orm-migration/tests/common/migration/m20220118_000004_create_tea_enum.rs)。

```rust
// 在迁移中运行此操作：

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
此方法将提供一个接口，用于将类型添加到数据库中，在创建表格时使用该类型作为列类型，并在播种数据时向行添加该类型的值。

1. 定义一个 `ActiveEnum`

```rust
#[derive(EnumIter, DeriveActiveEnum)]
#[sea_orm(rs_type = "String", db_type = "Enum", enum_name = "tea_type")]
pub enum TeaType {
    #[sea_orm(string_value = "EverydayTea")]
    日常茶,
    #[sea_orm(string_value = "BreakfastTea")]
    早餐茶,
}
```

2. 在数据库中创建类型

```rust
use sea_orm::{Schema, DbBackend};

// 在迁移中：
let schema = Schema::new(DbBackend::Postgres);

manager
    .create_type(
        // CREATE TYPE "tea_type" AS ENUM ('EverydayTea', 'BreakfastTea')
        schema.create_enum_from_active_enum::<TeaType>(),
    )
    .await?;
```

3. 在创建表格时将类型用作表格列类型

```rust diff
// 在迁移中：

manager::create()
    .table(Tea::Table)
    .if_not_exists()
    .col(Column::new(Tea::Type).custom(TeaType::name())) // 使用类型作为表格列 
    // ... 更多列
```
> 参见 [Schema 创建方法 - 创建表格](https://www.sea-ql.org/SeaORM/docs/migration/writing-migration/#schema-creation-methods)

4. 在填充数据库时使用类型

```rust
// 在迁移中

let insert = Query::insert()
    .into_table(Tea::Table)
    .columns([Tea::TeaType])
    .values_panic([TeaType::EverydayTea.as_enum()]) // 调用 `as_enum` 将变体转换为 SimpleExpr
    .to_owned();

manager.exec_stmt(insert).await?;
// ...
```
> 参见 [播种数据 - 使用 sea_query 语句](https://www.sea-ql.org/SeaORM/docs/migration/seeding-data/#:~:text=write%20SeaQuery%20statement%20to%20seed%20the%20table)

## 实现

您可以使用 [`DeriveActiveEnum`](https://docs.rs/sea-orm/*/sea_orm/derive.DeriveActiveEnum.html) 宏实现 [`ActiveEnum`](https://docs.rs/sea-orm/*/sea_orm/entity/trait.ActiveEnum.html)。

```rust
use sea_orm::entity::prelude::*;

#[derive(Debug, PartialEq, Eq, EnumIter, DeriveActiveEnum)]
#[sea_orm(
    rs_type = "String",
    db_type = "String(StringLen::N(1))",
    enum_name = "category"
)]
pub enum Category {
    #[sea_orm(string_value = "B")]
    大型,
    #[sea_orm(string_value = "S")]
    小型,
}
```

<details>
  <summary>为了说明目的，这大致是宏实现的内容：</summary>
  <div>

```rust
use sea_orm::entity::prelude::*;

#[derive(Debug, PartialEq, Eq, EnumIter)]
pub enum Category {
    大型,
    小型,
}

// 手动实现
impl ActiveEnum for Category {
    // 宏属性 `rs_type` 将被粘贴在此处
    type Value = String;

    // 默认情况下，如果未明确提供 `enum_name`，则 Rust 枚举的驼峰命名
    fn name() -> String {
        "category".to_owned()
    }

    // 映射 Rust 枚举变体到相应的 `num_value` 或 `string_value`
    fn to_value(&self) -> Self::Value {
        match self {
            Self::大型 => "B",
            Self::小型 => "S",
        }
        .to_owned()
    }

    // 映射 `num_value` 或 `string_value` 到相应的 Rust 枚举变体
    fn try_from_value(v: &Self::Value) -> Result<Self, DbErr> {
        match v.as_ref() {
            "B" => Ok(Self::大型),
            "S" => Ok(Self::小型),
            _ => Err(DbErr::Type(format!(
                "Category 枚举的意外值: {}",
                v
            ))),
        }
    }

    // 宏属性 `db_type` 将被粘贴在此处
    fn db_type() -> ColumnDef {
        ColumnType::String(Some(1)).def()
    }
}
```
  </div>
</details>

## 在模型中使用 ActiveEnum

```rust
use sea_orm::entity::prelude::*;

// 定义 `Category` 活动枚举
#[derive(Debug, Clone, PartialEq, Eq, EnumIter, DeriveActiveEnum)]
#[sea_orm(rs_type = "String", db_type = "String(StringLen::N(1))")]
pub enum Category {
    #[sea_orm(string_value = "B")]
    大型,
    #[sea_orm(string_value = "S")]
    小型,
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