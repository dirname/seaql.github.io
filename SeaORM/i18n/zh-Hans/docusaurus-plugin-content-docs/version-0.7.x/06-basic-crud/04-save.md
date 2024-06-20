# 保存

这是一个辅助方法，用于将`ActiveModel`保存（插入/更新）到数据库中。

## 保存行为

在保存一个`ActiveModel`时，它会根据主键属性执行插入或更新操作：

- 如果主键是`NotSet`，则进行插入
- 如果主键是`Set`或`Unchanged`，则进行更新

## 使用

调用`save`来插入或更新一个`ActiveModel`。

```rust
use sea_orm::ActiveValue::NotSet;

let 香蕉 = fruit::ActiveModel {
    id: NotSet, // 主键是 NotSet
    name: Set("香蕉".to_owned()),
    ..Default::default() // 所有其他属性都是 `NotSet`
};

// 插入，因为主键 `id` 是 `NotSet`
let 香蕉: fruit::ActiveModel = 香蕉.save(db).await?;

香蕉.name = Set("芒果香蕉".to_owned());

// 更新，因为主键 `id` 是 `Unchanged`
let 香蕉: fruit::ActiveModel = 香蕉.save(db).await?;
```