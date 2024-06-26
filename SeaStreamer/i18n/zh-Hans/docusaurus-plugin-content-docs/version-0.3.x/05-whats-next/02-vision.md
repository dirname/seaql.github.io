# 愿景

我们希望让 Rust 成为最佳的数据工程平台，从开发到生产，工具应有尽有。

以下只是我的部分设想，希望有一天我们能够实现它们！

## 流的 `sed`

既然我们谈到了 shell，如果能有一种类似于 `sed` 的工具，让我们能够用脚本语言来过滤、转换和组合结构化消息，那将非常棒。

## 进程间通信

目前，管道是连接处理器的唯一机制，这会带来大量的复制。在一些高吞吐量的场景下，共享内存可能会表现得更好。

## 主机间通信

现在跨主机通信唯一的方式是依赖于流服务器。在一个容器化的环境中，允许处理器通过 TCP 流进行私密通信可能更有意义。

## 你的想法

如果你有任何想法或见解，欢迎加入我们的 [讨论](https://github.com/SeaQL/sea-streamer/discussions)！