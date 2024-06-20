# 事务

事务是一组带有ACID保证执行的SQL语句。有两种事务API。

## 使用闭包

使用[带有闭包的事务](https://docs.rs/sea-orm/*/sea_orm/trait.TransactionTrait.html#tymethod.transaction)。如果闭包返回`Ok`，则提交事务；如果返回`Err`，则回滚事务。第二个和第三个类型参数分别是Ok和Err的类型。由于`async_closure`尚未稳定化，您需要将其`Pin<Box<_>>`。

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

这是大多数情况下的首选方法。但是，如果您在尝试在异步块中捕获引用时遇到*不可能的生命周期*，那么以下API是解决方案。

## `begin`与`commit` / `rollback`

使用[`begin`](https://docs.rs/sea-orm/*/sea_orm/trait.TransactionTrait.html#tymethod.begin)开始事务，然后是`commit`或`rollback`。如果`txn`超出作用范围，事务将自动回滚。

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

## 嵌套事务

嵌套事务通过数据库的`SAVEPOINT`实现。下面的例子说明了使用闭包API的行为。

```rust
assert_eq!(Bakery::find().all(txn).await?.len(), 0);

ctx.db.transaction::<_, _, DbErr>(|txn| {
    Box::pin(async move {
        let _ = bakery::ActiveModel {..}.save(txn).await?;
        let _ = bakery::ActiveModel {..}.save(txn).await?;
        assert_eq!(Bakery::find().all(txn).await?.len(), 2);

        // 尝试提交嵌套事务
        txn.transaction::<_, _, DbErr>(|txn| {
            Box::pin(async move {
                let _ = bakery::ActiveModel {..}.save(txn).await?;
                assert_eq!(Bakery::find().all(txn).await?.len(), 3);

                // 尝试回滚嵌套-嵌套事务
                assert!(txn.transaction::<_, _, DbErr>(|txn| {
                        Box::pin(async move {
                            let _ = bakery::ActiveModel {..}.save(txn).await?;
                            assert_eq!(Bakery::find().all(txn).await?.len(), 4);

                            Err(DbErr::Query(RuntimeErr::Internal(
                                "Force Rollback!".to_owned(),
                            )))
                        })
                    })
                    .await
                    .is_err()
                );

                assert_eq!(Bakery::find().all(txn).await?.len(), 3);

                // 尝试提交嵌套-嵌套事务
                txn.transaction::<_, _, DbErr>(|txn| {
                    Box::pin(async move {
                        let _ = bakery::ActiveModel {..}.save(txn).await?;
                        assert_eq!(Bakery::find().all(txn).await?.len(), 4);

                        Ok(())
                    })
                })
                .await;

                assert_eq!(Bakery::find().all(txn).await?.len(), 4);

                Ok(())
            })
        })
        .await;

        Ok(())
    })
})
.await;

assert_eq!(Bakery::find().all(txn).await?.len(), 4);
```

## 隔离级别和访问模式

从`0.10.5`版本引入，[`transaction_with_config`](https://docs.rs/sea-orm/*/sea_orm/trait.TransactionTrait.html#tymethod.transaction_with_config)和[`begin_with_config`](https://docs.rs/sea-orm/*/sea_orm/trait.TransactionTrait.html#tymethod.begin_with_config)允许您指定[IsolationLevel](https://docs.rs/sea-orm/*/sea_orm/enum.IsolationLevel.html)和[AccessMode](https://docs.rs/sea-orm/*/sea_orm/enum.AccessMode.html)。

目前，它们仅针对MySQL和Postgres实现。为了统一其语义差异，MySQL将在开始事务之前执行`SET TRANSACTION`命令，而Postgres将在开始事务之后执行`SET TRANSACTION`命令。

### IsolationLevel

`RepeatableRead`：同一事务内的连续读取读取由第一次读取建立的快照。

`ReadCommitted`：即使在同一事务内，每次连续读取都会设置并读取自己的新鲜快照。

`ReadUncommitted`：SELECT语句以非锁定方式执行，但可能使用行的早期版本。

`Serializable`：当前事务中的所有语句只能看到在此事务中执行第一个查询或数据修改语句之前已提交的行。

### AccessMode

`ReadOnly`：此事务中不能修改数据

`ReadWrite`：此事务中可以修改数据（默认）