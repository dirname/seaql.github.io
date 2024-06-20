# 🧭 海图简介

如果你现在正在构建带有 Web 图形用户界面的全栈应用，很可能会使用 GraphQL 作为前后端之间的通信接口。GraphQL 的模式是强类型的且自我描述的，毫无疑问，前端开发者们非常喜爱它！

然而，为后端开发者构建 GraphQL 解析器并非易事。尽管 GraphQL 和 SQL 都被认为是关系型的，但它们之间存在着巨大的阻抗不匹配。幸运的是，我们来帮您解决这个问题！

[海图](https://github.com/SeaQL/seaography) 是一个基于 SeaORM 和 [async-graphql](https://github.com/async-graphql/async-graphql) 构建的 GraphQL 框架。结合许多其他的 Rust 库（如 `tokio`、`serde`），我们可以说，Rust 生态系统提供了构建 GraphQL 后端的最佳技术！

SeaORM 从设计上就是动态的。`async-graphql` 在 `v5.0` 中引入了 [动态模式](https://docs.rs/async-graphql/latest/async_graphql/dynamic/index.html)，与 SeaORM 完美契合，因为我们能够将一个 SeaORM 实体升级为 GraphQL 实体。

海图最初作为一个 [2022 年代码之夏项目](https://github.com/SeaQL/summer-of-code/blob/main/2022/README.md#1-a-graphql-framework-on-top-of-seaorm) 开始。它仍处于早期阶段，当前的限制有：1）没有变异操作 2）没有数据加载器，但是即便如此，在原型设计和构建内部使用的管理面板时仍然非常有用。

只需几个命令，你就可以从 SeaORM 实体启动一个 GraphQL 服务器！