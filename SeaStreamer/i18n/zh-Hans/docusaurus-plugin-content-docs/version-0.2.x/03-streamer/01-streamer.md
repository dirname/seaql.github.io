# 流处理器

[`Streamer`](https://docs.rs/sea-streamer/*/sea_streamer/trait.Streamer.html) 特性定义了流处理客户端的通用接口。

实现了以下特性：
+ [`KafkaStreamer`](https://docs.rs/sea-streamer-kafka/*/sea_streamer_kafka/struct.KafkaStreamer.html)
+ [`RedisStreamer`](https://docs.rs/sea-streamer-redis/*/sea_streamer_redis/struct.RedisStreamer.html)
+ [`StdioStreamer`](https://docs.rs/sea-streamer-stdio/latest/sea_streamer_stdio/struct.StdioStreamer.html)

:::info
#### Kafka 语义

请参阅 https://kafka.apache.org/documentation/#intro_concepts_and_terms 获取温和的入门介绍。
:::

:::info
#### Redis 语义

SeaStreamer Redis 的目标是提供类似 Kafka 的客户端体验，但 Redis 和 Kafka 之间存在一些根本差异：

+ 在 Redis 中，序列号不是连续的
+ 在 Redis 中，消息以先请求先服务的方式分发给消费者组成员，这导致了下一点
+ 在 Redis 中，必须按每条消息进行确认（ACK）
:::

:::info
#### 标准输入输出（Stdio）语义

标准输入输出（Stdio）后端会分别启动两个专用线程来处理标准输入和标准输出。流处理器 URI 的主机部分始终为空，即在 `stdio://` 中，主机是 ` `。只有一个分片 `ZERO`。
:::

## `ConnectOptions`

### `timeout`

为所有连接设置默认网络超时时间。

## `connect`

建立与流服务器的连接。`Streamer` 实现不必保持与服务器的开放连接。

## `disconnect`

从流服务器断开连接。目的是刷新剩余的消息并优雅地退出。你必须 `await` 此操作直到其完成。一旦调用了此方法，创建的所有生产者和消费者将变得无法使用。

## `create_producer`

创建一个流向指定流的生产者。

## `create_generic_producer`

创建一个可以流向任何流的生产者。

## `create_consumer`

创建订阅指定流的消费者。