# 异步编程

在Rust中，异步编程是一个相对较新的发展，直到Rust版本[`1.39`](https://github.com/rust-lang/rust/releases/tag/1.39.0)才得到稳定。异步生态系统正在迅速发展，而SeaORM是首批从设计之初就考虑到异步支持的库之一。

首先需要了解的是`Future`特质[1]。它是对一个函数的占位符，该函数将在未来计算并返回某个值。它是惰性的，意味着必须调用`.await`才能执行任何实际工作。`Future`使我们能够以很少的编程努力实现并发，例如使用[`future::join_all`](https://docs.rs/futures/latest/futures/future/fn.join_all.html)来并行执行多个查询。

其次，在Rust中，`async`是带有语法糖的多线程编程[2]。一个`Future`可能在不同线程间移动，因此在异步体中使用的任何变量都必须能够在线程间传递，即满足`Send`特质[3]。

第三，Rust中有多种异步运行时。`async-std`和`tokio`是最广泛使用的两个。SeaORM底层驱动`SQLx`同时支持这两个运行时。

了解这些概念对于让你开始使用Rust的异步功能至关重要。

[1]: https://rust-lang.github.io/async-book/02_execution/02_future.html
[2]: https://rust-lang.github.io/async-book/03_async_await/01_chapter.html
[3]: https://doc.rust-lang.org/nomicon/send-and-sync.html

请注意，上述链接并未翻译。在实际文档中，你应该将链接指向中文版的相应页面，如果存在的话。