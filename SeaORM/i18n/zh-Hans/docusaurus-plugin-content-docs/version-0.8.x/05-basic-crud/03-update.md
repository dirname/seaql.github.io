# 更新

## 更新单个

从查找结果中，你会得到一个 `Model`。如果你想将模型保存回数据库，你需要首先将其转换为一个 `ActiveModel`。生成的查询将只包含 `Set` 属性。

```rust
let pear: Option<fruit::Model> = Fruit::find_by_id(28).one(db).await?;

// 转换为 ActiveModel
let mut pear: fruit::ActiveModel = pear.unwrap().into();

// 更新名称属性
pear.name = Set("甜梨".to_owned());

// 使用主键值在数据库中更新对应的行
let pear: fruit::Model = pear.update(db).await?;
```

## 批量更新

你也可以不通过 SeaORM 查询来逐个找到每个 `Model`，而是在数据库中更新多行。

```rust
// 使用 ActiveModel 批量设置属性
let update_result: UpdateResult = Fruit::update_many()
    .set(pear)
    .filter(fruit::Column::Id.eq(1))
    .exec(db)
    .await?;

// 更新 `fruit` 表中的 `cake_id` 为 1，其中 `fruit`.`name` 包含 'Apple'
Fruit::update_many()
    .col_expr(fruit::Column::CakeId, Expr::value(1))
    .filter(fruit::Column::Name.contains("Apple"))
    .exec(db)
    .await?;
```