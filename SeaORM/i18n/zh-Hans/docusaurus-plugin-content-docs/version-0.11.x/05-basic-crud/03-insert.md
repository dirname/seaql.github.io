# 插入

在深入探讨SeaORM的插入功能之前，我们先来介绍`ActiveValue`和`ActiveModel`。

## ActiveValue

一个包装结构，用于捕捉对`ActiveModel`属性所做的更改。

```rust
use sea_orm::ActiveValue::{Set, NotSet, Unchanged};

// 设置值
let _: ActiveValue<i32> = Set(10);

// 未设置值
let _: ActiveValue<i32> = NotSet;

// 一个“未改变”的值
let v: ActiveValue<i32> = Unchanged(10);

// 将“未改变”的活动值转换为“设置”
assert!(v.reset(), Set(10));
```

## 模型与ActiveModel

`ActiveModel`包含了`Model`的所有属性，并将它们包裹在`ActiveValue`中。

您可以使用`ActiveModel`通过设置部分列来插入一行。

```rust
let cheese: Option<cake::Model> = Cake::find_by_id(1).one(db).await?;

// 获取Model
let model: cake::Model = cheese.unwrap();
assert_eq!(model.name, "Cheese Cake".to_owned());

// 转换为ActiveModel
let active_model: cake::ActiveModel = model.into();
assert_eq!(active_model.name, ActiveValue::unchanged("Cheese Cake".to_owned()));
```

### 从JSON值设置ActiveModel

如果您想将用户输入保存到数据库中，您可以轻松地将JSON值转换为`ActiveModel`。请注意，您可能希望[跳过反序列化](https://serde.rs/attr-skip-serializing.html)JSON的主键属性，如下面所示，您可以配置这一点。

```rust
#[derive(Clone, Debug, PartialEq, Eq, DeriveEntityModel, Serialize, Deserialize)]
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

// 注意该方法不会改变ActiveModel中的主键值
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

您可以使用[`is_changed`](https://docs.rs/sea-orm/*/sea_orm/entity/prelude/trait.ActiveModelTrait.html#method.is_changed)方法检查`ActiveModel`中的任何字段是否被“设置”。

```rust
let mut fruit: fruit::ActiveModel = Default::default();
assert!(!fruit.is_changed());

fruit.set(fruit::Column::Name, "apple".into());
assert!(fruit.is_changed());
```

### 将ActiveModel转换回Model

使用[try_into_model](https://docs.rs/sea-orm/*/sea_orm/entity/trait.TryIntoModel.html#tymethod.try_into_model)方法，您可以将ActiveModel转换回Model。

```rust
assert_eq!(
    ActiveModel {
        id: Set(2),
        name: Set("Apple".to_owned()),
        cake_id: Set(Some(1)),
    }
    .try_into_model()
    .unwrap(),
    Model {
        id: 2,
        name: "Apple".to_owned(),
        cake_id: Some(1),
    }
);

assert_eq!(
    ActiveModel {
        id: Set(1),
        name: NotSet,
        cake_id: Set(None),
    }
    .try_into_model(),
    Err(DbErr::AttrNotSet(String::from("name")))
);
```

## 插入单个

插入一个活动模型并返回一个新的`Model`。其值从数据库检索，因此任何自动生成的字段都将被填充。

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

let res: InsertResult = Fruit::insert_many([apple, orange]).exec(db).await?;
assert_eq!(res.last_insert_id, 30)
```

## 冲突处理

带有冲突处理行为插入活动模型。

```rust
let orange = cake::ActiveModel {
    id: ActiveValue::set(2),
    name: ActiveValue::set("Orange".to_owned()),
};

assert_eq!(
    cake::Entity::insert(orange.clone())
        .on_conflict(
            // 冲突时不做任何操作
            sea_query::OnConflict::column(cake::Column::Name)
                .do_nothing()
                .to_owned()
        )
        .build(DbBackend::Postgres)
        .to_string(),
    r#"INSERT INTO "cake" ("id", "name") VALUES (2, 'Orange') ON CONFLICT ("name") DO NOTHING"#,
);

assert_eq!(
    cake::Entity::insert(orange)
        .on_conflict(
            // 冲突时进行更新
            sea_query::OnConflict::column(cake::Column::Name)
                .update_column(cake::Column::Name)
                .to_owned()
        )
        .build(DbBackend::Postgres)
        .to_string(),
    r#"INSERT INTO "cake" ("id", "name") VALUES (2, 'Orange') ON CONFLICT ("name") DO UPDATE SET "name" = "excluded"."name""#,
);
```

在没有插入或更新行的情况下执行upsert语句将导致`DbErr::RecordNotInserted`错误。

```rust
// 当`id`列有冲突值时，不做任何操作
let on_conflict = OnConflict::column(Column::Id).do_nothing().to_owned();

// 向表中插入`1`，`2`，`3`
let res = Entity::insert_many([
    ActiveModel { id: Set(1) },
    ActiveModel { id: Set(2) },
    ActiveModel { id: Set(3) },
])
.on_conflict(on_conflict.clone())
.exec(db)
.await;

assert_eq!(res?.last_insert_id, 3);

// 向表中插入`4`，同时包含之前的3行
let res = Entity::insert_many([
    ActiveModel { id: Set(1) },
    ActiveModel { id: Set(2) },
    ActiveModel { id: Set(3) },
    ActiveModel { id: Set(4) },
])
.on_conflict(on_conflict.clone())
.exec(db)
.await;

assert_eq!(res?.last_insert_id, 4);

// 重复上次插入。由于所有4行已经存在，这实际上什么也没做。
// 将抛出一个`DbErr::RecordNotInserted`错误。
let res = Entity::insert_many([
    ActiveModel { id: Set(1) },
    ActiveModel { id: Set(2) },
    ActiveModel { id: Set(3) },
    ActiveModel { id: Set(4) },
])
.on_conflict(on_conflict)
.exec(db)
.await;

assert_eq!(res.err(), Some(DbErr::RecordNotInserted));
```