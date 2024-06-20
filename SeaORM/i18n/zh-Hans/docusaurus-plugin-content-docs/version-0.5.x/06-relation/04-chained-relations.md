# 链式关系

如果你有两个实体之间有多个连接路径，或者有通过多个实体链接的复杂连接，你可以使用[`Linked`](https://docs.rs/sea-orm/0.5/sea_orm/entity/trait.Linked.html)来定义它。以[这个](https://github.com/SeaQL/sea-orm/blob/master/src/tests_cfg/cake.rs)简单的例子为例，我们通过一个中间的`cake_filling`表将蛋糕和填充物连接起来。

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

或者，`RelationDef`可以在运行时定义，以下面的代码等价于上面的例子：

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

### 延迟加载

使用[`find_linked`](https://docs.rs/sea-orm/0.5/sea_orm/entity/prelude/trait.ModelTrait.html#method.find_linked)方法找到可以填充到蛋糕中的填充物。

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
        r#"SELECT `filling`.`id`, `filling`.`name`"#,
        r#"FROM `filling`"#,
        r#"INNER JOIN `cake_filling` ON `cake_filling`.`filling_id` = `filling`.`id`"#,
        r#"INNER JOIN `cake` ON `cake`.`id` = `cake_filling`.`cake_id`"#,
        r#"WHERE `cake`.`id` = 12"#
    ]
    .join(" ")
);
```

### 立即加载

使用[`find_also_linked`](https://docs.rs/sea-orm/0.5/sea_orm/entity/prelude/struct.Select.html#method.find_also_linked)方法在单一的选择中找到所有蛋糕和填充物的组合。

```rust
assert_eq!(
    cake::Entity::find()
        .find_also_linked(cake::CakeToFilling)
        .build(DbBackend::MySql)
        .to_string(),
    [
        "SELECT `cake`.`id` AS `A_id`, `cake`.`name` AS `A_name`,",
        "`filling`.`id` AS `B_id`, `filling`.`name` AS `B_name`",
        "FROM `cake`",
        "LEFT JOIN `cake_filling` ON `cake`.`id` = `cake_filling`.`cake_id`",
        "LEFT JOIN `filling` ON `cake_filling`.`filling_id` = `filling`.`id`",
    ]
    .join(" ")
);
```