# 星尘SQL 概念

在深入了解细节之前，重要的是要从宏观层面掌握以下基本概念：

## 实体

*例如：Crate*

具有自身意义的、需要存储和处理的数据。

在数据库中，实体可以是同质的（如在 crates.io 示例中，所有实体都仅仅是“crates”）或异质的（比如我们区分“库 crates”和“应用 crates”，并将其表示为不同的实体）。

## 节点

*例如：serde、rand、sea-orm*

实体的一个实例。

## 关系

*例如：依赖*

实体之间的关系。它可以是有向的或无向的（双向等效）。[^1]

## 边

*例如：sea-orm -depends-on-> serde*

关系的一个实例。两个节点之间的连接。

## 图

包含一组节点 N 和一组边 E 的数据结构，其中 E 必须仅使用 N 中的节点。

## 属性

*例如：版本*

附加到每个节点或边上的数量（数值、标量值）和质量（分类、枚举标签）。[^2]

## 查询

从数据库中提取数据的描述。

查询结果可以是一个图、一个向量（节点集合）或一个标量值。

## 约束

*例如：最多遍历3级深度、仅包括至少有3条边的节点*

执行查询时，对图遍历的要求或对拓扑的条件。

## 条件

*例如：version = "0.0.1"*

执行查询时，应用于节点和边（通常基于属性）的过滤器。

[^1]: 目前为止，开发主要集中在有向图上。因此，一些功能尚未在无向图上进行彻底测试。

[^2]: 目前只支持节点属性。