# 流处理简介

“[将数据库翻转](https://www.confluent.io/blog/turning-the-database-inside-out-with-apache-samza/)” 是数据工程领域中一篇有影响力的文章，它促成了[Kafka](https://kafka.apache.org/)的诞生。从那时起，诸如[Redpanda](https://redpanda.com/)和[Redis Streams](https://redis.io/docs/manual/data-types/streams/)等实现相继出现，推动了实时数据处理生态系统的形成。

## 与基于事件编程对比

流处理与基于事件的编程类似，都旨在处理近乎实时或在事件发生时发生的事件。区分两者的一种方式可能是频率。流是具有高吞吐量的连续事件序列：不是建立许多短寿命的连接，而是简单地保持一个连接打开。

## 与分析处理对比

假设我们想计算在特定时间段内某属性的平均值。OLAP数据库允许我们在包含数百万行的非常大的表上高效地计算这个值。要在流处理中实现相同的目标，我们可以重播流并将其通过流处理器，这可能被认为较慢。一旦处理器稳定运行，输出就可以实时更新，延迟极小。

## 为什么选择Rust？

我们希望构建最佳的流处理平台，在这里Rust的独特特性真正得以展现：

### 多线程异步

与其他语言不同，Rust的异步执行是多线程的。它允许你根据需要扩展进程，使用尽可能多的线程来充分利用CPU，以达到最大并发性。

### 可预测的延迟

作为一种没有垃圾回收的语言，不存在随机时间点垃圾收集器启动并导致抖动的情况。当你有一个长管道时，这些抖动倾向于向下游传播并放大。Rust本身并不自动具备低延迟，但你仍需付出相当的努力进行优化。但你会有一个良好的起点。

### 自包含

与其他语言不同，推荐的Rust程序打包方式是静态链接所有内容到一个可执行文件中——通常只有几兆字节大小。并且无需安装或预热，它立即启动，这对流处理来说是一个额外的好处。

### 资源消耗低

与其他编译型语言一样，Rust比基于虚拟机的语言使用显著较少的内存。而且由于不需要即时编译（JIT），Rust也具有更少的CPU开销。

### 长期运行安全

再次，没有GC，Rust程序不太容易受到“几天内缓慢的内存膨胀”（技术上讲，这不是泄漏）的影响。内存溢出崩溃的风险较小，因此你不必“每周重启一次进程”。当然，你仍然需要注意堆分配。

### 生态系统

最后，Rust拥有丰富的异步编程库生态系统：基于异步IO构建的网络库、无锁通道以及其他数据结构，使异步编程既符合人体工学又充满乐趣。

话不多说，让我们开始吧！