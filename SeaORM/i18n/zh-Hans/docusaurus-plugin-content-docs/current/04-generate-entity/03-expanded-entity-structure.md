# 扩展实体结构

SeaORM 是动态的，这意味着您可以在运行时配置各种设置。如果您好奇 `DeriveEntityModel` 展开后是什么样子，请继续阅读。否则，您可以暂时跳过这一节。

扩展的实体格式可以通过 `sea-orm-cli` 使用 `--expanded-format` 选项生成。

让我们来浏览一下扩展的 [Cake](https://github.com/SeaQL/sea-orm/blob/master/src/tests_cfg/cake_expanded.rs) 实体的各部分。

## 实体

通过实现 [`EntityTrait`](https://docs.rs/sea-orm/*/sea_orm/entity/trait.EntityTrait.html)，您可以在给定的表上执行 CRUD 操作。

```rust
#[derive(Copy, Clone, Default, Debug, DeriveEntity)]
pub struct Entity;

impl EntityName for Entity {
    fn schema_name(&self) -> Option<&str> {
        None
    }

    fn table_name(&self) -> &str {
        "cake"
    }
}
```

## 列

表示此表中所有列的枚举。

```rust
#[derive(Copy, Clone, Debug, EnumIter, DeriveColumn)]
pub enum Column {
    Id,
    Name,
}

impl ColumnTrait for Column {
    type EntityName = Entity;

    fn def(&self) -> ColumnDef {
        match self {
            Self::Id => ColumnType::Integer.def(),
            Self::Name => ColumnType::String(None).def(),
        }
    }
}
```

假设所有列名都为蛇形命名法（snake-case）。您可以通过指定 `column_name` 属性来覆盖列名。

```rust
pub enum Column {
    Id,      // 映射到 SQL 中的 "id"
    Name,    // 映射到 SQL 中的 "name"
    #[sea_orm(column_name = "create_at")]
    CreateAt // 映射到 SQL 中的 "create_at"
}
```

为了指定每一列的数据类型，可以使用 [`ColumnType`](https://docs.rs/sea-orm/*/sea_orm/entity/enum.ColumnType.html) 枚举。

### 额外属性

- 默认值
- 唯一
- 索引
- 可空

```rust
ColumnType::String(None).def().default_value("Sam").unique().indexed().nullable()
```

### 在选择和保存时转换列类型

如果您需要将一个列以一种类型进行选择，但以另一种类型保存到数据库中，您可以重写 `select_as` 和 `save_as` 方法来执行类型转换。一个典型的用例是将 `citext` 类型（不区分大小写的文本）的列在 Rust 中作为 `String` 类型选择，并将其保存到数据库中作为 `citext` 类型。应该像下面这样重写 `ColumnTrait` 的方法：

```rust
use sea_orm::sea_query::{Expr, SimpleExpr, Alias}

impl ColumnTrait for Column {
    // 省略...

    /// 用于选择语句中的列表达式的类型转换。
    fn select_as(&self, expr: Expr) -> SimpleExpr {
        match self {
            Column::CaseInsensitiveText => expr.cast_as(Alias::new("text")),
            _ => self.select_enum_as(expr),
        }
    }

    /// 将列的值转换为适合数据库存储的正确类型。
    fn save_as(&self, val: Expr) -> SimpleExpr {
        match self {
            Column::CaseInsensitiveText => val.cast_as(Alias::new("citext")),
            _ => self.save_enum_as(val),
        }
    }
}
```

## 主键

表示此表的主键的枚举。复合主键由具有多个变体的枚举表示。

`ValueType` 定义了在 [`InsertResult`](https://docs.rs/sea-orm/*/sea_orm/struct.InsertResult.html) 中 last_insert_id 的类型。

`auto_increment` 定义了主键是否具有自动生成的值。

```rust
#[derive(Copy, Clone, Debug, EnumIter, DerivePrimaryKey)]
pub enum PrimaryKey {
    #[sea_orm(column_name = "id")] // 覆盖默认的列名
    Id,  // 映射到 SQL 中的 "id"
}

impl PrimaryKeyTrait for PrimaryKey {
    type ValueType = i32;

    fn auto_increment() -> bool {
        true
    }
}
```

复合键示例

```rust
pub enum PrimaryKey {
    CakeId,
    FruitId,
}

impl PrimaryKeyTrait for PrimaryKey {
    type ValueType = (i32, i32);

    fn auto_increment() -> bool {
        false
    }
}
```

## 模型

用于存储查询结果的 Rust 结构体。

```rust
#[derive(Clone, Debug, PartialEq, Eq, DeriveModel, DeriveActiveModel)]
pub struct Model {
    pub id: i32,
    pub name: String,
}
```

### 可空属性

如果表列是可以为空的，则用 `Option` 包装它。

```rust {3}
pub struct Model {
    pub id: i32,
    pub name: Option<String>,
}
```

## 活动模型

`ActiveModel` 具有其对应的 `Model` 的所有属性，但所有属性都被包裹在一个 [`ActiveValue`](https://docs.rs/sea-orm/*/sea_orm/entity/enum.ActiveValue.html) 中。

```rust
#[derive(Clone, Debug, PartialEq)]
pub struct ActiveModel {
    pub id: ActiveValue<i32>,
    pub name: ActiveValue<Option<String>>,
}
```

## 关系

指定与其他实体的关系。

```rust
#[derive(Copy, Clone, Debug, EnumIter)]
pub enum Relation {
    Fruit,
}

impl RelationTrait for Relation {
    fn def(&self) -> RelationDef {
        match self {
            Self::Fruit => Entity::has_many(super::fruit::Entity).into(),
        }
    }
}
```

## 相关

定义特质边界，帮助您一起查询相关实体，尤其在多对多关系中非常有用。

```rust
impl Related<super::fruit::Entity> for Entity {
    fn to() -> RelationDef {
        Relation::Fruit.def()
    }
}

impl Related<super::filling::Entity> for Entity {
    fn to() -> RelationDef {
        super::cake_filling::Relation::Filling.def()
    }

    fn via() -> Option<RelationDef> {
        Some(super::cake_filling::Relation::Cake.def().rev())
    }
}
```