# 发展路线图

感谢您阅读到本章节的文档。请再次原谅我的请求，如果您觉得这个项目有趣且有用，请在我们的[GitHub仓库](https://github.com/SeaQL/sea-streamer)上给予星标！您的支持对SeaStreamer的持续开发至关重要。

以下是接下来我们计划开发的一些主要组件：

## `sea-streamer-file`: 文件后端

这与`sea-streamer-stdio`非常相似，但不同之处在于`sea-streamer-stdio`实时工作，而`sea-streamer-file`既能在实时模式下工作，也能进行回放。这意味着，`sea-streamer-file`有能力在`.ss`（海流）文件中查找，并定位/倒回到特定的时间戳/偏移量。

此外，`stdio`只能处理UTF-8文本数据，而`file`能够处理二进制数据。

我们可能能够在本地SQLite数据库中提交消费者状态，从而实现事务性行为。

## `sea-streamer-redis`: Redis后端

Redis Streams是Kafka的一个很好的替代方案。如果SeaStreamer能够在提供相同API的同时支持Redis，那就太好了，这样您的流处理器就可以具有多模式！

我们意识到Redis与Kafka在语义上有相当大的差异，但我们将会尝试对齐它们的行为差异，最有可能通过实现在客户端的额外机制来实现这一点。

## 您的提议

欢迎您加入我们的[讨论区](https://github.com/SeaQL/sea-streamer/discussions)，分享您的想法和经验！