# 查询

一旦定义了实体，你就可以从数据库中检索数据了。数据库中的每一行数据都对应一个 `Model`。

默认情况下，SeaORM 将选择在 `Column` 枚举中定义的所有列。

## 根据主键查找

通过其主键（可以是单个键或复合键）来查找模型。我们首先调用 `Entity` 上的 [`find_by_id`](https://docs.rs/sea-orm/*/sea_orm/entity/trait.EntityTrait.html#method.find_by_id)，它会帮助你自动构建查询和条件。然后，使用 `one` 方法从数据库中获取单一模型。

```rust
use super::cake::Entity as Cake;
use super::cake_filling::Entity as CakeFilling;

// 通过主键查找
let 芝士: Option<cake::Model> = Cake::find_by_id(1).one(db).await?;

// 通过复合主键查找
let 香草: Option<cake_filling::Model> = CakeFilling::find_by_id((6, 8)).one(db).await?;
```

## 带有条件和排序的查找

除了通过主键检索模型外，你还可以根据特定条件按一定顺序检索一个或多个匹配的模型。`find` 方法让你可以访问 SeaORM 中的查询生成器。它支持构造所有常见的选择表达式，如 `where` 和 `order by`。它们分别可以通过 `filter` 和 `order_by_*` 方法构造。

> 更多关于 [条件表达式](08-advanced-query/02-conditional-expression.md) 的信息。

```rust
let 巧克力: Vec<cake::Model> = Cake::find()
    .filter(cake::Column::Name.contains("巧克力"))
    .order_by_asc(cake::Column::Name)
    .all(db)
    .await?;
```

## 查找相关模型

> 更多关于 [关系](06-relation/01-one-to-one.md) 章节的信息。

### 懒加载

使用 `find_related` 方法。

当你请求它们时，相关模型将按需加载，如果你想要基于某些应用程序逻辑加载相关模型，这是首选的。需要注意的是，与急加载相比，懒加载会增加数据库往返次数。

```rust
// 首先查找一个蛋糕模型
let 芝士: Option<cake::Model> = Cake::find_by_id(1).one(db).await?;
let 芝士: cake::Model = 芝士.unwrap();

// 然后，查找与此蛋糕相关的所有水果
let 水果: Vec<fruit::Model> = 芝士.find_related(Fruit).all(db).await?;
```

### 急加载

一次性加载所有相关模型。这与懒加载相比提供了最少的数据库往返次数。

#### 一对一

使用 `find_also_related` 方法。

```rust
let 水果和蛋糕: Vec<(fruit::Model, Option<cake::Model>)> = Fruit::find().find_also_related(Cake).all(db).await?;
```

#### 一对多 / 多对多

使用 `find_with_related` 方法，相关模型将根据父模型进行分组。此方法处理 1-N 和 M-N 的情况，并且在涉及联接表的情况下将执行两次联接。

```rust
let 蛋糕带水果: Vec<(cake::Model, Vec<fruit::Model>)> = Cake::find()
    .find_with_related(Fruit)
    .all(db)
    .await?;
```

### 批量加载

自 0.11 版本起，我们引入了一个 [LoaderTrait](https://docs.rs/sea-orm/*/sea_orm/query/trait.LoaderTrait.html) 来批量加载相关实体。

与急加载相比，它节省了带宽（考虑一对多的情况，一方的行可能会重复），但代价是多了一次（或两次，在多对多的情况下）数据库往返。

#### 一对一

使用 `load_one` 方法。

```rust
let 水果: Vec<fruit::Model> = Fruit::find().all(db).await?;
let 蛋糕: Vec<Option<cake::Model>> = 水果.load_one(Cake, db).await?;
```

#### 一对多

使用 `load_many` 方法。

```rust
let 蛋糕: Vec<cake::Model> = Cake::find().all(db).await?;
let 水果: Vec<Vec<fruit::Model>> = 蛋糕.load_many(Fruit, db).await?;
```

#### 多对多

使用 `load_many_to_many` 方法。你必须提供联接实体。

```rust
let 蛋糕: Vec<cake::Model> = Cake::find().all(db).await?;
let 馅料: Vec<Vec<filling::Model>> = 蛋糕.load_many_to_many(Filling, CakeFilling, db).await?;
```

## 分页结果

将任何 SeaORM 查询转换为具有自定义页面大小的 [分页器](https://docs.rs/sea-orm/*/sea_orm/struct.Paginator.html)。

```rust
use sea_orm::{entity::*, query::*, tests_cfg::cake};
let mut 蛋糕分页 = cake::Entity::find()
    .order_by_asc(cake::Column::Id)
    .paginate(db, 50);
 
while let Some(蛋糕) = 蛋糕分页.fetch_and_next().await? {
    // 对蛋糕: Vec<cake::Model> 执行操作
}
```

## 游标分页

如果你想根据列（如主键）对行进行分页，请使用游标分页。

```rust
use sea_orm::{entity::*, query::*, tests_cfg::cake};
// 创建一个按 `蛋糕`.`id` 排序的游标
let mut 游标 = cake::Entity::find().cursor_by(cake::Column::Id);

// 过滤分页结果：`蛋糕`.`id` > 1 并且 `蛋糕`.`id` < 100
游标.after(1).before(100);

// 获取前 10 行（按 `蛋糕`.`id` 升序排列）
for 蛋糕 in 游标.first(10).all(db).await? {
    // 对蛋糕: cake::Model 执行操作
}

// 获取最后 10 行（按 `蛋糕`.`id` 降序排列，但返回的行是升序排列）
for 蛋糕 in 游标.last(10).all(db).await? {
    // 对蛋糕: cake::Model 执行操作
}
```

也可以根据复合主键对行进行分页。

```rust
use sea_orm::{entity::*, query::*, tests_cfg::cake_filling};
let 行 = cake_filling::Entity::find()
    .cursor_by((cake_filling::Column::CakeId, cake_filling::Column::FillingId))
    .after((0, 1))
    .before((10, 11))
    .first(3)
    .all(&db)
    .await?,
```

## 自定义查询

如果你想选择自定义列和表达式，请阅读 [自定义查询](08-advanced-query/01-custom-select.md) 部分。