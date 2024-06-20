# SeaStreamer 架构

`sea-streamer`\[1\] 的架构由多个子 crate 组成：

+ `sea-streamer-types`\[2\]
+ `sea-streamer-socket`\[3\]
    + `sea-streamer-kafka`\[4\]
    + `sea-streamer-redis`\[5\]
    + `sea-streamer-stdio`\[6\]
    + `sea-streamer-file`\[7\]
+ `sea-streamer-runtime`\[8\]

### `sea-streamer-types`：特质与类型

此 crate 定义了 SeaStreamer API 所需的所有特质和类型，但并不提供任何实现。

### `sea-streamer-socket`：与后端无关的套接字 API

就像 SeaORM 允许你为不同数据库构建应用程序一样，SeaStreamer 允许你为不同的流服务器构建流处理器。

虽然 `sea-streamer-types` crate 提供了一个基于特质的优雅抽象，但这个 crate 提供了一个具体类型的 API，
这样你的程序可以从/向用户在运行时选择的任何 SeaStreamer 后端进行流处理。

这使你能够做些很酷的事情，比如本地生成数据然后将它们流式传输到 Redis/Kafka。或者反过来，
从服务器拉取数据以便在本地处理。所有这些 _无需重新编译_ 流处理器。

### `sea-streamer-kafka`：Kafka/Redpanda 后端

这是 SeaStreamer 的 Kafka/Redpanda 后端实现。
此 crate 提供了一个全面的类型系统，使得使用 Kafka 更加容易且安全。

所有 API（许多是同步的）都被适当地包装为异步。方法也被标记为 `&mut` 来消除可能的竞态条件。

此 crate 依赖于 `rdkafka`\[9\]，
而 `rdkafka` 又依赖于 [librdkafka-sys]\[10\]，其本身是
[librdkafka]\[11\] 的包装器。

### `sea-streamer-redis`：Redis 后端

这是 SeaStreamer 的 Redis 后端实现。此 crate 在 Redis 基础上提供了一个高级异步 API，使得使用 Redis 流变得万无一失：

+ 实现了熟悉的 SeaStreamer 抽象接口
+ 一个全面的类型系统，指导并限制你使用 API
+ 高级 API，因此你不再需要调用 XADD、XREAD 或 XACK
+ 无锁实现：通过消息传递实现并发

此 crate 基于 `redis`\[12\] 构建。

### `sea-streamer-stdio`：标准 I/O 后端

这是 SeaStreamer 的 `stdio` 后端实现。它被设计为可以通过 Unix 管道连接在一起，
在开发流处理器或本地处理数据时提供了极大的灵活性。

你可以通过管道将处理器连接在一起：`processor_a | processor_b`。

### `sea-streamer-file`：文件后端

这与 `sea-streamer-stdio` 非常相似，但不同之处在于 Stdio 实时工作，
而 `sea-streamer-file` 则实时工作并可重播。这意味着，File 具有
遍历 `.ss`（sea-stream）文件并定位/回退到特定时间戳/偏移量的能力。

此外，Stdio 只能处理 UTF-8 文本数据，而 File 能够处理二进制数据。

### `sea-streamer-runtime`：异步运行时抽象

此 crate 提供了一小套函数，用于在 `async-std` 和 `tokio` 之间对齐类型签名，
因此你可以构建适用于这两种运行时的应用程序。