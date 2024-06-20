# 新类型

您可以定义一个新类型（`T`），并将其用作模型字段。需要实现以下特质。

1. 为[`sea_query::Value`](https://docs.rs/sea-query/*/sea_query/value/enum.Value.html)实现`From<T>`
2. 为`T`实现[`sea_orm::TryGetable`](https://docs.rs/sea-orm/*/sea_orm/trait.TryGetable.html)
3. 为`T`实现[`sea_query::ValueType`](https://docs.rs/sea-query/*/sea_query/value/trait.ValueType.html)
4. 如果字段是`Option<T>`，为`T`实现[`sea_query::Nullable`](https://docs.rs/sea-query/*/sea_query/value/trait.Nullable.html)

```rust
use sea_orm::entity::prelude::*;

#[derive(Clone, Debug, PartialEq, Eq, DeriveEntityModel)]
#[sea_orm(table_name = "custom_value_type")]
pub struct Model {
    #[sea_orm(primary_key)]
    pub id: i32,
    pub number: Integer,
    // 仅限Postgres
    pub str_vec: StringVec,
}

#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]
pub enum Relation {}

impl ActiveModelBehavior for ActiveModel {}

#[derive(Clone, Debug, PartialEq, Eq, DeriveValueType)]
pub struct Integer(i32);

#[derive(Clone, Debug, PartialEq, Eq, DeriveValueType)]
pub struct StringVec(pub Vec<String>);
```

<details>
    <summary>其中`StringVec`扩展为：</summary>

```rust
impl std::convert::From<StringVec> for Value {
    fn from(source: StringVec) -> Self {
        source.0.into()
    }
}

impl sea_orm::TryGetable for StringVec {
    fn try_get_by<I: sea_orm::ColIdx>(res: &QueryResult, idx: I) -> Result<Self, sea_orm::TryGetError> {
        <Vec<String> as sea_orm::TryGetable>::try_get_by(res, idx).map(|v| StringVec(v))
    }
}

impl sea_orm::sea_query::ValueType for StringVec {
    fn try_from(v: Value) -> Result<Self, sea_orm::sea_query::ValueTypeErr> {
        <Vec<String> as sea_orm::sea_query::ValueType>::try_from(v).map(|v| StringVec(v))
    }

    fn type_name() -> String {
        stringify!(StringVec).to_owned()
    }

    fn array_type() -> sea_orm::sea_query::ArrayType {
        sea_orm::sea_query::ArrayType::String
    }

    fn column_type() -> sea_orm::sea_query::ColumnType {
        sea_orm::sea_query::ColumnType::String(None)
    }
}
```
</details>

您也可以通过序列化/反序列化对象到/从JSON来定义后端通用的`Vec<T>`字段：

```rust
use sea_orm::entity::prelude::*;
use serde::{Deserialize, Serialize};

#[derive(Clone, Debug, PartialEq, Eq, DeriveEntityModel)]
#[sea_orm(table_name = "json_vec")]
pub struct Model {
    #[sea_orm(primary_key)]
    pub id: i32,
    pub str_vec: ObjectVec,
}

#[derive(Clone, Debug, PartialEq, Eq, Serialize, Deserialize, FromJsonQueryResult)]
pub struct ObjectVec(pub Vec<MyObject>);

#[derive(Clone, Debug, PartialEq, Eq, Serialize, Deserialize)]
pub struct MyObject {
    ..
}
```

<details>
    <summary>其中`ObjectVec`扩展为：</summary>

```rust
impl sea_orm::TryGetableFromJson for ObjectVec {}

impl std::convert::From<ObjectVec> for sea_orm::Value {
    fn from(source: ObjectVec) -> Self {
        sea_orm::Value::Json(serde_json::to_value(&source).ok().map(|s| std::boxed::Box::new(s)))
    }
}

impl sea_orm::sea_query::ValueType for ObjectVec {
    fn try_from(v: sea_orm::Value) -> Result<Self, sea_orm::sea_query::ValueTypeErr> {
        match v {
            sea_orm::Value::Json(Some(json)) => Ok(
                serde_json::from_value(*json).map_err(|_| sea_orm::sea_query::ValueTypeErr)?,
            ),
            _ => Err(sea_orm::sea_query::ValueTypeErr),
        }
    }

    fn type_name() -> String {
        stringify!(ObjectVec).to_owned()
    }

    fn array_type() -> sea_orm::sea_query::ArrayType {
        sea_orm::sea_query::ArrayType::Json
    }

    fn column_type() -> sea_orm::sea_query::ColumnType {
        sea_orm::sea_query::ColumnType::Json
    }
}

impl sea_orm::sea_query::Nullable for ObjectVec {
    fn null() -> sea_orm::Value {
        sea_orm::Value::Json(None)
    }
}
```
</details>