# 保存

这是一个辅助方法，用于将`ActiveModel`保存（插入/更新）到数据库中。

## 保存行为

在保存`ActiveModel`时，它会根据主键属性执行插入或更新：

- 如果主键是`Unset`，则进行插入
- 如果主键是`Set`或`Unchanged`，则进行更新

## 使用

调用`save`来插入或更新一个`ActiveModel`。

```rust
let 香蕉 = fruit::ActiveModel {
    id: Unset(None), // 明确地将主键设置为未设置
    name: Set("香蕉".to_owned()),
    ..Default::default() // 所有其他属性都是`Unset`
};

// 插入，因为主键`id`是`Unset`
let mut 香蕉 = 香蕉.save(db).await?;

香蕉.name = Set("芒果香蕉".to_owned());

// 更新，因为主键`id`是`Set`
let 香蕉 = 香蕉.save(db).await?;
```