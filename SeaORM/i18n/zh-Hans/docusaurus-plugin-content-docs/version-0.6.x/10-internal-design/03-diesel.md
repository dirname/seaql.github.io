# 与 Diesel 的比较

[SeaORM](https://github.com/SeaQL/sea-orm) 和 [Diesel](https://github.com/diesel-rs/diesel) 都有着相同的目标：为您提供一套完整解决方案，用于数据库接口。

SeaORM 和 Diesel 都支持 MySQL、PostgreSQL 和 SQLite，因此无论选择哪一个您都不会受到限制。尽管 Diesel 允许第三方实现自定义后端，但 SeaORM 不支持此功能。

我们还选择了其他一些不同的做法。

## 架构

首先，可能是最受期待的功能之一：异步 Rust 支持。虽然使用异步可能不会立即为您带来更好的性能，但异步编程是一个您需要尽早做出的架构决策。通过选择 SeaORM，我们一起期待 Rust 的异步生态系统逐渐成熟。

在内部，SeaORM 结合 [SQLx](https://crates.io/crates/sqlx) 向您提供了纯 Rust 技术栈。Diesel 默认使用本机驱动程序，如果您想用纯 Rust 驱动程序替换它，可能需要一些努力。每一方都有其优缺点，所以这取决于您的个人喜好。

SeaORM 采用了模块化设计。如果您不喜欢 ORM 的概念，您肯定会想要使用 [SeaQuery](https://crates.io/crates/sea-query)，即底层查询构建器。它轻量级且可以轻松集成到任何项目中。当您使用 SeaORM 时，SeaQuery API 同样可供您使用，因此您可以在享受高级抽象带来的好处的同时，在需要时仍拥有灵活的查询构建器的力量。

## 编程范式

除了同步与异步的基础区别外，Diesel 和 SeaORM 最大的区别在于静态与动态。

Diesel 提供了一个全编译时的 API，其中类型可以完全静态地检查。您也可以用 Diesel 进行动态查询，但会失去一些编译时类型检查的好处。

SeaORM 是动态的，其中事物在运行时建立。它提供了更多的灵活性。虽然您会失去一些编译时的检查，但 SeaORM 可以帮助您通过测试来证明正确性。

两个库都大量使用了特性（traits）和泛型（generics），但 SeaORM 生成的类型更少：Diesel 中的每一列都是一个结构体（每个结构体实现多个特性），而 SeaORM 中的每一列都是枚举的一个变体（实体的所有列一起构成一个枚举，该枚举实现了一些特性）。

在 SeaORM 中也没有深度嵌套的泛型（例如 `A<B<C<D<E>>>>`）。

## 模式生成器

在 Diesel 生态系统中，有像 [barrel](https://git.irde.st/spacekookie/barrel) 这样的优秀库，而 SeaQL 维护着模式生成（SeaQuery）和管理 ([SeaSchema](https://github.com/SeaQL/sea-schema)) 的工具。这意味着您将获得熟悉的 API 和统一的体验。

## 相似之处

Diesel 和 SeaORM 都是基于模式的，意味着一切都从您现有的数据库模式开始，而不是从您的面向对象编程类开始。

Diesel 和 SeaORM 都是关系型的，意味着您可以对定义的关系进行复杂的连接操作。

## 总结

Diesel 在 Rust 生态系统中是一个成熟稳定的库。SeaORM 刚刚起步。两者都不能替代对方。我们希望 Rust 社区能够一起变得更加强大。