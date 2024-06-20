# 流处理器

[`Streamer`](https://docs.rs/sea-streamer/*/sea_streamer/trait.Streamer.html) 特性定义了流处理客户端的通用接口。

## `ConnectOptions`

### `timeout`

为所有连接设置默认的网络超时时间。

## `connect`

建立与流服务器的连接。`Streamer` 实现不必保持与服务器的持久连接。

## `disconnect`

从流服务器断开连接。目的是刷新剩余的消息并优雅地退出。你必须等待此操作完成。一旦调用此方法，所有创建的生产者和消费者将变得无法使用。

## `create_producer`

创建一个流向指定流的生产者。

## `create_generic_producer`

创建一个可以流向任何流的通用生产者。

## `create_consumer`

创建一个订阅指定流的消费者。