# 异步编程

在Rust中，异步编程是一个相对较新的发展，直到Rust版本[`1.39`](https://github.com/rust-lang/rust/releases/tag/1.39.0)才得到稳定。异步生态系统正在迅速发展，而SeaORM是首批从设计之初就考虑到异步支持的库之一。

首先需要了解的是`Future`特质\[1\]。它是对一个函数的占位符，该函数将在未来计算并返回某个值。它是惰性的，意味着必须先调用`.await`才会发生任何事情。通过`Future`，我们能够以较少的编程努力实现并发，例如使用[`future::join_all`](https://docs.rs/futures/latest/futures/future/fn.join_all.html)来并行执行多个查询。

其次，在Rust中，`async`是带有语法糖的多线程编程\[2\]。一个`Future`可以在不同的线程之间移动，因此在异步体中使用的任何变量都必须能够在线程间传递，即满足[`Send`](https://doc.rust-lang.org/nomicon/send-and-sync.html)特质。

第三，Rust中有多种异步运行时环境。无可争议的是，[`actix`](https://crates.io/crates/actix)，[`async-std`](https://crates.io/crates/async-std)和[`tokio`](https://crates.io/crates/tokio)是最广泛使用的三种。SeaORM底层的驱动程序，[`SQLx`](https://crates.io/crates/sqlx)，同时支持这三种运行时。

了解这些概念对于开始在Rust中进行异步编程至关重要。