# 进程内

以下是您如何组织一个中到大规模的流处理项目的方式。您有多个实现不同处理器的包，每个包都在工作空间中依赖于 `sea-streamer`。现在，您想构建一个下游包，在其中将几个处理器连接起来进行测试。

## 标准输入输出（Stdio）

您可以通过设置 Stdio 的 [loopback](https://docs.rs/sea-streamer-stdio/*/sea_streamer_stdio/struct.StdioConnectOptions.html#method.set_loopback) 选项来执行涉及多个处理器的测试，其中生成的消息将反馈给同一进程中的消费者。

这仅仅是 `cargo test`，没有任何外部依赖或副作用，因此执行速度非常快。为每个测试用例使用一个唯一的流键。因此，如果测试失败，您将能够从标准输出日志中诊断问题。您可以查看 [完整示例](https://github.com/SeaQL/sea-streamer/blob/main/sea-streamer-stdio/tests/loopback.rs)。

```rust
let stream = StreamKey::new("hello")?;
let mut options = StdioConnectOptions::default();
options.set_loopback(true);
let streamer = StdioStreamer::connect(StreamerUri::zero(), options).await?;
let producer = streamer.create_producer(stream.clone(), Default::default()).await?;
let mut consumer = streamer.create_consumer(&[stream.clone()], Default::default()).await?;

for i in 0..5 {
    let mess = format!("{}", i);
    producer.send(mess)?;
}

let seq = collect(&mut consumer, 5).await;
assert_eq!(seq, [0, 1, 2, 3, 4]);
```

## 文件

您可以使用文件后端向同一个文件生产和消费。您可能希望使用随机的文件名以避免与其他进程产生干扰。

文件后端只是对 tokio / async-std 的异步文件 I/O 的一个薄抽象层。没有涉及网络协议，所以在吞吐量方面尽可能原始。

请查看 [完整示例](https://github.com/SeaQL/sea-streamer/blob/main/sea-streamer-file/tests/producer.rs)。

```rust
use sea_streamer_file::FileId;
use sea_streamer_types::Timestamp;
use std::fs::OpenOptions;

pub fn temp_file(name: &str) -> Result<FileId, std::io::Error> {
    let path = format!("/tmp/{name}");
    let _file = OpenOptions::new()
        .read(true)
        .write(true) // 确保我们有写权限
        .create_new(true) // 如果此文件已存在则失败
        .open(&path)?;

    Ok(FileId::new(path))
}
```