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
        .insert(&db)
        .await?;

        Ok(())
    }
}
```