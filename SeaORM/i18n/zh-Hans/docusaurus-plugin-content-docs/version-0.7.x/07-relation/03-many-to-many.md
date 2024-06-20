# 多对多

多对多关系由三个表形成，其中两个表通过一个连接表相关联。例如，一个“Cake”（蛋糕）可以有多个“Filling”（馅料），而“Filling”则被多个“Cake”共享，通过一个中间实体“CakeFilling”。

## 定义关系

在“Cake”实体上，实现`Related<filling::Entity>`特质。首先，通过逆向的`cake_filling::Relation::Cake`关系`via`与中间表连接，然后通过`cake_filling::Relation::Filling`关系`to`与“Filling”实体连接。

```rust {4,10} title="entity/cake.rs"
impl Related<super::filling::Entity> for Entity {
    // 最终的关系是 Cake -> CakeFilling -> Filling
    fn to() -> RelationDef {
        super::cake_filling::Relation::Filling.def()
    }

    fn via() -> Option<RelationDef> {
        // 原始的关系是 CakeFilling -> Cake，
        // 经过`rev`后变为 Cake -> CakeFilling
        Some(super::cake_filling::Relation::Cake.def().rev())
    }
}
```

同样，在“Filling”实体上，实现`Related<cake::Entity>`特质。首先，通过逆向的`cake_filling::Relation::Filling`关系`via`与中间表连接，然后通过`cake_filling::Relation::Cake`关系`to`与“Cake”实体连接。

```rust {3,7} title="entity/filling.rs"
impl Related<super::cake::Entity> for Entity {
    fn to() -> RelationDef {
        super::cake_filling::Relation::Cake.def()
    }

    fn via() -> Option<RelationDef> {
        Some(super::cake_filling::Relation::Filling.def().rev())
    }
}
```

## 定义逆向关系

在“CakeFilling”实体上，其`cake_id`属性引用了“Cake”实体的主键，而其`filling_id`属性引用了“Filling”实体的主键。

为了定义逆向关系：
1. 在`Relation`枚举中添加两个新变体`Cake`和`Filling`。
1. 使用`Entity::belongs_to()`定义两者关系。

```rust title="entity/cake_filling.rs"
#[derive(Copy, Clone, Debug, EnumIter)]
pub enum Relation {
    Cake,
    Filling,
}

impl RelationTrait for Relation {
    fn def(&self) -> RelationDef {
        match self {
            Self::Cake => Entity::belongs_to(super::cake::Entity)
                .from(Column::CakeId)
                .to(super::cake::Column::Id)
                .into(),
            Self::Filling => Entity::belongs_to(super::filling::Entity)
                .from(Column::FillingId)
                .to(super::filling::Column::Id)
                .into(),
        }
    }
}
```

或者，可以通过`DeriveRelation`宏来简化定义，
以下面的代码消除了上面需要的`RelationTrait`实现：

```rust
#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]
pub enum Relation {
    #[sea_orm(
        belongs_to = "super::cake::Entity",
        from = "Column::CakeId",
        to = "super::cake::Column::Id"
    )]
    Cake,
    #[sea_orm(
        belongs_to = "super::filling::Entity",
        from = "Column::FillingId",
        to = "super::filling::Column::Id"
    )]
    Filling,
}
```