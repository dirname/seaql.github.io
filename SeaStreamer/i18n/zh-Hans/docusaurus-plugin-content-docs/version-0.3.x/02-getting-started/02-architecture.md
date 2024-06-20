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

此 crate 定义了 SeaStreamer API 所需的所有特质和类型，但不提供任何实现。

### `sea-streamer-socket`：与后端无关的套接字 API

就像 SeaORM 允许你为不同数据库构建应用程序一样，SeaStreamer 允许你为不同的流服务器构建流处理器。

虽然 `sea-streamer-types` crate 提供了一个基于特质的优雅抽象，但这个 crate 提供了一个具体类型的 API，
这样你的程序可以从/向用户在运行时选择的任何 SeaStreamer 后端流数据。

这使你能够做一些很酷的事情，比如本地生成数据，然后将它们流到 Redis / Kafka。或者反过来，
从服务器中获取数据以便本地处理。所有这些 _无需重新编译_ 流处理器。

### `sea-streamer-kafka`：Kafka / Redpanda 后端

这是 SeaStreamer 为 Kafka / Redpanda 提供的后端实现。
此 crate 提供了一个全面的类型系统，使得使用 Kafka 更加容易和安全。

所有 API（许多是同步的）都被适当地包装为异步。方法也被标记为 `&mut` 以消除可能的竞争条件。

此 crate 依赖于 `rdkafka`\[9\]，
它反过来又依赖于 [librdkafka-sys]\[10\]，而 librdkafka-sys 本身是
[librdkafka]\[11\] 的一个包装器。

### `sea-streamer-redis`：Redis 后端

这是 SeaStreamer 为 Redis 提供的后端实现。此 crate 在 Redis 上提供了高级异步 API，确保使用 Redis Streams 万无一失：

+ 实现熟悉的 SeaStreamer 抽象接口
+ 一个全面的类型系统，引导并限制你使用 API
+ 高级 API，因此你不再直接调用 XADD、XREAD 或 XACK
+ 无锁实现：通过消息传递实现并发

此 crate 基于 `redis`\[12\] 构建。

### `sea-streamer-stdio`：标准 I/O 后端

这是 SeaStreamer 的 `stdio` 后端实现。它设计用于与 Unix 管道一起连接，
在开发流处理器或本地处理数据时提供极大的灵活性。

你可以通过管道连接处理器：`processor_a | processor_b`。

### `sea-streamer-file`：文件后端

这与 `sea-streamer-stdio` 非常相似，但不同之处在于 Stdio 实时工作，
而 `sea-streamer-file` 实时和重播工作。这意味着，File 能够
遍历 `.ss`（海流）文件并定位/回退到特定的时间戳/偏移量。

此外，Stdio 只能处理 UTF-8 文本数据，而 File 能够处理二进制数据。

### `sea-streamer-runtime`：异步运行时抽象

此 crate 提供了一小套函数来统一 `async-std` 和 `tokio` 之间的类型签名，
因此你可以构建适用于两种运行时的应用程序。