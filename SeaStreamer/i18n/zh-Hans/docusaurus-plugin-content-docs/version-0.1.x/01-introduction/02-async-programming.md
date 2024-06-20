# 在 Rust 中的异步编程

在 Rust 中的异步编程是一个近期的发展，仅在 Rust `1.39` 版本中稳定下来\[1\]。异步生态系统正在迅速发展，而 SeaStreamer 是一个仅支持异步的库。

首先需要学习的概念是 [`Future`](https://rust-lang.github.io/async-book/02_execution/02_future.html) 特性。`Future` 让我们能够以很少的编程工作实现并发，例如使用 [`future::join_all`](https://docs.rs/futures/latest/futures/future/fn.join_all.html) 并行执行多个任务。

第二个需要学习的概念是 [`Stream`](https://docs.rs/futures-core/latest/futures_core/stream/trait.Stream.html) 特性。它就像 [`Iterator`](https://doc.rust-lang.org/std/iter/trait.Iterator.html)，但它是异步的。它非常强大，允许我们通过组合 `Map`、`Filter` 和 `Fold` 来以人体工程学的方式操纵流。

第三，Rust 中有多种异步运行时。[`async-std`](https://crates.io/crates/async-std) 和 [`tokio`](https://crates.io/crates/tokio) 是生产中最广泛使用的两种，SeaStreamer 同时支持它们。这些异步运行时是多线程的，这意味着一个 Future 可能在不同的线程间移动，但这只能发生在 `.await` 点。存在真正的并行性——因此，竞争条件和竞争可能会发生。

理解这些概念对于掌握 Rust 中实时异步编程至关重要。