# 多对多

多对多关系由三个表形成，其中两个表通过连接表相互关联。例如，一个`Cake`可以有多个`Filling`，而`Filling`则通过中间实体`CakeFilling`被多个`Cake`共享。

## 定义关系

在`Cake`实体上，实现`Related<filling::Entity>`特质。

SeaORM中的`Relation`是一个箭头：它有`from`和`to`。`cake_filling::Relation::Cake`定义了`CakeFilling -> Cake`。调用[`rev`](https://docs.rs/sea-orm/*/sea_orm/entity/prelude/struct.RelationDef.html#method.rev)将其反转为`Cake -> CakeFilling`。

将此与`cake_filling::Relation::Filling`链接，该链接定义了`CakeFilling -> Filling`，结果为`Cake -> CakeFilling -> Filling`。

```rust {4,10} title="entity/cake.rs"
impl Related<super::filling::Entity> for Entity {
    // 最终的关系是 Cake -> CakeFilling -> Filling
    fn to() -> RelationDef {
        super::cake_filling::Relation::Filling.def()
    }

    fn via() -> Option<RelationDef> {
        // 原始的关系是 CakeFilling -> Cake，
        // 在`rev`之后，它变为 Cake -> CakeFilling
        Some(super::cake_filling::Relation::Cake.def().rev())
    }
}
```

同样，在`Filling`实体上，实现`Related<cake::Entity>`特质。首先，通过`via`使用`cake_filling::Relation::Filling`关系的逆向与中间表进行连接，然后使用`cake_filling::Relation::Cake`关系与`Cake`实体进行连接。

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

在`CakeFilling`实体中，其`cake_id`属性引用了`Cake`实体的主键，而其`filling_id`属性引用了`Filling`实体的主键。

为了定义逆向关系：
1. 向`Relation`枚举添加两个新变体`Cake`和`Filling`。
1. 使用`Entity::belongs_to()`定义这两个关系。

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

或者，可以使用`DeriveRelation`宏来缩短定义，以下内容消除了上述需要的`RelationTrait`实现：

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