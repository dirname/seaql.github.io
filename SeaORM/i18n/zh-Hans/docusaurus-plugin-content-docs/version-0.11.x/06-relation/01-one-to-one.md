# 一对一关系

一对一关系是数据库关系中最基本的类型。比如，一个 `Cake` 实体最多有一个 `Fruit` 作为其配料。

## 定义关系

在 `Cake` 实体上定义关系：
1. 向 `Relation` 枚举添加一个新的变体 `Fruit`。
1. 使用 `Entity::has_one()` 方法定义它。
1. 实现 `Related<Entity>` 特性。

```rust {3,9,14} title="entity/cake.rs"
#[derive(Copy, Clone, Debug, EnumIter)]
pub enum Relation {
    Fruit,
}

impl RelationTrait for Relation {
    fn def(&self) -> RelationDef {
        match self {
            Self::Fruit => Entity::has_one(super::fruit::Entity).into(),
        }
    }
}

impl Related<super::fruit::Entity> for Entity {
    fn to() -> RelationDef {
        Relation::Fruit.def()
    }
}
```

或者，可以使用 `DeriveRelation` 宏来简化定义，
这样就不再需要上面的 `RelationTrait` 实现：

```rust
#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]
pub enum Relation {
    #[sea_orm(has_one = "super::fruit::Entity")]
    Fruit,
}

// 需要手动实现 `Related` 特性
impl Related<super::fruit::Entity> for Entity {
    fn to() -> RelationDef {
        Relation::Fruit.def()
    }
}
```

## 定义反向关系

在 `Fruit` 实体中，其 `cake_id` 属性引用了 `Cake` 实体的主键。

为了定义反向关系：
1. 在 `Fruit` 实体中添加一个新的枚举变体 `Relation::Cake`。
1. 使用 `Entity::belongs_to()` 方法编写它的定义，我们总是使用此方法定义反向关系。
1. 实现 `Related<cake::Entity>` 特性。

```rust title="entity/fruit.rs"
#[derive(Copy, Clone, Debug, EnumIter)]
pub enum Relation {
    Cake,
}

impl RelationTrait for Relation {
    fn def(&self) -> RelationDef {
        match self {
            Self::Cake => Entity::belongs_to(super::cake::Entity)
                .from(Column::CakeId)
                .to(super::cake::Column::Id)
                .into(),
        }
    }
}

impl Related<super::cake::Entity> for Entity {
    fn to() -> RelationDef {
        Relation::Cake.def()
    }
}
```

或者，可以使用 `DeriveRelation` 宏来简化定义，
这样就不再需要上面的 `RelationTrait` 实现：

```rust
#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]
pub enum Relation {
    #[sea_orm(
        belongs_to = "super::cake::Entity",
        from = "Column::CakeId",
        to = "super::cake::Column::Id"
    )]
    Cake,
}

// 需要手动实现 `Related` 特性
impl Related<super::cake::Entity> for Entity {
    fn to() -> RelationDef {
        Relation::Cake.def()
    }
}
```