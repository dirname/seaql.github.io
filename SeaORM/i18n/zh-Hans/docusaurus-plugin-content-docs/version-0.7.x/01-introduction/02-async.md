# 异步编程

在Rust中，异步编程是一个相对较新的发展，直到Rust版本[`1.39`](https://github.com/rust-lang/rust/releases/tag/1.39.0)才得到稳定。异步生态系统正在迅速发展，而SeaORM是首批从设计之初就考虑到异步支持的库之一。

首先需要了解的是`Future`特质\[1\]。它是为将来计算并返回某个值的函数预留的位置。它是惰性的，意味着必须调用`.await`才能执行任何实际工作。`Future`使我们能够以极少的编程努力实现并发，例如使用[`future::join_all`](https://docs.rs/futures/latest/futures/future/fn.join_all.html)来并行执行多个查询。

其次，在Rust中，`async`是带有语法糖的[多线程编程](https://rust-lang.github.io/async-book/03_async_await/01_chapter.html)。`Future`可能在各线程间移动，因此在异步体中使用的任何变量都必须能够在各线程间传递，即满足[`Send`](https://doc.rust-lang.org/nomicon/send-and-sync.html)特质。

第三，Rust中有多种异步运行时。无可争议的是，[`actix`](https://crates.io/crates/actix)，[`async-std`](https://crates.io/crates/async-std)和[`tokio`](https://crates.io/crates/tokio)是最广泛使用的三种。SeaORM底层的驱动器，[`SQLx`](https://crates.io/crates/sqlx)，同时支持这三种。

理解这些概念对于开始在Rust中进行异步编程至关重要。