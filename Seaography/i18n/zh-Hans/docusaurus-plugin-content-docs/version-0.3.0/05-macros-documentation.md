# 宏文档

## `Filter` 衍生宏

`Filter` 衍生宏附加在 Sea ORM 模型上，生成结构和函数，这些结构和函数由 QueryRoot 使用，为实体提供查询功能。

### 属性

```rust
#[sea_orm(table_name = "film")]
```

* table_name: 用于向宏提供将用于结构名称的实体名称

### 输入

```rust
#[derive(
    Clone,
    Debug,
    PartialEq,
    DeriveModel,
    DeriveActiveModel,
    async_graphql::SimpleObject, // Async GraphQL 所需
    seaography::macros::Filter, // 宏
)]
#[sea_orm(table_name = "film")]
#[graphql(complex)] // 用于 Relations 衍生
#[graphql(name = "Film")] // Async GraphQL 所需
pub struct Model {
    pub film_id: u16,
    pub title: String,
    pub rating: Option<Rating>,
    pub last_update: DateTimeUtc,
}
```

### 输出

用于描述复杂的 SQL 过滤器

```rust
#[derive(Debug, async_graphql::InputObject)]
#[graphql(name = "FilmFilter")]
pub struct Filter {
    pub or: Option<Vec<Box<Filter>>>,
    pub and: Option<Vec<Box<Filter>>>,
    pub film_id: Option<seaography::TypeFilter<u16>>,
    pub title: Option<seaography::TypeFilter<String>>,
    // 参见 Enumeration 衍生
    pub rating: Option<crate::entities::sea_orm_active_enums::RatingEnumFilter>,
    pub last_update: Option<seaography::TypeFilter<DateTimeUtc>>,
}
```

用于接收一个 `Filter` 结构并将其转化为 sea_orm::Condition，该 Condition 应用于 sea_orm 查询语句

```rust
pub fn filter_recursive(root_filter: Option<Filter>) -> sea_orm::Condition {
    ...
}
```

用于描述排序依据

```rust
#[derive(Debug, async_graphql::InputObject)]
#[graphql(name = "FilmOrderBy")]
pub struct OrderBy {
    pub film_id: Option<seaography::OrderByEnum>,
    pub title: Option<seaography::OrderByEnum>,
    pub rating: Option<seaography::OrderByEnum>,
    pub last_update: Option<seaography::OrderByEnum>,
}
```

用于接收一个查询语句和 OrderBy 结构，并使用期望的排序更新语句。

```rust
pub fn order_by(stmt: sea_orm::Select<Entity>, order_by_struct: Option<OrderBy>) -> sea_orm::Select<Entity> {
    ...
}
```

## `RelationsCompact` 衍生宏

`RelationsCompact` 衍生宏附加在 Sea ORM 关系枚举上，生成结构和函数，这些结构和函数由实体用来查询相关实体。此衍生应用于紧凑形式的实体。

### 输入

```rust
#[derive(
    Copy,
    Clone,
    Debug,
    EnumIter,
    DeriveRelation,
    seaography::macros::RelationsCompact,
)]
pub enum Relation {
    #[sea_orm(
        belongs_to = "super::employees::Entity",
        from = "Column::SupportRepId",
        to = "super::employees::Column::EmployeeId",
        on_update = "NoAction",
        on_delete = "NoAction"
    )]
    Employees,
    #[sea_orm(has_many = "super::invoices::Entity")]
    Invoices,
}
```

### 输出

以下为实体模型实现：

```rust
// 需要 Model 上启用 graphql complex 标志
#[async_graphql::ComplexObject]
impl Model {
    pub fn employees<'a>(
        &self,
        ctx: &async_graphql::Context<'a>,
    ) -> Option<#return_type>
    {
      ...
    }

    pub fn invoices<'a>(
        &self,
        ctx: &async_graphql::Context<'a>,
    ) -> Option<#return_type>
    {
      // 使用 context.dataloader.load::<InvoicesFK>(...) 来分发查询
      ...
    }
}
```

对于每个枚举变体，以下内容会被生成：

```rust
// 用于上下文加载器
#[derive(Clone, Debug)]
pub struct EmployeesFK(...);

// 实现 ForeignKey 的 load 函数
#[async_trait::async_trait]
impl async_graphql::dataloader::Loader<EmployeesFK> for crate::OrmDataloader {
    type Value = #return_type;
    type Error = std::sync::Arc<sea_orm::error::DbErr>;

    async fn load(
        &self,
        keys: &[#EmployeesFK],
    ) -> Result<
        std::collections::HashMap<#EmployeesFK, Self::Value>,
        Self::Error
    >
    {
        ...
    }
}
```


## `relation` 宏

`relation` 宏附加在 Sea ORM RelationTrait 实现上，生成结构和函数，这些结构和函数由实体用来查询相关实体。此宏应用于扩展形式的实体。

### 输入

```rust
#[seaography::macros::relation]
impl RelationTrait for Relation {
    fn def(&self) -> RelationDef {
        match self {
            Self::Employees => Entity::belongs_to(super::employees::Entity)
                .from(Column::SupportRepId)
                .to(super::employees::Column::EmployeeId)
                .into(),
            Self::Invoices => Entity::has_many(super::invoices::Entity).into(),
        }
    }
}
```

