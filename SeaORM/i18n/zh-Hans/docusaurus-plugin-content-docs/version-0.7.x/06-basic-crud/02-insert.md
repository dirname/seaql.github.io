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

### 从JSON值设置ActiveModel

如果您想将用户输入保存到数据库中，可以轻松地将JSON值转换为`ActiveModel`。请注意，您可能希望[跳过反序列化](https://serde.rs/attr-skip-serializing.html)JSON的主要键属性，如下面所示，您可以配置这一点。

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
// 一个具有主键设置的ActiveModel
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

## 单个插入

插入一个活动模型并返回一个全新的`Model`。其值是从数据库中检索的，因此任何自动生成的字段都将被填充。

```rust
let pear = fruit::ActiveModel {
    name: Set("Pear".to_owned()),
    ..Default::default() // 其他所有属性都是`NotSet`
};

let pear: fruit::Model = pear.insert(db).await?;
```

插入一个活动模型并返回最后插入的ID。它的类型与模型的主键类型匹配，因此如果模型有复合主键，则可能是一个元组。

```rust
let pear = fruit::ActiveModel {
    name: Set("Pear".to_owned()),
    ..Default::default() // 其他所有属性都是`NotSet`
};

let res: InsertResult = fruit::Entity::insert(pear).exec(db).await?;
assert_eq!(res.last_insert_id, 28)
```

## 批量插入

批量插入多个活动模型并返回最后插入的ID。

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