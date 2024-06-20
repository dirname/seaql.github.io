# 自我引用

在前一节中，我们介绍了[`Linked`](https://docs.rs/sea-orm/*/sea_orm/entity/trait.Linked.html)特质。它也能帮助你定义自我引用关系。

下面的例子定义了一个引用自身的实体。

```rust
use sea_orm::entity::prelude::*;

#[derive(Clone, Debug, PartialEq, Eq, DeriveEntityModel)]
#[sea_orm(table_name = "self_join")]
pub struct Model {
    #[sea_orm(primary_key, auto_increment = false)]
    pub uuid: Uuid,
    pub uuid_ref: Option<Uuid>,
    pub time: Option<Time>,
}

#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]
pub enum Relation {
    #[sea_orm(belongs_to = "Entity", from = "Column::UuidRef", to = "Column::Uuid")]
    SelfReferencing,
}

pub struct SelfReferencingLink;

impl Linked for SelfReferencingLink {
    type FromEntity = Entity;

    type ToEntity = Entity;

    fn link(&self) -> Vec<RelationDef> {
        vec![Relation::SelfReferencing.def()]
    }
}
```