# 流处理器

[`Streamer`](https://docs.rs/sea-streamer/*/sea_streamer/trait.Streamer.html) 特性定义了流处理客户端的通用接口。

实现了以下特性：
+ [`KafkaStreamer`](https://docs.rs/sea-streamer-kafka/*/sea_streamer_kafka/struct.KafkaStreamer.html)
+ [`RedisStreamer`](https://docs.rs/sea-streamer-redis/*/sea_streamer_redis/struct.RedisStreamer.html)
+ [`StdioStreamer`](https://docs.rs/sea-streamer-stdio/*/sea_streamer_stdio/struct.StdioStreamer.html)
+ [`FileStreamer`](https://docs.rs/sea-streamer-file/*/sea_streamer_file/struct.FileStreamer.html)

:::info
#### Kafka 语义

请参阅 https://kafka.apache.org/documentation/#intro_concepts_and_terms 进行温和的入门介绍。
:::

:::info
#### Redis 语义

SeaStreamer Redis 旨在提供类似 Kafka 的客户端体验，但 Redis 和 Kafka 之间存在一些根本性的差异：

+ 在 Redis 中，序列号不是连续的
+ 在 Redis 中，消息以先请求先服务的方式分发给消费者组成员，这导致了下一点
+ 在 Redis 中，必须逐条消息进行 ACK
:::

:::info
#### 标准输入输出（Stdio）语义

标准输入输出后端会分别启动两个专用线程来处理标准输入和标准输出。流处理器 URI 的主机部分始终为空，即在 `stdio://` 中，主机是 ` `。只有一个分片 `ZERO`。
:::

:::info
#### 文件语义

在文件中，与标准输入输出不同，同一进程中可以有多个独立的流处理器。

在文件中，与其他后端不同，可以通过 `EOS` 消息来表示流的结束。请参见 `end_with_eos` 选项 [在这里](https://docs.rs/sea-streamer-file/latest/sea_streamer_file/struct.FileConnectOptions.html#method.set_end_with_eos)。

目前它只流向分片 `ZERO`。

如果从文件系统中删除了文件，流处理器将停止。
:::

## `ConnectOptions`

### `timeout`

为所有连接设置默认网络超时时间。

## `connect`

建立到流服务器的连接。`Streamer` 实现不必保持对服务器的持续开放连接。

## `disconnect`

断开与流服务器的连接。目的是刷新剩余消息并优雅退出。您必须等待此操作直到完成。一旦调用了此方法，所有创建的生产者和消费者都将变得无法使用。

## `create_producer`

创建一个流向指定流的生产者。

## `create_generic_producer`

创建一个可以向任何流传输的生产者。

## `create_consumer`

创建订阅指定流的消费者。