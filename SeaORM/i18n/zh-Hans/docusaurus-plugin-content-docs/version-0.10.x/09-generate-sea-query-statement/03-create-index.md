# 创建索引

您可以使用实体从`Schema::create_index_from_entity`创建索引，或者手动构建`IndexCreateStatement`。

示例`Indexes`实体：

```rust title="indexes.rs"
impl ColumnTrait for Column {
    type EntityName = Entity;

    fn def(&self) -> ColumnDef {
        match self {
            Self::Index1Attr => ColumnType::Integer.def().indexed(),
            Self::Index2Attr => ColumnType::Integer.def().indexed().unique(),
        }
    }
}
```

```rust
use sea_orm::{sea_query, tests_cfg::*, Schema};

let builder = db.get_database_backend();
let schema = Schema::new(builder);

let stmts = schema.create_index_from_entity(indexes::Entity);

let idx = sea_query::Index::create()
    .name("idx-indexes-index1_attr")
    .table(indexes::Entity)
    .col(indexes::Column::Index1Attr)
    .to_owned();
assert_eq!(builder.build(&stmts[0]), builder.build(&idx));

let idx = sea_query::Index::create()
    .name("idx-indexes-index2_attr")
    .table(indexes::Entity)
    .col(indexes::Column::Index2Attr)
    .to_owned();
assert_eq!(builder.build(&stmts[1]), builder.build(&idx));
```