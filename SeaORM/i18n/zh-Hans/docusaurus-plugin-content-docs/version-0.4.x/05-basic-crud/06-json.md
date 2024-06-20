# JSON

## 选择 JSON 结果

SeaORM 的所有查询都可以返回 `serde_json::Value`。

```rust
// 按 id 查找
let 蛋糕: Option<serde_json::Value> = 蛋糕::find_by_id(1)
    .into_json()
    .one(db)
    .await?;

assert_eq!(
    蛋糕,
    Some(serde_json::json!({
        "id": 1,
        "name": "芝士蛋糕"
    }))
);

// 带过滤器的查找
let 蛋糕们: Vec<serde_json::Value> = 蛋糕::find()
    .filter(蛋糕::Column::Name.contains("巧克力"))
    .order_by_asc(蛋糕::Column::Name)
    .into_json()
    .all(db)
    .await?;

assert_eq!(
    蛋糕们,
    vec![
        serde_json::json!({
            "id": 2,
            "name": "巧克力森林"
        }),
        serde_json::json!({
            "id": 8,
            "name": "巧克力纸杯蛋糕"
        }),
    ]
);

// 分页 JSON 结果
let 蛋糕分页: Paginator<_> = 蛋糕::find()
    .filter(蛋糕::Column::Name.contains("巧克力"))
    .order_by_asc(蛋糕::Column::Name)
    .into_json()
    .paginate(db, 50);

while let Some(蛋糕们) = 蛋糕分页.fetch_and_next().await? {
    // 对 蛋糕们: Vec<serde_json::Value> 进行操作
}
```