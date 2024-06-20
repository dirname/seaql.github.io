# 更新

## 更新单个

从查找结果中，你会得到一个 `Model`。如果你想将模型保存回数据库，你需要首先将其转换为一个 `ActiveModel`。生成的查询将只包含 `Set` 属性。

```rust
let pear: Option<fruit::Model> = Fruit::find_by_id(28).one(db).await?;

// 转换为 ActiveModel
let mut pear: fruit::ActiveModel = pear.unwrap().into();

// 更新名称属性
pear.name = Set("甜梨".to_owned());

// SQL: `UPDATE "fruit" SET "name" = 'Sweet pear' WHERE "id" = 28`
let pear: fruit::Model = pear.update(db).await?;
```

要更新所有属性，你可以将 `Unchanged` 转换为 `Set`。

```rust
// 转换为 ActiveModel
let mut pear: fruit::ActiveModel = pear.into();

// 更新名称属性
pear.name = Set("甜梨".to_owned());

// 将特定属性标记为“脏”（强制更新）
pear.reset(fruit::Column::CakeId);
// 或者，将所有属性标记为“脏”（强制更新）
pear.reset_all();

// SQL: `UPDATE "fruit" SET "name" = 'Sweet pear', "cake_id" = 10 WHERE "id" = 28`
let pear: fruit::Model = pear.update(db).await?;
```

## 批量更新

你也可以在没有使用 SeaORM 查询找到每个 `Model` 的情况下，在数据库中更新多行。

```rust
// 使用 ActiveModel 批量设置属性
let update_result: UpdateResult = Fruit::update_many()
    .set(pear)
    .filter(fruit::Column::Id.eq(1))
    .exec(db)
    .await?;

// UPDATE `fruit` SET `cake_id` = 1 WHERE `fruit`.`name` LIKE '%Apple%'
Fruit::update_many()
    .col_expr(fruit::Column::CakeId, Expr::value(1))
    .filter(fruit::Column::Name.contains("Apple"))
    .exec(db)
    .await?;
```