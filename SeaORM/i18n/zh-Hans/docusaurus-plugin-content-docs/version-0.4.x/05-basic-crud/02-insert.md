# 插入

在深入探讨SeaORM的插入功能之前，我们先来介绍`ActiveValue`和`ActiveModel`。

## ActiveValue

这是一个包装结构，用于捕捉对`ActiveModel`属性所做的更改。

```rust
// 设置值
let _: ActiveValue<i32> = Set(10);

// 不设置值
let _: ActiveValue<i32> = Unset(None);
```

## Model与ActiveModel

一个`ActiveModel`包含了`Model`的所有属性，但这些属性都被封装在`ActiveValue`中。

你可以使用`ActiveModel`通过设置一部分列来插入一行。

```rust
let cheese: Option<cake::Model> = Cake::find_by_id(1).one(db).await?;

// 获取Model
let model: cake::Model = cheese.unwrap();
assert_eq!(model.name, "Cheese Cake".to_owned());

// 转换为ActiveModel
let active_model: cake::ActiveModel = model.into();
assert_eq!(active_model.name, ActiveValue::unchanged("Cheese Cake".to_owned()));
```

## 插入单个

插入一个活动模型并返回一个新的`ActiveModel`。其值从数据库中检索，因此任何自动生成的字段都会被填充。

```rust
let pear = fruit::ActiveModel {
    name: Set("Pear".to_owned()),
    ..Default::default() // 所有其他属性都是`Unset`
};

let res: fruit::ActiveModel = pear.insert(db).await?;
```

插入一个活动模型并返回最后插入ID。其类型与模型的主键类型匹配，所以如果模型具有复合主键，它可能是一个元组。

```rust
let pear = fruit::ActiveModel {
    name: Set("Pear".to_owned()),
    ..Default::default() // 所有其他属性都是`Unset`
};

let res: InsertResult = fruit::Entity::insert(pear).exec(db).await?;
assert_eq!(res.last_insert_id, 28)
```

## 插入多个

插入多个活动模型并返回最后插入ID。

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