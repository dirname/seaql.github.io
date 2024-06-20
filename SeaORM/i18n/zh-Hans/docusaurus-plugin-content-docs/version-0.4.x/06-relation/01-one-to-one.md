# 一对一关系

一对一关系是数据库关系中最基本的类型。比如，一个`Cake`实体最多有一个`Fruit`作为其顶部装饰。

## 定义关系

在`Cake`实体上定义这个关系：
1. 在`Relation`枚举中添加一个新的变体`Fruit`。
1. 使用`Entity::has_one()`方法来定义它。
1. 实现`Related<Entity>`特质。

```rust {2,8,13} title="entity/cake.rs"
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

## 定义逆向关系

在`Fruit`实体上，其`cake_id`属性引用了`Cake`实体的主键。

要定义逆向关系：
1. 在`Fruit`实体中添加一个新的枚举变体`Relation::Cake`。
1. 使用`Entity::belongs_to()`方法编写它的定义，我们总是使用此方法定义逆向关系。
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