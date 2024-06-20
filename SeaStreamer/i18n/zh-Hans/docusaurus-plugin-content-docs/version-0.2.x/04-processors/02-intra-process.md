# 进程内

以下是您如何组织一个中到大规模的流处理项目的方式。您有多个实现不同处理器的包，每个包都在工作区中依赖于 `sea-streamer`。现在，您想构建一个下游包，在其中将几个处理器连接在一起进行测试。

您可以通过设置 Stdio 的 [loopback](https://docs.rs/sea-streamer-stdio/*/sea_streamer_stdio/struct.StdioConnectOptions.html#method.set_loopback) 选项来执行涉及多个处理器的测试，这样在同一个进程中生成的消息会被反馈给消费者。

以下是对这种行为的说明，您可以查看 [完整示例](https://github.com/SeaQL/sea-streamer/blob/main/sea-streamer-stdio/tests/loopback.rs)。这仅仅是运行 `cargo test` 而无需任何先决条件。如果测试失败，您将能够从 stdout 日志中诊断问题。

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