# 生产者

[`Producer`](https://docs.rs/sea-streamer/*/sea_streamer/trait.Producer.html) 特性定义了流生产者的通用接口。`Producer` 实现了 `Clone`，因此您可以像使用 `mpsc::Sender` 一样使用它。

[`KafkaProducer`](https://docs.rs/sea-streamer-kafka/*/sea_streamer_kafka/struct.KafkaProducer.html) 和 [`StdioProducer`](https://docs.rs/sea-streamer-stdio/latest/sea_streamer_stdio/struct.StdioProducer.html) 提供了更多关于事务和刷新的功能。

## `ProducerOptions`

目前没有什么有趣的东西。我们将来可能会添加一些。

## `send`

向已锚定的流发送消息。此函数是非阻塞的。如果您对 `Receipt` 不感兴趣，则无需等待该 Future。

如果生产者未锚定，这将返回 `StreamErr::NotAnchored` 错误。

### `Receipt`

如果您等待该 Future，您将获得由 (StreamKey, ShardId, SeqNo, Timestamp) 组成的收据。这通常意味着消息已被 *broker 接收*，但不能保证消息已经 *持久化*。

## `send_to`

类似于 `send`，但是发送到指定的流键。

## `anchor`

将此生产者锁定到特定的流。此函数只能调用一次。后续调用应返回 `StreamErr::AlreadyAnchored` 错误。

## `anchored`

如果生产者已经被锚定，返回 StreamKey 的引用。如果生产者未锚定，这将返回 `StreamErr::NotAnchored` 错误。