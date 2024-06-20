# 链式关系

`Related` 特性表示我们在实体关系图中绘制的箭头（1-1、1-N、M-N）。一个 [`Linked`](https://docs.rs/sea-orm/0.9/sea_orm/entity/trait.Linked.html) 由一系列关系组成，在以下情况下很有用：

1. 一对实体之间存在多条连接路径
1. 在关系查询中跨多个实体进行连接

以 [这个](https://github.com/SeaQL/sea-orm/blob/master/src/tests_cfg/cake.rs) 简单示例为例，我们通过中间的 `cake_filling` 表来连接蛋糕和馅料。

```rust
#[derive(Debug)]
pub struct CakeToFilling;

impl Linked for CakeToFilling {
    type FromEntity = cake::Entity;

    type ToEntity = filling::Entity;

    fn link(&self) -> Vec<RelationDef> {
        vec![
            cake_filling::Relation::Cake.def().rev(),
            cake_filling::Relation::Filling.def(),
        ]
    }
}
```

或者，`RelationDef` 可以在运行时定义，以下代码与上面等效：

```rust
#[derive(Debug)]
pub struct CakeToFilling;

impl Linked for CakeToFilling {
    type FromEntity = cake::Entity;

    type ToEntity = filling::Entity;

    fn link(&self) -> Vec<RelationDef> {
        vec![
            cake_filling::Relation::Cake.def().rev(),
            cake_filling::Entity::belongs_to(filling::Entity)
                .from(cake_filling::Column::FillingId)
                .to(filling::Column::Id)
                .into(),
        ]
    }
}
```

### 懒加载

使用 [`find_linked`](https://docs.rs/sea-orm/0.9/sea_orm/entity/prelude/trait.ModelTrait.html#method.find_linked) 方法查找可以填充到蛋糕中的馅料。

```rust
let cake_model = cake::Model {
    id: 12,
    name: "".to_owned(),
};

assert_eq!(
    cake_model
        .find_linked(cake::CakeToFilling)
        .build(DbBackend::MySql)
        .to_string(),
    [
        "SELECT `filling`.`id`, `filling`.`name`, `filling`.`vendor_id`",
        "FROM `filling`",
        "INNER JOIN `cake_filling` AS `r0` ON `r0`.`filling_id` = `filling`.`id`",
        "INNER JOIN `cake` AS `r1` ON `r1`.`id` = `r0`.`cake_id`",
        "WHERE `r1`.`id` = 12",
    ]
    .join(" ")
);
```

### 热情加载

使用 [`find_also_linked`](https://docs.rs/sea-orm/0.9/sea_orm/entity/prelude/struct.Select.html#method.find_also_linked) 方法在一个单一的 SELECT 中找到所有蛋糕和馅料的配对。

```rust
assert_eq!(
    cake::Entity::find()
        .find_also_linked(cake::CakeToFilling)
        .build(DbBackend::MySql)
        .to_string(),
    [
        "SELECT `cake`.`id` AS `A_id`, `cake`.`name` AS `A_name`,",
        "`r1`.`id` AS `B_id`, `r1`.`name` AS `B_name`, `r1`.`vendor_id` AS `B_vendor_id`",
        "FROM `cake`",
        "LEFT JOIN `cake_filling` AS `r0` ON `cake`.`id` = `r0`.`cake_id`",
        "LEFT JOIN `filling` AS `r1` ON `r0`.`filling_id` = `r1`.`id`",
    ]
    .join(" ")
);
```