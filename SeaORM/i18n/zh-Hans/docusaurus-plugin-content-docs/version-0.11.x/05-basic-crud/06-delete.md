# 删除

## 删除单个

从数据库中查找一个 `Model`，然后从数据库中删除对应的行。

```rust
use sea_orm::entity::ModelTrait;

let orange: Option<fruit::Model> = Fruit::find_by_id(30).one(db).await?;
let orange: fruit::Model = orange.unwrap();

let res: DeleteResult = orange.delete(db).await?;
assert_eq!(res.rows_affected, 1);
```

## 通过主键删除

无需先从数据库中选择 `Model` 然后删除它。您也可以直接通过其主键从数据库中删除一行。

```rust
let res: DeleteResult = Fruit::delete_by_id(38).exec(db).await?;
assert_eq!(res.rows_affected, 1);
```

## 批量删除

您还可以使用 SeaORM 查询，而不必查找每个 `Model` 来从数据库中删除多行。

```rust
// DELETE FROM `fruit` WHERE `fruit`.`name` LIKE '%Orange%'
let res: DeleteResult = fruit::Entity::delete_many()
    .filter(fruit::Column::Name.contains("Orange"))
    .exec(db)
    .await?;

assert_eq!(res.rows_affected, 2);
```