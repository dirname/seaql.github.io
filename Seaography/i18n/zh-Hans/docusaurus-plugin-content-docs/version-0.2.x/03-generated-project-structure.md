# 生成的项目结构

在本文中，我们将描述生成的项目结构。

所有示例都基于 https://dev.mysql.com/doc/sakila/en/ 数据库。

### 实体

此文件夹包含所有 SeaORM 实体。

#### 示例内容：

```rust
#![doc = "SeaORM 实体。由 sea-orm-codegen 0.9.1 生成"]
use sea_orm::entity::prelude::*;
#[derive(Copy, Clone, Default, Debug, DeriveEntity)]
pub struct Entity;
impl EntityName for Entity {
    fn table_name(&self) -> &str {
        "actor"
    }
}
#[derive(
    Clone,
    Debug,
    PartialEq,
    DeriveModel,
    DeriveActiveModel,
    async_graphql::SimpleObject,
    seaography::macros::Filter,
)]
#[sea_orm(table_name = "actor")]
#[graphql(complex)]
#[graphql(name = "Actor")]
pub struct Model {
    pub actor_id: u16,
    pub first_name: String,
    pub last_name: String,
    pub last_update: DateTimeUtc,
}
#[derive(Copy, Clone, Debug, EnumIter, DeriveColumn)]
pub enum Column {
    ActorId,
    FirstName,
    LastName,
    LastUpdate,
}
#[derive(Copy, Clone, Debug, EnumIter, DerivePrimaryKey)]
pub enum PrimaryKey {
    ActorId,
}
impl PrimaryKeyTrait for PrimaryKey {
    type ValueType = u16;
    fn auto_increment() -> bool {
        true
    }
}
#[derive(Copy, Clone, Debug, EnumIter)]
pub enum Relation {
    FilmActor,
}
impl ColumnTrait for Column {
    type EntityName = Entity;
    fn def(&self) -> ColumnDef {
        match self {
            Self::ActorId => ColumnType::SmallUnsigned.def(),
            Self::FirstName => ColumnType::String(Some(45u32)).def(),
            Self::LastName => ColumnType::String(Some(45u32)).def(),
            Self::LastUpdate => ColumnType::Timestamp.def(),
        }
    }
}
#[seaography::macros::relation]
impl RelationTrait for Relation {
    fn def(&self) -> RelationDef {
        match self {
            Self::FilmActor => Entity::has_many(super::film_actor::Entity).into(),
        }
    }
}
impl Related<super::film_actor::Entity> for Entity {
    fn to() -> RelationDef {
        Relation::FilmActor.def()
    }
}
impl ActiveModelBehavior for ActiveModel {}
```

### `sea_orm_active_enums.rs`

此文件包含所有数据库枚举。

#### 示例内容：
```rust
#![doc = "SeaORM 实体。由 sea-orm-codegen 0.9.1 生成"]
use sea_orm::entity::prelude::*;
#[derive(
    Debug,
    Clone,
    PartialEq,
    EnumIter,
    DeriveActiveEnum,
    Eq,
    Copy,
    async_graphql::Enum,
    seaography::macros::EnumFilter,
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

### `query_root.rs`

包含用于 GraphQL 实体查询的 QueryRoot。

#### 示例内容：

```rust
#[derive(Debug, seaography::macros::QueryRoot)]
#[seaography(entity = "crate::entities::category")]
#[seaography(entity = "crate::entities::film_actor")]
#[seaography(entity = "crate::entities::staff")]
#[seaography(entity = "crate::entities::store")]
#[seaography(entity = "crate::entities::film_text")]
#[seaography(entity = "crate::entities::film_category")]
#[seaography(entity = "crate::entities::customer")]
#[seaography(entity = "crate::entities::address")]
#[seaography(entity = "crate::entities::language")]
#[seaography(entity = "crate::entities::city")]
#[seaography(entity = "crate::entities::payment")]
#[seaography(entity = "crate::entities::rental")]
#[seaography(entity = "crate::entities::country")]
#[seaography(entity = "crate::entities::actor")]
#[seaography(entity = "crate::entities::film")]
#[seaography(entity = "crate::entities::inventory")]
pub struct QueryRoot;
```

### `lib.rs`

包含我们扩展以提供实体关系加载器的 OrmDataLoader。

#### 示例内容：

```rust
use sea_orm::prelude::*;
pub mod entities;
pub mod query_root;
pub use query_root::QueryRoot;
pub struct OrmDataloader {
    pub db: DatabaseConnection,
}
```

### `main.rs`

建立数据库连接，构建 GraphQL 上下文并提供 API 服务。