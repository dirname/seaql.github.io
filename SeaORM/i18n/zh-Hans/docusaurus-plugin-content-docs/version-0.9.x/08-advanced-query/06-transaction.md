# 事务

事务是一组带有ACID保证执行的SQL语句。有两种事务API。

## 在一个`Closure`中

如果闭包返回`Ok`，则将提交事务；如果返回`Err`，则将回滚事务。第二个和第三个类型参数分别是Ok和Err的类型。

```rust
use sea_orm::TransactionTrait;

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

这在大多数情况下是首选的方式。但是，如果你在尝试在异步块中捕获引用时遇到了*不可能的生命周期*，那么下面的API就是解决方案。

## `begin`与`commit`/`rollback`

使用`begin`开始事务，然后跟着`commit`或`rollback`。如果`txn`超出作用域，事务将自动回滚。

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