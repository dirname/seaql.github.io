# 消费者

[`Consumer`](https://docs.rs/sea-streamer/*/sea_streamer/trait.Consumer.html) 特性定义了流消费者通用的接口。

已实现：
+ [`KafkaConsumer`](https://docs.rs/sea-streamer-kafka/*/sea_streamer_kafka/struct.KafkaConsumer.html)
+ [`RedisConsumer`](https://docs.rs/sea-streamer-redis/*/sea_streamer_redis/struct.RedisConsumer.html)
+ [`StdioConsumer`](https://docs.rs/sea-streamer-stdio/*/sea_streamer_stdio/struct.StdioConsumer.html)
+ [`FileConsumer`](https://docs.rs/sea-streamer-file/*/sea_streamer_file/struct.FileConsumer.html)

## `ConsumerOptions`

### `ConsumerMode`

有三种模式：

#### `RealTime`

这是“原味”的流消费者。它不会自动提交，因此只从现在开始消费消息。

#### `Resumable`

当进程重启时，它将从上次提交的序列继续流。

:::info
#### Redis / Kafka 语义

它将使用对这台主机唯一的组ID：在物理机器上，它将使用MAC地址。
在Docker容器内，它将使用容器ID。
:::

:::info
#### Redis 语义

Redis要求消费者自行分配消费者ID。如果未设置，SeaStreamer会使用`主机ID` + `进程ID` + `线程ID` + `时间戳`的组合。
:::

:::caution
#### Stdio / File 语义

目前不支持。
:::

#### `LoadBalanced`

你应该手动分配一个消费者组。负载均衡机制是实现特定的。

### `ConsumerGroup`

消费者组是客户端向流服务器标识自己的字符串。这样，当你重新连接时，可以从服务器下载状态。从代理的角度来看，这就是全部。客户端可以从任何主机或网络连接。

多个消费者可以共享相同的消费者组，并同时保持与服务器的连接。通常，意图是实现负载均衡。精确的语义是后端特定的。

:::info
#### Kafka 语义

如果多个消费者共享同一组，那么一组中的只有一个消费者会收到一条消息，即它是负载均衡的。

但是，负载均衡机制正是使Kafka与众不同的地方：

每个流被分为多个分片（称为分区），并且每个分区只会分配给组中的一个消费者。

假设有两个消费者（在组中）和两个分区，那么每个消费者将从一个分区接收消息，因此它们是负载均衡的。

如果有两个消费者和三个分区，那么一个消费者将分配两个分区，而另一个仅分配一个。

然而，如果流只有一个分区，即使有许多消费者，这些消息也只会由分配的消费者接收，其他消费者将处于备用模式，从而导致热故障切换设置。
:::

:::info
#### Redis 语义

同一组中的多个消费者共享相同的流。这是以先到先得的方式负载均衡的。这可以视为动态负载均衡：更快的消费者会消耗更多消息。

因此，必须逐条消息进行`确认`。在SeaStreamer中，它变成了两步：确认和提交：`确认`是非阻塞的，它将在内部缓冲确认，并定期或根据你的请求`提交`到Redis。有多种[自动确认/提交机制](https://docs.rs/sea-streamer-redis/*/sea_streamer_redis/enum.AutoCommit.html)可供选择：`立即`、`延迟`、`滚动`和`禁用`。

SeaStreamer还实现了自动故障转移，其中可以在一段时间后为假定已死的其他消费者申领剩余消息。这可以通过[自动申领](https://docs.rs/sea-streamer-redis/*/sea_streamer_redis/struct.RedisConsumerOptions.html#method.set_auto_claim_interval)选项配置。
:::

:::info
#### Stdio / File 语义

如果多个消费者共享同一组，则只有组中的一个会接收一条消息。
这是以轮询方式负载均衡的。
:::

## `next`

轮询并接收一条消息：它会等待直到有新消息。
此方法可从多个线程调用。

## `stream`

返回一个异步流，实现了[Stream Trait](https://docs.rs/futures-core/*/futures_core/stream/trait.Stream.html)。你不能从同一个消费者创建多个流，也不能在流式传输时执行任何操作。

它允许你做些整洁的事情：

```rust
let items = consumer
    .stream()
    .take(num)
    .map(process_message)
    .collect::<Vec<_>>()
    .await
```

## `assign`

将此消费者分配给特定的分片。可以多次调用来分配到多个分片。你不能分配未订阅的流。

它仅在下一个`Consumer::seek`或`Consumer::rewind`时生效。

## `unassign`

取消分配一个分片。如果此消费者未被分配到此流或分片，返回`ConsumerNotAssigned`。

## `rewind`

将流回退到特定的序列号。

:::info
#### Kafka 语义

如果消费者尚未分配，将使用分片零。此异步方法不是取消安全的。你必须等待这个Future，且在完成前此Consumer无法用于任何操作。
:::

:::info
#### Redis 语义

在Redis中，序列号包含时间戳，所以回退几乎等同于查找，但更精确：你可以回退到毫秒内的特定点。
:::

:::info
#### 文件语义

影响所有流。
如果消费者订阅多个流，它将根据第一个流键进行查找。
它撤销了消费者的组成员资格。
:::

:::caution
#### Stdio 语义

这不是由Stdio后端实现的。
:::

## `seek`

将所有流查找至给定的时间点。它将从早于`to`的时间戳的最早消息开始消费。

:::info
#### Kafka 语义

这将自我分配所有分片。此异步方法不是取消安全的。你必须等待这个Future，且在完成前此Consumer无法用于任何操作。
:::

:::info
#### Redis 语义

查找一个消费者会使其脱离消费者组，如果它已被分配一个。它实际上使其成为一个实时消费者。
:::

:::info
#### 文件语义

影响所有流。
如果消费者订阅多个流，它将根据第一个流键进行查找。
它撤销了消费者的组成员资格。
:::

:::caution
#### Stdio 语义

这不是由Stdio后端实现的。
:::

## 自动流重置

:::info
#### Kafka 语义

`AutoOffsetReset` 选项允许在消费者组未分配或消费者组没有先前状态的情况下将流重置为`Earliest`。默认为`Latest`。
:::

:::info
#### Redis 语义

`AutoStreamReset` 选项允许在消费者组未分配或消费者组没有先前状态的情况下将流重置为`Earliest`。默认为`Latest`。
:::

:::info
#### 文件语义

`AutoStreamReset` 选项允许在流启动时将流重置为`Earliest`。默认为`Latest`。
从同一文件流式传输的多个消费者如果都是`Latest`，则将共享相同的文件句柄。
在消费者上调用查找/回退会使其脱离消费者组，并将打开新的文件句柄。
:::

:::caution
#### Stdio 语义

这不是由Stdio后端实现的。
:::