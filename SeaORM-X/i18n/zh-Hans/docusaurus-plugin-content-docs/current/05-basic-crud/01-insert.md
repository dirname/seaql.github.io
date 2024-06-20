# 插入

## 带特定主键值的插入

使用特定的主键值插入一个活动模型。对于MSSQL，SeaORM X在插入带有主键值的行时会自动启用`IDENTITY INSERT`，并在插入完成后禁用`IDENTITY INSERT`。

```rust
let pear = fruit::ActiveModel {
    id: Set(1),
    name: Set("Pear".to_owned()),
    cake_id: NotSet,
};

// 实际上执行`IDENTITY INSERT`
let pear: fruit::Model = pear.insert(db).await?;
```