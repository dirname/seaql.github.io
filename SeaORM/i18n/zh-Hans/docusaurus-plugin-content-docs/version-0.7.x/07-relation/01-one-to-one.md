# 一对一关系

一对一关系是最基本的数据库关系类型。比如说，一个`Cake`实体最多有一个`Fruit`作为它的顶部装饰。

## 定义关系

在`Cake`实体上定义这个关系：
1. 在`Relation`枚举中添加一个新的变体`Fruit`。
1. 使用`Entity::has_one()`来定义它。
1. 实现`Related<Entity>`特质。

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

或者，定义可以被`DeriveRelation`宏简化，
下面的代码消除了对上面的`RelationTrait`实现的需求：

```rust
#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]
pub enum Relation {
    #[sea_orm(has_one = "super::fruit::Entity")]
    Fruit,
}
```

## 定义逆向关系

在`Fruit`实体上，其`cake_id`属性引用了`Cake`实体的主键。

要定义逆向关系：
1. 在`Fruit`实体中添加一个新的枚举变体`Relation::Cake`。
1. 使用`Entity::belongs_to()`方法写出它的定义，我们总是使用这个方法来定义逆向关系。
1. 实现`Related<cake::Entity>`特质。

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

或者，定义可以被`DeriveRelation`宏简化，
下面的代码消除了对上面的`RelationTrait`实现的需求：

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
```