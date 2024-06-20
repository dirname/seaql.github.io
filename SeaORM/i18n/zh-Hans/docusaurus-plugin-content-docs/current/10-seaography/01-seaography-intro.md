# 🧭 海图简介

如果你正在构建带有 Web 图形界面的全栈应用程序，那么很可能会使用 GraphQL 作为前端和后端之间的通信接口。GraphQL 架构是强类型的且自文档化的，毫无疑问，前端开发者们喜欢它们！

然而，为后端开发者构建 GraphQL 解析器并非易事。尽管 GraphQL 和 SQL 都被视为关系型的，但它们之间存在着巨大的阻抗不匹配。幸运的是，我们来帮你解决这个问题！

[海图](https://github.com/SeaQL/seaography) 是一个基于 SeaORM 和 [async-graphql](https://github.com/async-graphql/async-graphql) 构建的 GraphQL 框架。结合许多其他 Rust 库（如 `tokio`、`serde`），我们主张，Rust 生态系统提供了构建 GraphQL 后端的最佳技术！

SeaORM 的设计具有动态性。`async-graphql` 在 `v5.0` 中引入了 [动态架构](https://docs.rs/async-graphql/latest/async_graphql/dynamic/index.html)，与 SeaORM 完美契合，因为我们可以通过 SeaORM 实体将其升级为 GraphQL 实体。

海图最初是一个 [2022 年代码之夏项目](https://github.com/SeaQL/summer-of-code/blob/main/2022/README.md#1-a-graphql-framework-on-top-of-seaorm)。它仍处于早期阶段，当前的限制是：1）没有变异 2）没有数据加载器，但即便如此，在原型设计和构建内部使用的管理面板时仍然有用。

只需几个命令，你就可以从 SeaORM 实体启动一个 GraphQL 服务器！