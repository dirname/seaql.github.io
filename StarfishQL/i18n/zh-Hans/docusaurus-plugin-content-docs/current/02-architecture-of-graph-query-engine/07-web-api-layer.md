# Web API 层

当前的 StarfishQL 查询引擎实现使用了 `rocket`([crates.io](https://crates.io/crates/rocket)) 网络框架来处理请求。

为对应的操作类别，暴露了 `/schema`、`/mutate` 和 `/query` 的端点。

对于所有操作，服务器遵循完全相同的工作流程：

1. 解析 POST 请求的主体。
2. 根据从主体中提取的元数据，调用 Rust 结构体中的相应函数。

因此，Web API 层与操作层分离，这是为了便于维护。