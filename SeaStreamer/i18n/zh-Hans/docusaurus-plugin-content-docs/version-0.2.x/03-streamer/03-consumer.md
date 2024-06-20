# 消费者

[`Consumer`](https://docs.rs/sea-streamer/*/sea_streamer/trait.Consumer.html) 特性定义了流消费者通用的接口。

已实现：
+ [`KafkaConsumer`](https://docs.rs/sea-streamer-kafka/*/sea_streamer_kafka/struct.KafkaConsumer.html)
+ [`RedisConsumer`](https://docs.rs/sea-streamer-redis/*/sea_streamer_redis/struct.RedisConsumer.html)
+ [`StdioConsumer`](https://docs.rs/sea-streamer-stdio/*/sea_streamer_stdio/struct.StdioConsumer.html)

## `ConsumerOptions`

### `ConsumerMode`

有三种模式：

#### `RealTime`

这是基本的流消费者。它不会自动提交，因此只从当前时间开始消费消息。

#### `Resumable`

当进程重启时，它将从上次提交的序列继续流。

:::info
#### Redis / Kafka 语义

它将使用对此主机唯一的组ID：在物理机器上，它将使用MAC地址。
在Docker容器内部，它将使用容器ID。
:::

:::info
#### Redis 语义

Redis 要求消费者自行分配消费者ID。如果未设置，SeaStreamer 将使用 `主机ID` + `进程ID` + `线程ID` + `时间戳` 的组合。
:::

#### `LoadBalanced`

你应该手动分配一个消费者组。负载均衡机制是特定于实现的。

### `ConsumerGroup`

消费者组是一个字符串，用于客户端向流服务器识别自身。这样当您重新连接时，可以从服务器下载状态。从代理的角度来看，这是最重要的。客户端可以从任何主机或网络连接。

多个消费者可以共享同一个消费者组，并同时保持与服务器的连接。通常，目的是为了实现负载均衡。精确的语义取决于后端。

:::info
#### Kafka 语义

如果多个消费者共享相同的组，则组中的只有一个消费者会接收一条消息，即它是负载均衡的。

但是，负载均衡机制正是让Kafka与众不同的地方：

每个流被分为多个分片（称为分区），并且每个分区将仅被分配给组中的一个消费者。

假设有两个消费者（在组中）和两个分区，那么每个消费者将从一个分区接收消息，它们因此实现了负载均衡。

如果有两个消费者和三个分区，那么一个消费者将被分配两个分区，而另一个仅被分配一个。

但是，如果流只有一个分区，即使有很多消费者，这些消息也只会被分配的消费者接收，其他消费者将处于待机模式，从而导致热故障转移设置。
:::

:::info
#### Redis 语义

同一组中的多个消费者共享相同的流。这是以先到先得的方式负载均衡的。这可以被视为动态负载均衡：更快的消费者将消耗更多的消息。

因此，`ack`必须逐条消息进行。在SeaStreamer中，它变为两步：ack 和 commit：`ack`是非阻塞的，它将在内部缓冲ack，并定期或根据您的请求`commit`到Redis。有多种[自动ack / commit机制](https://docs.rs/sea-streamer-redis/*/sea_streamer_redis/enum.AutoCommit.html)可供选择：`Immediate`，`Delayed`，`Rolling`和`Disabled`。

SeaStreamer还实现了自动故障转移，其中其他消费者的剩余消息可以在一段时间后“申领”，假定它们已经死亡。这可以通过[自动申领](https://docs.rs/sea-streamer-redis/*/sea_streamer_redis/struct.RedisConsumerOptions.html#method.set_auto_claim_interval)选项配置。
:::

:::info
#### Stdio 语义

如果多个消费者共享同一个组，则组中的只有一个会接收一条消息。
这是以轮询方式负载均衡的。
:::

## `next`

轮询并接收一条消息：它等待直到有新消息。
此方法可以从多个线程调用。

## `stream`

返回一个异步流，实现了[Stream Trait](https://docs.rs/futures-core/*/futures_core/stream/trait.Stream.html)。你不能从同一个消费者创建多个流，也不能在流式传输时执行任何操作。

它允许你做一些整洁的事情：

```rust
let items = consumer
    .stream()
    .take(num)
    .map(process_message)
    .collect::<Vec<_>>()
    .await
```

## `assign`

将此消费者分配给特定的分片。可以多次调用来分配
到多个分片。你不能分配尚未订阅的流。

它仅在下一个 `Consumer::seek` 或 `Consumer::rewind` 生效。

## `unassign`

取消分配一个分片。如果此消费者未被分配到此流或分片，则返回 `ConsumerNotAssigned`。

## `rewind`

将流倒回到特定的序列号。

:::info
#### Kafka 语义

如果消费者尚未分配，将使用分片ZERO。这个异步方法不安全取消。你必须等待这个Future，且在它完成之前，此Consumer将无法用于任何操作。
:::

:::info
#### Redis 语义

在Redis中，序列号包含时间戳，所以倒带几乎与查找相同，但更精确：你可以倒带到毫秒内的特定点。
:::

:::caution
#### Stdio 语义

这没有被Stdio后端实现。
:::

## `seek`

将所有流查找至给定的时间点。它将从早于`to`的时间戳的最早消息开始消费。

:::info
#### Kafka 语义

这将为所有分片分配自身。这个异步方法不安全取消。你必须等待这个Future，且在它完成之前，此Consumer将无法用于任何操作。
:::

:::info
#### Redis 语义

查找一个消费者将使其脱离消费者组，如果它已经被分配了一个。它实际上使其成为实时消费者。
:::

:::caution
#### Stdio 语义

这没有被Stdio后端实现。
:::