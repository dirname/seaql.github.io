# 插入

在深入探讨SeaORM的插入功能之前，我们先来介绍`ActiveValue`和`ActiveModel`。

## ActiveValue

一个包装结构体，用于捕获对`ActiveModel`属性所做的更改。

```rust
use sea_orm::ActiveValue::NotSet;

// 设置值
let _: ActiveValue<i32> = Set(10);

// 未设置值
let _: ActiveValue<i32> = NotSet;
```

## 模型与 ActiveModel

一个`ActiveModel`包含了所有`Model`的属性，并且这些属性都被包裹在`ActiveValue`中。

您可以使用`ActiveModel`来仅用一部分列设置插入一行。

```rust
let cheese: Option<cake::Model> = Cake::find_by_id(1).one(db).await?;

// 获取 Model
let model: cake::Model = cheese.unwrap();
assert_eq!(model.name, "Cheese Cake".to_owned());

// 转换为 ActiveModel
let active_model: cake::ActiveModel = model.into();
assert_eq!(active_model.name, ActiveValue::unchanged("Cheese Cake".to_owned()));
```

### 从JSON值设置ActiveModel

如果您想将用户输入保存到数据库中，可以轻松地将JSON值转换为`ActiveModel`。请注意，您可能想要[跳过反序列化](https://serde.rs/attr-skip-serializing.html)JSON的主键属性，您可以按照下面所示进行配置。

```rust
#[derive(Clone, Debug, PartialEq, DeriveEntityModel, Serialize, Deserialize)]
#[sea_orm(table_name = "fruit")]
pub struct Model {
    #[sea_orm(primary_key)]
    #[serde(skip_deserializing)] // 跳过反序列化
    pub id: i32,
    pub name: String,
    pub cake_id: Option<i32>,
}
```

使用`set_from_json`方法设置`ActiveModel`中的属性。

```rust
// 一个带有主键设置的 ActiveModel
let mut fruit = fruit::ActiveModel {
    id: ActiveValue::Set(1),
    name: ActiveValue::NotSet,
    cake_id: ActiveValue::NotSet,
};

// 注意此方法不会改变ActiveModel中的主键值
fruit.set_from_json(json!({
    "id": 8,
    "name": "Apple",
    "cake_id": 1,
}))?;

assert_eq!(
    fruit,
    fruit::ActiveModel {
        id: ActiveValue::Set(1),
        name: ActiveValue::Set("Apple".to_owned()),
        cake_id: ActiveValue::Set(Some(1)),
    }
);
```

使用`from_json`方法从JSON值创建一个新的`ActiveModel`。

```rust
let fruit = fruit::ActiveModel::from_json(json!({
    "name": "Apple",
}))?;

assert_eq!(
    fruit,
    fruit::ActiveModel {
        id: ActiveValue::NotSet,
        name: ActiveValue::Set("Apple".to_owned()),
        cake_id: ActiveValue::NotSet,
    }
);
```

### 检查ActiveModel是否已更改

您可以使用[`is_changed`](https://docs.rs/sea-orm/0.8/sea_orm/entity/prelude/trait.ActiveModelTrait.html#method.is_changed)方法检查`ActiveModel`中的任何字段是否为`Set`。

```rust
let mut fruit: fruit::ActiveModel = Default::default();
assert!(!fruit.is_changed());

fruit.set(fruit::Column::Name, "apple".into());
assert!(fruit.is_changed());
```

## 单个插入

插入一个活动模型并返回一个全新的`Model`。其值从数据库中检索，因此任何自动生成的字段都将被填充。

```rust
let pear = fruit::ActiveModel {
    name: Set("Pear".to_owned()),
    ..Default::default() // 所有其他属性都是 `NotSet`
};

let pear: fruit::Model = pear.insert(db).await?;
```

插入一个活动模型并返回最后插入的ID。它的类型与模型的主键类型相匹配，所以如果模型具有复合主键，则它可以是一个元组。

```rust
let pear = fruit::ActiveModel {
    name: Set("Pear".to_owned()),
    ..Default::default() // 所有其他属性都是 `NotSet`
};

let res: InsertResult = fruit::Entity::insert(pear).exec(db).await?;
assert_eq!(res.last_insert_id, 28)
```

## 多个插入

插入多个活动模型并返回最后插入的ID。

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