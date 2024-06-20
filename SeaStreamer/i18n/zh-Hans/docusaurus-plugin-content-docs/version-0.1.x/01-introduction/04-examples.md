# 示例处理器

我们维护了一套[示例](https://github.com/SeaQL/sea-streamer/tree/main/examples)，您可以将其作为开发流处理器的起点。

这些示例适用于`tokio`和`async-std`，并使用了`sea-streamer-socket` API：

+ [`consumer`](https://github.com/SeaQL/sea-streamer/blob/main/examples/src/bin/consumer.rs): 基本消费者
+ [`producer`](https://github.com/SeaQL/sea-streamer/blob/main/examples/src/bin/producer.rs): 基本生产者
+ [`processor`](https://github.com/SeaQL/sea-streamer/blob/main/examples/src/bin/processor.rs): 基本流处理器
+ [`resumable`](https://github.com/SeaQL/sea-streamer/blob/main/examples/src/bin/resumable.rs): 可从上次中断处继续的流处理器
+ [`buffered`](https://github.com/SeaQL/sea-streamer/blob/main/examples/src/bin/buffered.rs): 具有内部缓冲和批量处理的高级流处理器
+ [`blocking`](https://github.com/SeaQL/sea-streamer/blob/main/examples/src/bin/blocking.rs): 处理阻塞/CPU密集型任务的高级流处理器

## 运行基本处理器示例

使用Kafka：

```bash
# 生成一些输入
cargo run --bin producer -- --stream kafka://localhost:9092/hello1 &
# 启动处理器，产生一些输出
cargo run --bin processor -- --input kafka://localhost:9092/hello1 --output kafka://localhost:9092/hello2 &
# 回放输出
cargo run --bin consumer -- --stream kafka://localhost:9092/hello2
# 记得停止进程
kill %1 %2
```

使用Stdio：

```bash
# 将生产者管道到处理器
cargo run --bin producer -- --stream stdio:///hello1 | \
cargo run --bin processor -- --input stdio:///hello1 --output stdio:///hello2
```

## 运行可恢复处理器示例

可恢复处理器可以随时被杀死，并将从上次中断的地方继续。
这通常被称为“至少一次”处理，意味着不应该跳过任何消息，
但同样的消息可能会被处理两次。

```bash
# 生成大量输入
cargo run --bin producer -- --stream kafka://localhost:9092/hello1
# 运行处理器，但在它能处理完整个流之前将其杀死
cargo run --bin resumable -- --input kafka://localhost:9092/hello1 --output stdio:///hello2 | head -n 10
cargo run --bin resumable -- --input kafka://localhost:9092/hello1 --output stdio:///hello2 | head -n 10
cargo run --bin resumable -- --input kafka://localhost:9092/hello1 --output stdio:///hello2 | head -n 10
```

输出：

```log
[2023-02-28T10:13:59 | hello2 | 0] "tick 0" processed
[2023-02-28T10:13:59 | hello2 | 1] "tick 1" processed
[2023-02-28T10:13:59 | hello2 | 2] "tick 2" processed
...
[2023-02-28T10:13:59 | hello2 | 9] "tick 9" processed
thread 'sea-streamer-stdio-stdout' panicked at 'failed printing to stdout: Broken pipe (os error 32)', library/std/src/io/stdio.rs:1009:9

[2023-02-28T10:14:08 | hello2 | 0] "tick 10" processed
...
[2023-02-28T10:14:08 | hello2 | 9] "tick 19" processed
thread 'sea-streamer-stdio-stdout' panicked at 'failed printing to stdout: Broken pipe (os error 32)', library/std/src/io/stdio.rs:1009:9

...
```

## 运行缓冲处理器示例

时钟运行速度是处理器的10倍，所以我们期望每批大约包含10条消息。

当输入流频率高，而处理器具有高阻抗时，这种模式非常有用。

<details>
  <summary>更深入的技术讨论：</summary>
例如，向数据库插入记录，批量插入更为高效。但是你不能天真地将批量大小固定为10或100，因为它可能已经缓冲了9条消息，正在等待第10条，而且你无法处理突然的消息爆发。

那么，如何最小化整体任务执行时间？你解开两个忙循环，使用一个队列松散地连接它们：现在两个循环都可以以它们的最佳频率旋转，从而最大化处理器的整体吞吐量。
</details>

```bash
alias clock='cargo run --package sea-streamer-stdio --features=executables --bin clock'
clock -- --stream clock --interval 100ms | \
cargo run --bin buffered -- --input stdio:///clock --output stdio:///output
```

输出：

```log
[2023-02-27T10:43:58 | output | 0] [batch 0] { "tick": 0 } processed
[2023-02-27T10:43:59 | output | 1] [batch 1] { "tick": 1 } processed
[2023-02-27T10:43:59 | output | 2] [batch 1] { "tick": 2 } processed
[2023-02-27T10:43:59 | output | 3] [batch 1] { "tick": 3 } processed
[2023-02-27T10:43:59 | output | 4] [batch 1] { "tick": 4 } processed
[2023-02-27T10:43:59 | output | 5] [batch 1] { "tick": 5 } processed
[2023-02-27T10:43:59 | output | 6] [batch 1] { "tick": 6 } processed
[2023-02-27T10:43:59 | output | 7] [batch 1] { "tick": 7 } processed
[2023-02-27T10:43:59 | output | 8] [batch 1] { "tick": 8 } processed
...
```

## 运行阻塞处理器示例

时钟运行速度是处理器的3倍，但我们有4个线程，所以我们可以实时赶上。任务随机分配给线程，即“扇出”模式。

当你必须执行阻塞I/O或CPU密集型计算时，这种模式非常有用。

```bash
alias clock='cargo run --package sea-streamer-stdio --features=executables --bin clock'
clock -- --stream clock --interval 333ms | \
cargo run --bin blocking -- --input stdio:///clock --output stdio:///output
```

输出：

```log
[2023-03-07T06:00:52 | output | 0] [thread 0] { "tick": 0 } processed
[2023-03-07T06:00:53 | output | 1] [thread 1] { "tick": 1 } processed
[2023-03-07T06:00:53 | output | 2] [thread 2] { "tick": 2 } processed
[2023-03-07T06:00:53 | output | 3] [thread 3] { "tick": 3 } processed
[2023-03-07T06:00:54 | output | 4] [thread 0] { "tick": 4 } processed
[2023-03-07T06:00:54 | output | 5] [thread 1] { "tick": 5 } processed
[2023-03-07T06:00:54 | output | 6] [thread 2] { "tick": 6 } processed
```