# 删除

## 删除一个

从数据库中查找一个 `Model`，然后从数据库中删除对应的行。

```rust
let 橙子: Option<fruit::Model> = Fruit::find_by_id(30).one(db).await?;
let 橙子: fruit::Model = 橙子.unwrap();

let 结果: DeleteResult = 橙子.delete(db).await?;
assert_eq!(结果.rows_affected, 1);
```

## 通过主键删除

无需先从数据库中选择 `Model` 然后删除它。你也可以直接通过其主键从数据库中删除一行。

```rust
let 结果: DeleteResult = Fruit::delete_by_id(38).exec(db).await?;
assert_eq!(结果.rows_affected, 1);
```

## 删除多个

你还可以在不使用 SeaORM 查询逐个查找每个 `Model` 的情况下，从数据库中删除多行。

```rust
// DELETE FROM `fruit` WHERE `fruit`.`name` LIKE '%Orange%'
let 结果: DeleteResult = fruit::Entity::delete_many()
    .filter(fruit::Column::Name.contains("Orange"))
    .exec(db)
    .await?;

assert_eq!(结果.rows_affected, 2);
```