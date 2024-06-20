# 插入

在深入探讨SeaORM的插入功能之前，我们先来介绍`ActiveValue`和`ActiveModel`。

## ActiveValue

这是一个包装结构，用于捕捉对`ActiveModel`属性所做的更改。

```rust
use sea_orm::ActiveValue::NotSet;

// 设置值
let _: ActiveValue<i32> = Set(10);

// 未设置值
let _: ActiveValue<i32> = NotSet;
```

## 模型与ActiveModel

`ActiveModel`拥有`Model`的所有属性，并且这些属性都被封装在`ActiveValue`中。

您可以使用`ActiveModel`通过仅设置部分列来插入一行。

```rust
let cheese: Option<cake::Model> = Cake::find_by_id(1).one(db).await?;

// 获取模型
let model: cake::Model = cheese.unwrap();
assert_eq!(model.name, "Cheese Cake".to_owned());

// 转换为ActiveModel
let active_model: cake::ActiveModel = model.into();
assert_eq!(active_model.name, ActiveValue::unchanged("Cheese Cake".to_owned()));
```

## 插入单行

插入一个活动模型并返回一个新的`Model`。它的值是从数据库中检索的，因此任何自动生成的字段都将被填充。

```rust
let pear = fruit::ActiveModel {
    name: Set("Pear".to_owned()),
    ..Default::default() // 所有其他属性都是`NotSet`
};

let pear: fruit::Model = pear.insert(db).await?;
```

插入一个活动模型并返回最后插入ID。其类型与模型的主键类型匹配，因此如果模型具有复合主键，则它可以是一个元组。

```rust
let pear = fruit::ActiveModel {
    name: Set("Pear".to_owned()),
    ..Default::default() // 所有其他属性都是`NotSet`
};

let res: InsertResult = fruit::Entity::insert(pear).exec(db).await?;
assert_eq!(res.last_insert_id, 28)
```

## 批量插入

批量插入多个活动模型并返回最后插入ID。

```rust
let apple = fruit::ActiveModel {
    name: Set("Apple".to_owned()),
    ..Default::default()
};

let orange = fruit::ActiveModel {
    name: Set("Orange".to_owned()),
    ..Default::default()
};

let res: InsertResult = Fruit::insert_many(vec![apple, orange]).exec(db).await?;
assert_eq!(res.last_insert_id, 30)
```