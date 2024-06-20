# 一对多

一对多关系与一对一关系类似。在前一节中，我们举了“一个 `Cake` 实体最多有一个 `Fruit` 拓扑”的例子。要将其变为一对多关系，我们只需去掉“最多一个”的限制。因此，我们有了一个 `Cake` 实体，它可能有多个 `Fruit` 拓扑。

## 定义关系

这几乎与定义一对一关系相同；唯一的区别是我们在这里使用 `Entity::has_many()` 方法。

```rust {3,9,14} title="entity/cake.rs"
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

impl Related<super::fruit::Entity> for Entity {
    fn to() -> RelationDef {
        Relation::Fruit.def()
    }
}
```

或者，定义可以被 `DeriveRelation` 宏缩短，
其中以下内容消除了对上述 `RelationTrait` 实现的需求：

```rust
#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]
pub enum Relation {
    #[sea_orm(has_many = "super::fruit::Entity")]
    Fruit,
}

// 必须手动实现 `Related` 特性
impl Related<super::fruit::Entity> for Entity {
    fn to() -> RelationDef {
        Relation::Fruit.def()
    }
}
```

## 定义逆向关系

这与定义一对一逆向关系相同。

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

或者，定义可以被 `DeriveRelation` 宏缩短，
其中以下内容消除了对上述 `RelationTrait` 实现的需求：

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

// 必须手动实现 `Related` 特性
impl Related<super::cake::Entity> for Entity {
    fn to() -> RelationDef {
        Relation::Cake.def()
    }
}
```