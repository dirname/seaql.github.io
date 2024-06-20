# 路线图

感谢您阅读到本章的文档。请再次允许我请求，如果您觉得这个项目有趣或有用，请给我们的[GitHub仓库](https://github.com/SeaQL/sea-streamer)点个星！您的支持对SeaStreamer的持续开发至关重要。

以下是接下来我们计划开发的一些主要组件：

## `sea-streamer-file`: 文件后端

这与`sea-streamer-stdio`非常相似，但不同之处在于`sea-streamer-stdio`实时工作，而`sea-streamer-file`不仅实时工作，还支持重播。这意味着，`sea-streamer-file`有能力在`.ss`（sea-stream）文件中定位，并定位/倒回到特定的时间戳/偏移量。

此外，`stdio`只能处理UTF-8文本数据，而`file`能够处理二进制数据。

我们可能能够将消费者状态提交到本地SQLite数据库，从而实现事务性行为。

## `sea-streamer-redis`: Redis集群

Redis支持已在`sea-streamer` `0.2`版本中发布！基本的流分片已经实现，但没有集群的分片并不是非常实用。

将来，我们希望支持Redis集群，目前这基本上是一个进行中的工作。这是一个相当艰巨的任务，因为在与集群一起工作时，客户端需要承担责任。
在Redis中，分片和节点是一种动态的M-N映射 - 分片可以在任何时候在节点之间移动。
这使得测试变得更加困难。

在Redis中，同一组的消费者共享相同的分片，即共享分片。将来，我们希望支持“独有分片”语义，每个消费者都将尝试声明对一个分片的所有权，而组中的其他消费者不会介入。这模仿了Kafka的消费者组行为。

如果您愿意帮忙，请告诉我们！

## 您的提议

如果您有任何想法和经验，欢迎加入我们的[讨论](https://github.com/SeaQL/sea-streamer/discussions)！