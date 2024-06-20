# 流式处理

在任何 `Select` 上使用异步流来减少内存分配，从而提高效率。

```rust
// 流式处理所有水果
let mut stream = Fruit::find().stream(db).await?;

while let Some(item) = stream.try_next().await? {
    let item: fruit::ActiveModel = item.into();
    // 使用 item 进行一些操作
}
```

```rust
// 流式处理所有名称包含字符 "a" 的水果
let mut stream = Fruit::find()
    .filter(fruit::Column::Name.contains("a"))
    .order_by_asc(fruit::Column::Name)
    .stream(db)
    .await?;
```

请注意，流对象将独占连接，直到被丢弃，这会阻止连接被其他地方借用。

```rust
{
    let s1 = Fruit::find().stream(db).await?;
    let s2 = Fruit::find().stream(db).await?;
    let s3 = Fruit::find().stream(db).await?;
    // 持有 3 个连接
}
// 所有流被丢弃，连接返回到连接池
```