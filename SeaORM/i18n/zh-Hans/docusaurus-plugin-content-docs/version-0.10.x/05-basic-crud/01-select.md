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

> 更多关于 [表联接](08-advanced-query/04-custom-joins.md) 的信息。

### 懒加载

使用 `find_related` 方法。

当你要根据某些应用程序逻辑加载相关模型时，相关模型会在你需要时按需加载，这是首选的方式。需要注意的是，与急加载相比，懒加载会增加数据库往返次数。

```rust
// 首先找到一个蛋糕模型
let 芝士: Option<cake::Model> = Cake::find_by_id(1).one(db).await?;
let 芝士: cake::Model = 芝士.unwrap();

// 然后，查找与此蛋糕相关的所有水果
let 水果: Vec<fruit::Model> = 芝士.find_related(Fruit).all(db).await?;
```

### 急加载

所有相关模型一次性加载。这相比懒加载提供了最小的数据库往返开销。

#### 一对一

使用 `find_also_related` 方法。

```rust
let 蛋糕和水果: Vec<(cake::Model, Option<fruit::Model>)> = Cake::find().find_also_related(Fruit).all(db).await?;
```

#### 一对多

使用 `find_with_related` 方法，相关模型将按父模型进行分组。

```rust
let 蛋糕带水果: Vec<(cake::Model, Vec<fruit::Model>)> = Cake::find()
    .find_with_related(Fruit)
    .all(db)
    .await?;
```

:::info

自 0.9.0 版本起，`SelectTwoMany::one()` 方法已被移除：

```rust
let 蛋糕带水果: Option<(cake::Model, Option<fruit::Model>)> = Cake::find()
    .find_with_related(Fruit)
    .one(db) // 此方法已被移除
    .await?;
```

`SelectTwoMany` 是用于选择一对多关系的模型，
但 `SelectTwoMany::one()` 返回 `Option<(E, Option<F>)>`
并且返回值是一对模型而不是 `(E, Vec<F>)`
这对于一对多关系来说是一个奇怪的查询结果。

建议用户通过首先从数据库中查询 `E`，
然后使用 `find_related` 方法查询 `Vec<F>` 来查询 `(E, Vec<F>)`。
详情请阅读 [懒加载](#lazy-loading)。

:::

如果你正在构建一个广泛执行嵌套关系选择的 Web API。考虑使用 GraphQL 服务器。[seaography](https://github.com/SeaQL/seaography) 是一个使用 SeaORM 实体构建 GraphQL 解析器的 GraphQL 框架。有了 GraphQL 解析器，上述嵌套关系的选择变得直接且简单。查看 "[开始使用 Seaography](https://www.sea-ql.org/blog/2022-09-27-getting-started-with-seaography/#query-data-via-graphql)" 以了解更多。

## 分页结果

将任何 SeaORM 查询转换为具有自定义页面大小的 [分页器](https://docs.rs/sea-orm/*/sea_orm/struct.Paginator.html)。

```rust
use sea_orm::{entity::*, query::*, tests_cfg::cake};
let mut 蛋糕页面 = cake::Entity::find()
    .order_by_asc(cake::Column::Id)
    .paginate(db, 50);
 
while let Some(蛋糕) = 蛋糕页面.fetch_and_next().await? {
    // 在蛋糕: Vec<cake::Model> 上做点什么
}
```

## 游标分页

如果你想基于列（如主键）对行进行分页，请使用游标分页。

```rust
use sea_orm::{entity::*, query::*, tests_cfg::cake};
// 创建一个按 `蛋糕`.`id` 排序的游标
let mut 游标 = cake::Entity::find().cursor_by(cake::Column::Id);

// 过滤分页结果，使 `蛋糕`.`id` > 1 且 `蛋糕`.`id` < 100
游标.after(1).before(100);

// 获取前 10 行（按 `蛋糕`.`id` 升序）
for 蛋糕 in 游标.first(10).all(db).await? {
    // 在 蛋糕: cake::Model 上做点什么
}

// 获取最后 10 行（按 `蛋糕`.`id` 降序排列，但返回的行是升序）
for 蛋糕 in 游标.last(10).all(db).await? {
    // 在 蛋糕: cake::Model 上做点什么
}
```

基于复合主键对行进行分页也是可行的。

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