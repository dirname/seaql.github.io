# SeaStreamer 架构

`sea-streamer`\[链接\] 的架构由多个子 crate 组成：

+ `sea-streamer-types`\[链接\]
+ `sea-streamer-socket`\[链接\]
    + `sea-streamer-kafka`\[链接\]
    + `sea-streamer-redis`\[链接\]
    + `sea-streamer-stdio`\[链接\]
+ `sea-streamer-runtime`\[链接\]

### `sea-streamer-types`：特质与类型

此 crate 定义了 SeaStreamer API 所需的所有特质和类型，但不提供任何实现。

### `sea-streamer-socket`：后端无关的 Socket API

就像 SeaORM 允许你为不同数据库构建应用程序一样，SeaStreamer 让你能够为不同的流服务器构建流处理器。

虽然 `sea-streamer-types` crate 提供了一个基于特质的优雅抽象，但这个 crate 提供了一个具体类型的 API，使你的程序可以流式传输到用户在运行时选择的任何 SeaStreamer 后端。

这使你可以做些很酷的事情，比如本地生成数据然后将它们流式传输到 Redis 或 Kafka。或者反过来，从服务器接收数据以本地处理它们。所有这些都无需重新编译流处理器。

### `sea-streamer-kafka`：Kafka / Redpanda 后端

这是 SeaStreamer 的 Kafka / Redpanda 后端实现。
此 crate 提供了一个全面的类型系统，使得与 Kafka 的工作更加容易和安全。

所有 API（许多是同步的）都被适当地包装为异步。方法也被标记为 `&mut` 以消除可能的竞态条件。

此 crate 依赖于 `rdkafka`\[链接\]，
后者又依赖于 [librdkafka-sys]\[链接\]，它本身是 [librdkafka]\[链接\] 的一个包装器。

### `sea-streamer-redis`：Redis 后端

这是 SeaStreamer 的 Redis 后端实现。此 crate 在 Redis 基础上提供了一个高级异步 API，使得使用 Redis 流变得万无一失：

+ 实现了熟悉的 SeaStreamer 抽象接口
+ 一个全面的类型系统，引导并限制你使用 API
+ 高级 API，因此你不再调用 XADD、XREAD 或 XACK
+ 无锁实现：通过消息传递实现并发

此 crate 基于 `redis`\[链接\] 构建。

### `sea-streamer-stdio`：标准 I/O 后端

这是 SeaStreamer 的 `stdio` 后端实现。它被设计为与 unix 管道一起使用，
为开发流处理器或本地处理数据提供了极大的灵活性。

你可以通过管道连接处理器：`processor_a | processor_b`。

### `sea-streamer-runtime`：异步运行时抽象

此 crate 提供了一组小函数，用于在 `async-std` 和 `tokio` 之间对齐类型签名，
这样你就可以构建适用于两种运行时的应用程序。