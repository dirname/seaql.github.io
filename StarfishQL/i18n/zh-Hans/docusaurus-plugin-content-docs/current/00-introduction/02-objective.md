# 目标

StarfishQL 是一个框架，用于提供 **图数据库** 和与其交互的 **图查询引擎**。

在整个文档中，使用了一个具体示例（*Freeport*），涉及在 [crates.io](https://crates.io/) 上的 crate 依赖关系图，以此进行说明。通过这个例子，你可以看到 StarfishQL 在实际中的应用。

最终，我们感兴趣的是进行 **图分析**，即从简单的图数据中提取有意义的信息。为了实现这一点，我们相信 **可视化** 是一个关键的辅助工具。

StarfishQL 的查询引擎设计为能够通过使用灵活的查询语言融入各种形式的可视化。然而，项目的开发主要围绕以下内容，如我们在 [演示应用](https://starfish-ql.sea-ql.org/) 中所展示的。

## 前 N 大依赖项

明亮图像[^1]。

从连接最多的 N 个节点开始，以正常方向遍历图。

## 依赖项与依赖者

明亮图像[^2]。

从根节点开始，同时在正常和反转方向上遍历图。

[^1]: ![前 N 大依赖项展示](/img/graph_example.png)

[^2]: ![依赖项与依赖者展示](/img/tree_example.png)