# 进程间通信

SeaStreamer 鼓励您编写小型流处理器并将其连接在一起，而不是构建一个带有大量选项的巨型处理器。

Unix 管道是一个伟大的发明，它使任何人都能通过在 shell 中组装程序成为文本处理高手！

如果我们也能以同样的方式处理事件流呢？

使用 SeaStreamer，您可以使用管道将处理器连接在一起：

```shell
processor_a | processor_b
```

您也可以使用文件异步地将它们连接：

```shell
touch stream # 创建一个空文件
tail -f stream | processor_b # 程序 b 可以随时启动
processor_a >> stream # 追加到文件
```

或者使用 File 后端：

```shell
file=/tmp/sea-streamer-$(date +%s)
touch $file
processor_a --output file://$file
processor_b --input  file://$file
```

## 尝试操作

为了演示，提供了一小部分命令行程序。我们先设置它们：

```shell
# `clock` 程序生成形如 `{ "tick": N }` 的消息
alias clock='cargo run --package sea-streamer-stdio  --features=executables --bin clock'
# `relay` 程序将消息从 `input` 重定向到 `output`
alias relay='cargo run --package sea-streamer-socket --features=executables,backend-kafka,backend-redis --bin relay'
```

这是如何从 Stdio ➡️ Redis / Kafka 流的示例。我们使用 `clock` 生成消息，然后将其通过管道传递给 `relay`，
然后它再流向 Redis / Kafka：

```shell
# Stdio -> Redis
clock -- --stream clock --interval 1s | \
relay -- --input stdio:///clock --output redis://localhost:6379/clock
# Stdio -> Kafka
clock -- --stream clock --interval 1s | \
relay -- --input stdio:///clock --output kafka://localhost:9092/clock
```

这是如何在 Redis ↔️ Kafka 之间流的示例：

```shell
# Redis -> Kafka
relay -- --input redis://localhost:6379/clock --output kafka://localhost:9092/clock
# Kafka -> Redis
relay -- --input kafka://localhost:9092/clock --output redis://localhost:6379/clock
```

这是如何从 Kafka / Redis *重播* 流的示例：

```shell
relay -- --input redis://localhost:6379/clock --output stdio:///clock --offset start
relay -- --input kafka://localhost:9092/clock --output stdio:///clock --offset start
```

## Stdio 消息格式

您可以向标准输入写入任何有效的 UTF-8 字符串，每一行都将被视为一条消息。此外，您还可以用简单格式写入一些消息元数据：

```log
[timestamp | stream_key | sequence | shard_id] payload
```

注意：方括号是字面的 `[` `]`。

以下都是有效的：

```log
一个普通的原始消息
[2022-01-01T00:00:00] { "payload": "anything" }
[2022-01-01T00:00:00.123 | my_topic] "a string payload"
[2022-01-01T00:00:00 | my-topic-2 | 123] ["array", "of", "values"]
[2022-01-01T00:00:00 | my-topic-2 | 123 | 4] { "payload": "anything" }
[my_topic] a string payload
[my_topic | 123] { "payload": "anything" }
[my_topic | 123 | 4] { "payload": "anything" }
```

以下都是无效的：

```log
[Jan 1, 2022] { "payload": "anything" }
[2022-01-01T00:00:00] 12345
```

如果没有给出流键，则会分配名为 `broadcast` 的键，并发送给所有消费者。