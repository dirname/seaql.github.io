# 配置特性

## Cargo

首先，请在我们的[GitHub仓库](https://github.com/SeaQL/sea-streamer)上给我们点个星！您的支持对于SeaStreamer的持续开发至关重要。

然后，在你的`Cargo.toml`文件中的`[dependencies]`部分添加`sea-streamer`。

```toml title="Cargo.toml"
sea-streamer = { version = "0.1", features = [ <BACKEND>, <ASYNC_RUNTIME> ] }
```

`sea-streamer`是一个门面包。如果你不启用任何特性，它只会导出`sea-streamer-types`中的类型，
这允许你使用这些特性和类型开发*纯包*，而不会将任何后端包拉入依赖树中。

## BACKEND: `kafka`, `stdio` & `socket`

SeaStreamer目前支持两个后端：Kafka和Stdio。
每个后端都有自己的支持包，并且它们都实现了同一组抽象特性。
区分各包之间的符号很容易，因为它们都以`Kafka*`或`Stdio*`开头。

然而，这些抽象是静态的：你必须在编译时指定具体的`Streamer`类型。
为了实现*运行时抽象*，你可以启用`socket`标志并使用`Sea*`类型。

以下是类型名称的总结：

| 特性 | Kafka | Stdio | Socket |
| :---: | :---: | :---: | :----: |
| Streamer | KafkaStreamer | StdioStreamer | SeaStreamer |
| Producer | KafkaProducer | StdioProducer | SeaProducer |
| Consumer | KafkaConsumer | StdioConsumer | SeaConsumer |
| Message | KafkaMessage | StdioMessage | SeaMessage |
| ConnectOptions | KafkaConnectOptions | StdioConnectOptions | SeaConnectOptions |

## ASYNC_RUNTIME: `runtime-async-std` & `runtime-tokio`

SeaStreamer目前支持两种异步运行时：async-std与Tokio。启用你需要的那个。
也有一些运行时泛型函数帮助你构建同时支持两种运行时的应用程序。