### 输出

它产生与 `RelationsCompact` 相同的结果

## `EnumFilter` 衍生宏

`EnumFilter` 宏附加在 Sea ORM 枚举上，为其生成用于实体过滤器的 GraphQL 过滤器结构。

### 输入

```rust
#![doc = "SeaORM 实体。由 sea-orm-codegen 0.9.1 自动生成"]
use sea_orm::entity::prelude::*;
#[derive(
    Debug,
    Clone,
    PartialEq,
    EnumIter,
    DeriveActiveEnum,
    Eq,
    Copy,
    async_graphql::Enum, // GraphQL 所需
    seaography::macros::EnumFilter, // 宏
)]
#[sea_orm(rs_type = "String", db_type = "Enum", enum_name = "rating")]
pub enum Rating {
    #[sea_orm(string_value = "G")]
    G,
    #[sea_orm(string_value = "PG")]
    Pg,
    #[sea_orm(string_value = "PG-13")]
    Pg13,
    #[sea_orm(string_value = "R")]
    R,
    #[sea_orm(string_value = "NC-17")]
    Nc17,
}
```

### 输出

```rust
#[derive(Debug, async_graphql::InputObject)]
pub struct RatingEnumFilter {
    pub eq: Option<Rating>,
    pub ne: Option<Rating>,
    pub gt: Option<Rating>,
    pub gte: Option<Rating>,
    pub lt: Option<Rating>,
    pub lte: Option<Rating>,
    pub is_in: Option<Vec<Rating>>,
    pub is_not_in: Option<Vec<Rating>>,
    pub is_null: Option<bool>,
}
```

## `QueryRoot` 宏

`QueryRoot` 衍生宏用于为通过属性定义的每个实体生成查询。查询支持过滤、分页和排序。

### 属性

它为指定路径 `Entity` 启用查询，并且还指导 `QueryRoot` 衍生宏在哪里找到生成代码所需的工具结构和函数。

```rust
#[seaography(entity = "crate::entities::artists")]
```

### 输入

```rust
#[derive(Debug, seaography :: macros :: QueryRoot)]
#[seaography(entity = "crate::entities::artists")]
#[seaography(entity = "crate::entities::employees")]
pub struct QueryRoot;
```

### 输出

```rust
#[derive(Debug, async_graphql::InputObject)]
pub struct PageInput {
    pub limit: usize,
    pub page: usize,
}

#[derive(Debug, async_graphql::InputObject)]
pub struct CursorInput {
    pub cursor: Option<String>,
    pub limit: u64,
}

#[derive(async_graphql::OneofObject)]
pub enum Pagination {
    Pages(PageInput),
    Cursor(CursorInput),
}

/// 分页器分页的额外字段
#[derive(async_graphql::SimpleObject)]
pub struct ExtraPaginationFields {
    pub pages: Option<usize>,
    pub current: Option<usize>,
}

/// CursorValues 用于编码/解码任何 Model 的主键以进行游标分页
#[derive(Debug)]
pub struct CursorValues(pub Vec<sea_orm::Value>);

impl async_graphql::types::connection::CursorType for CursorValues {
    type Error = String;

    /// 用于将游标字符串解码为值的向量
    fn decode_cursor(s: &str) -> Result<Self, Self::Error> {
        ...
    }

    /// 用于将值的向量编码为游标字符串
    fn encode_cursor(&self) -> String {
        ...
    }
}

/// 用于跟踪游标字符串解析状态
#[derive(Debug)]
pub enum DecodeMode {
    Type,
    Length,
    ColonSkip,
    Data,
}

/// 用于将值的向量解析为 ValueTuple 枚举
pub fn map_cursor_values(values: Vec<sea_orm::Value>) -> sea_orm::sea_query::value::ValueTuple {
    ...
}

#[async_graphql::Object]
impl QueryRoot {
    pub async fn actor<'a>(
        &self,
        ctx: &async_graphql::Context<'a>,
        filters: Option<crate::entities::actor::Filter>,
        pagination: Option<Pagination>,
        order_by: Option<crate::entities::actor::OrderBy>,
    ) -> async_graphql::types::connection::Connection<
        String,
        crate::entities::actor::Model,
        ExtraPaginationFields,
        async_graphql::types::connection::EmptyFields,
    > {
        // 1. 使用定义
        // 2. 初始化数据库连接
        // 3. 创建 SQL 语句
        // 4. 应用过滤和排序
        // 5. 应用分页
        // 6. 返回结果
    }

    pub async fn address<'a>(
        &self,
        ctx: &async_graphql::Context<'a>,
        filters: Option<crate::entities::address::Filter>,
        pagination: Option<Pagination>,
        order_by: Option<crate::entities::address::OrderBy>,
    ) -> async_graphql::types::connection::Connection<
        String,
        crate::entities::address::Model,
        ExtraPaginationFields,
        async_graphql::types::connection::EmptyFields,
    > {
        ...
    }
}
```