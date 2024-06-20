# 自定义活动模型

创建你自己的结构体，它包含了模型的部分字段，并实现了`IntoActiveModel`，该结构体可以通过`into_active_model`方法转换为一个`ActiveModel`。例如，它可以用于REST API中的表单提交。

`IntoActiveValue`特质允许将`Option<T>`通过`into_active_value`方法转换为`ActiveValue<T>`。

```rust
// 如常定义常规模型
#[derive(Clone, Debug, PartialEq, DeriveEntityModel)]
#[sea_orm(table_name = "fruit")]
pub struct Model {
    #[sea_orm(primary_key)]
    pub id: i32,
    pub name: String,
    pub cake_id: Option<i32>,
}
```

创建一个新的结构体，省略一些字段。

```rust
use sea_orm::ActiveValue::NotSet;

#[derive(DeriveIntoActiveModel)]
pub struct NewFruit {
    // 省略id
    pub name: String,
    // 相对于Model中是可选的，在这里它是必需的
    pub cake_id: i32,
}

assert_eq!(
    NewFruit {
        name: "苹果".to_owned(),
        cake_id: 1,
    }
    .into_active_model(),
    fruit::ActiveModel {
        id: NotSet,
        name: Set("苹果".to_owned()),
        cake_id: Set(Some(1)),
    }
);
```

`Option<Option<T>>`允许`Some(None)`更新列为空值。

```rust
use sea_orm::ActiveValue::NotSet;

#[derive(DeriveIntoActiveModel)]
pub struct UpdateFruit {
    pub cake_id: Option<Option<i32>>,
}

assert_eq!(
    UpdateFruit {
        cake_id: Some(Some(1)),
    }
    .into_active_model(),
    fruit::ActiveModel {
        id: NotSet,
        name: NotSet,
        cake_id: Set(Some(1)),
    }
);

assert_eq!(
    UpdateFruit {
        cake_id: Some(None),
    }
    .into_active_model(),
    fruit::ActiveModel {
        id: NotSet,
        name: NotSet,
        cake_id: Set(None),
    }
);

assert_eq!(
    UpdateFruit {
        cake_id: None,
    }
    .into_active_model(),
    fruit::ActiveModel {
        id: NotSet,
        name: NotSet,
        cake_id: NotSet,
    }
);
```