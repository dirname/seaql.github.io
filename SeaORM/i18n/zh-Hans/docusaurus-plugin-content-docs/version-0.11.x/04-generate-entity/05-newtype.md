# 新类型

您可以定义一个新的类型并将其用作模型字段。以下特质必须被实现：

1. 为`newtype`实现了`From<newtype>`对于[`sea_query::Value`](https://docs.rs/sea-query/0.28/sea_query/value/enum.Value.html)
2. 为`newtype`实现了[`sea_orm::TryGetable`](https://docs.rs/sea-orm/0.11/sea_orm/trait.TryGetable.html)
3. 为`newtype`实现了[`sea_query::ValueType`](https://docs.rs/sea-query/0.28/sea_query/value/trait.ValueType.html)
4. 为`newtype`实现了[`sea_query::Nullable`](https://docs.rs/sea-query/0.28/sea_query/value/trait.Nullable.html)

```rust
use sea_orm::entity::prelude::*;
use sea_orm::{TryGetError, TryGetable};

#[derive(Clone, Debug, PartialEq, Eq, DeriveEntityModel)]
#[sea_orm(table_name = "json_vec")]
pub struct Model {
    #[sea_orm(primary_key)]
    pub id: i32,
    pub str_vec: Option<StringVec>,
}

#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]
pub enum Relation {}

impl ActiveModelBehavior for ActiveModel {}

#[derive(Clone, Debug, PartialEq, Eq)]
pub struct StringVec(pub Vec<String>);

impl From<StringVec> for Value {
    fn from(source: StringVec) -> Self {
        Value::String(serde_json::to_string(&source).ok().map(Box::new))
    }
}

impl sea_orm::TryGetable for StringVec {
    fn try_get_by<I: sea_orm::ColIdx>(res: &QueryResult, idx: I) -> Result<Self, TryGetError> {
        let json_str: String = res.try_get_by(idx).map_err(TryGetError::DbErr)?;
        serde_json::from_str(&json_str).map_err(|e| TryGetError::DbErr(DbErr::Json(e.to_string())))
    }
}

impl sea_query::ValueType for StringVec {
    fn try_from(v: Value) -> Result<Self, sea_query::ValueTypeErr> {
        match v {
            Value::String(Some(x)) => Ok(StringVec(
                serde_json::from_str(&x).map_err(|_| sea_query::ValueTypeErr)?,
            )),
            _ => Err(sea_query::ValueTypeErr),
        }
    }

    fn type_name() -> String {
        stringify!(StringVec).to_owned()
    }

    fn array_type() -> sea_orm::sea_query::ArrayType {
        sea_orm::sea_query::ArrayType::String
    }

    fn column_type() -> sea_query::ColumnType {
        sea_query::ColumnType::String(None)
    }
}

impl sea_query::Nullable for StringVec {
    fn null() -> Value {
        Value::String(None)
    }
}
```