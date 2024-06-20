# SeaStreamer 架构

`sea-streamer`\[链接到：https://docs.rs/sea-streamer\]的架构由多个子 crates 构成：

+ `sea-streamer-types`\[链接到：https://docs.rs/sea-streamer-types\]
+ `sea-streamer-socket`\[链接到：https://docs.rs/sea-streamer-socket\]
    + `sea-streamer-kafka`\[链接到：https://docs.rs/sea-streamer-kafka\]
    + `sea-streamer-stdio`\[链接到：https://docs.rs/sea-streamer-stdio\]
+ `sea-streamer-runtime`\[链接到：https://docs.rs/sea-streamer-runtime\]

### `sea-streamer-types`：特质与类型

此 crate 定义了 SeaStreamer API 的所有特质和类型，但不提供任何实现。

### `sea-streamer-socket`：与后端无关的套接字 API

就像 SeaORM 允许你为不同数据库构建应用程序一样，SeaStreamer 允许你为不同的流服务器构建流处理器。

虽然 `sea-streamer-types` crate 提供了一个基于特质的抽象层，但这个 crate 提供了一个具体类型的 API，
这样你的程序就可以从/向用户在运行时选择的任何 SeaStreamer 后端进行流式传输。

这使你能够做些很酷的事情，例如本地生成数据然后将它们流式传输到 Kafka。或者反过来，
从 Kafka 接收数据以便在本地处理。所有这些操作 _无需重新编译_ 流处理器。

### `sea-streamer-kafka`：Kafka / Redpanda 后端

这是 SeaStreamer 的 Kafka / Redpanda 后端实现。
此 crate 提供了一整套类型系统，使得使用 Kafka 变得更简单、更安全。

此 crate 依赖于 `rdkafka`\[链接到：https://docs.rs/rdkafka\]，
而 `rdkafka` 又依赖于 [librdkafka-sys]\[链接到：https://docs.rs/librdkafka-sys\]，后者本身是
[librdkafka]\[链接到：https://docs.confluent.io/platform/current/clients/librdkafka/html/index.html\] 的包装器。

### `sea-streamer-stdio`：标准 I/O 后端

这是 SeaStreamer 的 `stdio` 后端实现。它旨在与 Unix 管道一起使用，
在开发流处理器或本地处理数据时提供了极大的灵活性。

你可以通过管道连接处理器：`processor_a | processor_b`。

### `sea-streamer-runtime`：异步运行时抽象

此 crate 提供了一小套函数，用于在 `async-std` 和 `tokio` 之间对齐类型签名，
因此你可以构建适用于两种运行时的应用程序。