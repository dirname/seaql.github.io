# 创建索引

为了在数据库中创建索引，而不是手动编写[`IndexCreateStatement`](https://docs.rs/sea-query/*/sea_query/index/struct.IndexCreateStatement.html)，你可以使用`Entity`通过[`Schema::create_index_from_entity`](https://docs.rs/sea-orm/0.7/sea_orm/schema/struct.Schema.html#method.create_index_from_entity)派生它。此方法将帮助你根据`Entity`中定义的索引创建数据库索引。

下面我们使用[`Indexes`](https://github.com/SeaQL/sea-orm/blob/master/src/tests_cfg/indexes.rs)实体来演示其生成的SQL语句。你可以使用[`IndexCreateStatement`](https://docs.rs/sea-query/*/sea_query/index/struct.IndexCreateStatement.html)构造相同的语句。

```rust
use sea_orm::{sea_query, tests_cfg::*, Schema};

let builder = db.get_database_backend();
let schema = Schema::new(builder);

let stmts = schema.create_index_from_entity(indexes::Entity);
assert_eq!(stmts.len(), 2); // 断言语句的数量为2

let idx = sea_query::Index::create() // 创建索引
    .name("idx-indexes-index1_attr") // 设置索引名称
    .table(indexes::Entity) // 设置表
    .col(indexes::Column::Index1Attr) // 设置列
    .to_owned();
assert_eq!(builder.build(&stmts[0]), builder.build(&idx)); // 断言第一个语句与构建的索引相同

let idx = sea_query::Index::create() // 创建索引
    .name("idx-indexes-index2_attr") // 设置索引名称
    .table(indexes::Entity) // 设置表
    .col(indexes::Column::Index2Attr) // 设置列
    .to_owned();
assert_eq!(builder.build(&stmts[1]), builder.build(&idx)); // 断言第二个语句与构建的索引相同
```