# 扩展实体结构

SeaORM 是动态的，这意味着你可以在运行时配置各种设置。如果你对 `DeriveEntityModel` 展开后是什么样子感到好奇，请继续阅读。否则，你可以暂时跳过这部分。

通过 `sea-orm-cli` 使用 `--expanded-format` 选项可以生成扩展的实体格式。

让我们浏览一下扩展的 [Cake](https://github.com/SeaQL/sea-orm/blob/master/src/tests_cfg/cake_expanded.rs) 实体的各个部分。

## 实体

通过实现 [`EntityTrait`](https://docs.rs/sea-orm/0.9/sea_orm/entity/trait.EntityTrait.html)，你可以在给定的表上执行 CRUD 操作。

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

所有列名默认为蛇形命名法。你可以通过指定 `column_name` 属性来覆盖列名。

```rust
pub enum Column {
    Id,      // 映射到 SQL 中的 "id"
    Name,    // 映射到 SQL 中的 "name"
    #[sea_orm(column_name = "create_at")]
    CreateAt // 映射到 SQL 中的 "create_at"
}
```

为了指定每一列的数据类型，可以使用 [`ColumnType`](https://docs.rs/sea-orm/0.9/sea_orm/entity/enum.ColumnType.html) 枚举。

### 额外属性

- 默认值
- 唯一性
- 索引
- 可空性

```rust
ColumnType::String(None).def().default_value("Sam").unique().indexed().nullable()
```

## 主键

表示此表主键的枚举。复合主键由具有多个变体的枚举表示。

`ValueType` 定义了在 [`InsertResult`](https://docs.rs/sea-orm/0.9/sea_orm/struct.InsertResult.html) 中 last_insert_id 的类型。

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

用于存储查询结果的 Rust 结构。

```rust
#[derive(Clone, Debug, PartialEq, DeriveModel, DeriveActiveModel)]
pub struct Model {
    pub id: i32,
    pub name: String,
}
```

### 可空属性

如果表中的列是可空的，则用 `Option` 包装它。

```rust {3}
pub struct Model {
    pub id: i32,
    pub name: Option<String>,
}
```

## 活动模型

`ActiveModel` 具有其对应 `Model` 的所有属性，但所有属性都用 [`ActiveValue`](https://docs.rs/sea-orm/0.9/sea_orm/entity/enum.ActiveValue.html) 包装。

```rust
#[derive(Clone, Debug, PartialEq)]
pub struct ActiveModel {
    pub id: ActiveValue<i32>,
    pub name: ActiveValue<Option<String>>,
}
```

### 活动模型行为

在 `ActiveModel` 上触发的不同动作的处理程序。例如，你可以执行自定义验证逻辑，阻止模型保存到数据库。即使在事务中，你也可以在操作完成后中止该操作。

```rust
impl ActiveModelBehavior for ActiveModel {
    /// 创建一个带有默认值的新 ActiveModel。也用于 `Default::default()`。
    fn new() -> Self {
        Self {
            uuid: Set(Uuid::new_v4()),
            ..ActiveModelTrait::default()
        }
    }

    /// 在插入/更新前触发
    fn before_save(self, insert: bool) -> Result<Self, DbErr> {
        if self.price.as_ref() <= &0.0 {
            Err(DbErr::Custom(format!(
                "[before_save] 无效的价格, insert: {}",
                insert
            )))
        } else {
            Ok(self)
        }
    }

    /// 在插入/更新后触发
    fn after_save(model: Model, insert: bool) -> Result<Model, DbErr> {
        Ok(model)
    }

    /// 在删除前触发
    fn before_delete(self) -> Result<Self, DbErr> {
        Ok(self)
    }

    /// 在删除后触发
    fn after_delete(self) -> Result<Self, DbErr> {
        Ok(self)
    }
}
```

如果不需任何定制化，只需写：

```rust
impl ActiveModelBehavior for ActiveModel {}
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

定义特征边界以帮助你一起查询相关实体，特别是在多对多关系中特别有用。

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