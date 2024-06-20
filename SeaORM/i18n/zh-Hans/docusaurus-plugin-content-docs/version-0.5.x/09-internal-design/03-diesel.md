# 与 Diesel 的比较

[SeaORM](https://github.com/SeaQL/sea-orm) 和 [Diesel](https://github.com/diesel-rs/diesel) 共享同一个目标：为您提供一个与数据库交互的完整解决方案。

SeaORM 和 Diesel 都支持 MySQL、PostgreSQL 和 SQLite，所以无论选择哪一个您都不会受到限制。尽管 Diesel 允许第三方实现自定义后端，但 SeaORM 不支持这一点。

还有一些我们选择以不同方式处理的事情。

## 架构

首先，可能是最受期待的功能之一：异步 Rust 支持。虽然使用异步可能不会立即为您带来更好的性能，但异步编程是一个您需要尽早做出的架构决策。通过选择 SeaORM，我们一起期待 Rust 的异步生态系统逐渐成熟。

在内部，SeaORM 结合 [SQLx](https://crates.io/crates/sqlx) 向您提供了纯 Rust 技术栈。Diesel 默认使用本机驱动程序，如果您想用纯 Rust 驱动程序替换它，可能需要一些努力。每一方都有其优缺点，因此这取决于您的偏好。

SeaORM 采用了模块化设计。如果您不喜欢 ORM 这个概念，您肯定会想要使用 [SeaQuery](https://crates.io/crates/sea-query)，这是底层查询构建器。它轻量级且可以轻松地集成到任何项目中。当使用 SeaORM 时，SeaQuery API 同样对您开放，因此您可以在享受高级抽象的好处的同时，在需要时仍拥有灵活的查询构建器的力量。

## 编程范式

除了同步与异步的基础之外，Diesel 和 SeaORM 之间最大的区别在于静态与动态。

Diesel 提供了一个全编译时的 API，其中类型可以完全静态地检查。您也可以用 Diesel 执行动态查询，但会失去一些编译时类型检查的好处。

SeaORM 是动态的，其中事物在运行时建立。它提供了更多的灵活性。虽然您失去了一些编译时的检查，但 SeaORM 通过测试帮助您证明正确性。

这两个库都大量使用了特质和泛型，但 SeaORM 生成的类型较少：在 Diesel 中的每一列都是一个结构体（每个结构体实现了几个特质），而在 SeaORM 中的每一列是一个枚举变体（实体的所有列一起形成一个枚举，这个枚举实现了某些特质）。

在 SeaORM 中也没有深度嵌套的泛型（例如 `A<B<C<D<E>>>>`）。

## 模式生成器

虽然在 Diesel 生态系统中有像 [barrel](https://git.irde.st/spacekookie/barrel) 这样的优秀库，但 SeaQL 维护了模式构建（SeaQuery）和管理 ([SeaSchema](https://github.com/SeaQL/sea-schema)) 的工具。这意味着一个熟悉的 API 和统一的体验。

## 相似之处

无论是 Diesel 还是 SeaORM 都是以模式为中心的，意味着一切从您现有的数据库模式开始，而不是从您的面向对象编程类开始。

无论是 Diesel 还是 SeaORM 都是关系型的，意味着您可以使用定义的关系执行复杂的连接操作。

## 最后的总结

Diesel 是 Rust 生态系统中一个成熟稳固的库。SeaORM 非常新。两者都无法替代对方。我们希望 Rust 社区能够一起变得更加强大。