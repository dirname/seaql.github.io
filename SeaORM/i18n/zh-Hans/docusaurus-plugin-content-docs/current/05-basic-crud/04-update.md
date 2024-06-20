# 更新

## 更新单个

从查找结果中，你会得到一个 `Model`。如果你想将模型保存回数据库，你需要首先将其转换为一个 `ActiveModel`。生成的查询将只包含 `Set` 属性。

```rust
let pear: Option<fruit::Model> = Fruit::find_by_id(28).one(db).await?;

// 转换为 ActiveModel
let mut pear: fruit::ActiveModel = pear.unwrap().into();

// 更新名称属性
pear.name = Set("Sweet pear".to_owned());

// SQL: `UPDATE "fruit" SET "name" = 'Sweet pear' WHERE "id" = 28`
let pear: fruit::Model = pear.update(db).await?;
```

要更新所有属性，你可以将 `Unchanged` 转换为 `Set`。

```rust
// 转换为 ActiveModel
let mut pear: fruit::ActiveModel = pear.into();

// 更新名称属性
pear.name = Set("Sweet pear".to_owned());

// 将特定属性标记为"脏"(强制更新)
pear.reset(fruit::Column::CakeId);
// 或者，将所有属性标记为"脏"(强制更新)
pear.reset_all();

// SQL: `UPDATE "fruit" SET "name" = 'Sweet pear', "cake_id" = 10 WHERE "id" = 28`
let pear: fruit::Model = pear.update(db).await?;
```

## 更新多个

你也可以在不使用 SeaORM 查询逐个找到每个 `Model` 的情况下，更新数据库中的多行。

```rust
// 批量设置属性使用 ActiveModel
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

### 带返回的更新（仅限 Postgres）

使用 `exec_with_returning` 来返回被修改的模型：

```rust
let fruits: Vec<fruit::Model> = Fruit::update_many()
    .col_expr(fruit::Column::CakeId, Expr::value(1))
    .filter(fruit::Column::Name.contains("Apple"))
    .exec_with_returning(db)
    .await?;
```