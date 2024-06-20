# 概览

图查询引擎是一个由[rocket](https://crates.io/crates/rocket) Web框架和[SeaQL生态系统](https://www.sea-ql.org/SeaORM/)驱动的Rust后端应用。

## 处理请求

作为一个Web应用，StarfishQL期望从Web接收输入，形式为HTTP请求（具体来说，仅限POST请求）。

我们将查询语言定义为[JSON](https://www.json.org/json-zh.html)格式，因为：

- 它是网络上数据传输的首选格式。
- 大多数，如果不是全部，Web开发者都了解它。
- 大多数，如果不是全部，Web框架都支持它。
- 它易于理解（这可能有争议，但美化和可视化工具确实有所帮助）。
- 它易于编写（如果请求发送者使用JavaScript，甚至可以说微不足道）。
- [`serde`](https://crates.io/crates/serde)和[`serde_json`](https://crates.io/crates/serde_json)提供了在Rust中处理JSON数据的优秀工具。

因此，我们设计了引擎的输入层始终获取POST请求[^1]的JSON格式的正文，无论操作如何，以保持一致性。

引擎在以下端点监听相应的操作：
- `/schema` - 定义/重置模式
- `/mutate` - 执行变异操作
- `/query` - 执行查询

## 调用操作

引擎在不同端点接收到的每个请求告诉引擎*要做什么*，而正文则通过参数指定*如何做*。

在以下子节中，将详细研究StarfishQL查询引擎支持的所有可能操作。

[^1]: 根据[标准](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/GET)，GET请求没有正文。所以请不要对在POST请求中看到查询操作的指定感到太惊讶。