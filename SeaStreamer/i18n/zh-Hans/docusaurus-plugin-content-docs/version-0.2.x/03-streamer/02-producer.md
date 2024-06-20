# 生产者

[`Producer`](https://docs.rs/sea-streamer/*/sea_streamer/trait.Producer.html) 特性定义了流生产者的通用接口。`Producer` 实现了 `Clone`，因此你可以像使用 `mpsc::Sender` 一样使用它。

实现了以下特性：
+ [`KafkaProducer`](https://docs.rs/sea-streamer-kafka/*/sea_streamer_kafka/struct.KafkaProducer.html)
+ [`RedisProducer`](https://docs.rs/sea-streamer-redis/*/sea_streamer_redis/struct.RedisProducer.html)
+ [`StdioProducer`](https://docs.rs/sea-streamer-stdio/latest/sea_streamer_stdio/struct.StdioProducer.html)

## `ProducerOptions`

:::info
#### Redis 语义

你可以为生产者分配自定义的分片器。分片仅仅意味着将一个流拆分为多个键，格式为 `STREAM_KEY:SHARD_ID`。
:::

## `send`

向已经锚定的流发送消息。这个函数是非阻塞的。如果你对 `Receipt` 不感兴趣，你不必等待这个未来的操作。

如果生产者没有被锚定，这将返回 `StreamErr::NotAnchored` 错误。

### `Receipt`

如果你等待这个未来操作，你将得到一个由 (StreamKey, ShardId, SeqNo, Timestamp) 组成的收据。这通常意味着消息已经被服务器*接收*，但不能保证消息已经被*持久化*。

## `send_to`

类似于 `send`，但是发送到指定的流键。

## `flush`

刷新所有待处理的消息。

## `end`

结束这个生产者，但在结束前刷新其所有待处理的消息。

## `anchor`

将此生产者锁定到特定的流。这个函数只能调用一次。后续的调用应该返回 `StreamErr::AlreadyAnchored` 错误。

## `anchored`

如果生产者已经被锚定，返回 StreamKey 的引用。如果生产者没有被锚定，这将返回 `StreamErr::NotAnchored` 错误。