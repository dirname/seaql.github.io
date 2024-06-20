# 查询

一旦定义了实体，你就可以从数据库中检索数据。数据库中的每一行数据对应一个 `Model`。

默认情况下，SeaORM 将选择在 `Column` 枚举中定义的所有列。

## 通过主键查找

通过其主键查找模型，它可以是单一键或复合键。我们从调用 `Entity` 上的 [`find_by_id`](https://docs.rs/sea-orm/0.7/sea_orm/entity/trait.EntityTrait.html#method.find_by_id) 开始，这有助于你自动构建查询和条件。然后，使用 `one` 方法从数据库中获取单个模型。

```rust
use super::cake::Entity as Cake;
use super::cake_filling::Entity as CakeFilling;

// 通过主键查找
let cheese: Option<cake::Model> = Cake::find_by_id(1).one(db).await?;

// 通过复合主键查找
let vanilla: Option<cake_filling::Model> = CakeFilling::find_by_id((6, 8)).one(db).await?;
```

## 按条件和顺序查找

除了通过主键检索模型外，你还可以根据特定条件以特定顺序检索一个或多个匹配的模型。`find` 方法让你可以访问 SeaORM 中的查询生成器。它支持构建所有常见的选择表达式，如 `where` 和 `order by`。它们可以通过 [`filter`](https://docs.rs/sea-orm/0.7/sea_orm/entity/prelude/trait.QueryFilter.html#method.filter) 和 [`order_by_*`](https://docs.rs/sea-orm/0.7/sea_orm/query/trait.QueryOrder.html#method.order_by) 方法分别构造。

> 阅读更多关于 [条件表达式](09-advanced-query/02-conditional-expression.md) 的内容。

```rust
let chocolate: Vec<cake::Model> = Cake::find()
    .filter(cake::Column::Name.contains("chocolate"))
    .order_by_asc(cake::Column::Name)
    .all(db)
    .await?;
```

## 查找相关模型

> 阅读更多关于 [表连接](09-advanced-query/04-custom-joins.md) 的内容。

### 延迟加载

使用 `find_related` 方法。

当你请求相关模型时，相关模型按需加载，如果你希望基于某些应用程序逻辑加载相关模型，则更可取。请注意，与急加载相比，延迟加载会增加数据库往返次数。

```rust
// 首先查找一个蛋糕模型
let cheese: Option<cake::Model> = Cake::find_by_id(1).one(db).await?;
let cheese: cake::Model = cheese.unwrap();

// 然后，查找此蛋糕的所有相关水果
let fruits: Vec<fruit::Model> = cheese.find_related(Fruit).all(db).await?;
```

### 急加载

所有相关模型一次性加载。这相比延迟加载在数据库往返次数上提供了最小的开销。

#### 一对一

使用 `find_also_related` 方法。

```rust
let cake_and_fruit: Vec<(cake::Model, Option<fruit::Model>)> = Cake::find().find_also_related(Fruit).all(db).await?;
```

#### 一对多

使用 `find_with_related` 方法，相关模型将按父模型进行分组。

```rust
let cake_with_fruits: Vec<(cake::Model, Vec<fruit::Model>)> = Cake::find()
    .find_with_related(Fruit)
    .all(db)
    .await?;
```

## 分页结果

使用自定义页面大小将任何 SeaORM 查询转换为 [分页器](https://docs.rs/sea-orm/0.7/sea_orm/struct.Paginator.html)。

```rust
use sea_orm::{entity::*, query::*, tests_cfg::cake};
let mut cake_pages = cake::Entity::find()
    .order_by_asc(cake::Column::Id)
    .paginate(db, 50);
 
while let Some(cakes) = cake_pages.fetch_and_next().await? {
    // 在 cakes: Vec<cake::Model> 上执行操作
}
```

## 自定义查询

如果你想选择自定义列和表达式，请阅读 [自定义查询](09-advanced-query/01-custom-select.md) 部分。