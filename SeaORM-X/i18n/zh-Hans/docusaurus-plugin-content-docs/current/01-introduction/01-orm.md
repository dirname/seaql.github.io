# 什么是 SeaORM X

SeaORM X 指的是 SeaORM 扩展版，它基于 SeaORM 构建，增加了对其他数据库后端的支持。SeaORM X 的架构保持不变。

MSSQL（即 SQL Server）后端基于 `tiberius`，未来可能会采用 `SQLx Pro`。我们在驱动库中实现了许多额外功能，包括：事务（和嵌套事务）、连接池以及对多种异步运行时的支持。

SeaQuery X 扩展了 SeaQuery，添加了对 MSSQL 查询构建和 MSSQL 特定类型、语句及语法的支持。

SeaSchema X 扩展了 SeaSchema，添加了对 MSSQL 模式定义、发现、序列化和重构的支持。

SeaORM X 扩展了 SeaORM，集成了 SeaQuery X 和 SeaSchema X，并为 MSSQL 提供全面支持，同时解决 MSSQL 的独特之处。我们的目标是通过移植所有测试用例和示例，辅以 MSSQL 特定文档，提供与 SeaORM 同等优秀的体验。

所有库都是其开源版本的超集，因此可以在同一代码库中实现 MySQL 和 MSSQL 的互操作。

未来，我们还计划将 Seaography 包含在内，使开发人员能够轻松创建管理仪表板。

SeaORM X 现处于封闭测试阶段，将基于 SeaORM `1.0`，这意味着 API 表面将保持稳定并获得长期支持。我们提供评估许可和生产许可，包括两个级别的支持。如果您感兴趣，请[联系我们](https://forms.office.com/r/1MuRPJmYBR)获取定价信息。