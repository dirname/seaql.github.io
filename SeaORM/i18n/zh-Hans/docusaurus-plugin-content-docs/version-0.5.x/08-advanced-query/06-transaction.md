# 事务

事务是一组带有ACID保证执行的SQL语句。有两种事务API。

## 在一个 `Closure` 内

如果闭包返回 `Ok`，则会提交事务；如果返回 `Err`，则会回滚事务。第二个和第三个类型参数分别是 Ok 和 Err 类型。

```rust
// <Fn, A, B> -> Result<A, B>
db.transaction::<_, (), DbErr>(|txn| {
    Box::pin(async move {
        bakery::ActiveModel {
            name: Set("SeaSide Bakery".to_owned()),
            profit_margin: Set(10.4),
            ..Default::default()
        }
        .save(txn)
        .await?;

        bakery::ActiveModel {
            name: Set("Top Bakery".to_owned()),
            profit_margin: Set(15.0),
            ..Default::default()
        }
        .save(txn)
        .await?;

        Ok(())
    })
})
.await;
```

对于大多数情况，这是首选的方式。然而，如果你在尝试在异步块中捕获引用时遇到了 *不可能的生命周期*，那么以下API就是解决方案。

## `begin` & `commit` / `rollback`

使用 `begin` 开始事务，然后跟上 `commit` 或 `rollback`。如果 `txn` 超出了作用域，事务将自动回滚。

```rust
let txn = db.begin().await?;

bakery::ActiveModel {
    name: Set("SeaSide Bakery".to_owned()),
    profit_margin: Set(10.4),
    ..Default::default()
}
.save(&txn)
.await?;

bakery::ActiveModel {
    name: Set("Top Bakery".to_owned()),
    profit_margin: Set(15.0),
    ..Default::default()
}
.save(&txn)
.await?;

txn.commit().await?;
```