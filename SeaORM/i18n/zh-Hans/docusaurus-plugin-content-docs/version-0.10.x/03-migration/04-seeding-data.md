# 种植数据

你可以从`SchemaManager`中获取一个`DbConn`，并按需执行数据操作，例如，种植数据。

```rust
use sea_orm_migration::sea_orm::{entity::*, query::*};

// ...

#[async_trait::async_trait]
impl MigrationTrait for Migration {
    async fn up(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        let db = manager.get_connection();

        cake::ActiveModel {
            name: Set("Cheesecake".to_owned()),
            ..Default::default()
        }
        .insert(db)
        .await?;

        Ok(())
    }
}
```

你也可以编写SeaQuery语句来种植表中的数据。

```rust
use sea_orm_migration::sea_orm::{entity::*, query::*};

// ...

#[async_trait::async_trait]
impl MigrationTrait for Migration {
    async fn up(&self, manager: &SchemaManager) -> Result<(), DbErr> {
        let insert = Query::insert()
            .into_table(Cake::Table)
            .columns([Cake::Name])
            .values_panic(["Tiramisu".into()])
            .to_owned();

        manager.exec_stmt(insert).await?;

        Ok(())
    }
}

/// 了解更多，请访问 https://docs.rs/sea-query#iden
#[derive(Iden)]
pub enum Cake {
    Table,
    Id,
    Name,
}
```