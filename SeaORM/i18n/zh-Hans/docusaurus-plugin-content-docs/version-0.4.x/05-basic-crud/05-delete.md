# 删除

## 删除单个

从数据库中查找一个 `Model`，然后将其转换为 `ActiveModel`，最后从数据库中删除对应的行。

```rust
let orange: Option<fruit::Model> = Fruit::find_by_id(30).one(db).await?;
let orange: fruit::ActiveModel = orange.unwrap().into();

let res: DeleteResult = orange.delete(db).await?;
assert_eq!(res.rows_affected , 1);
```

## 删除多个

你也可以在不使用 SeaORM 查询逐个查找每个 `Model` 的情况下，从数据库中删除多行。

```rust
// DELETE FROM `fruit` WHERE `fruit`.`name` LIKE '%Orange%'
let res: DeleteResult = fruit::Entity::delete_many()
    .filter(fruit::Column::Name.contains("Orange"))
    .exec(db)
    .await?;

assert_eq!(res.rows_affected , 2);
```