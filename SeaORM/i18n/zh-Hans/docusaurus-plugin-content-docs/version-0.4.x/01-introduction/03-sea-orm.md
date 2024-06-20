# SeaORM 概念

在 SeaORM 中，包含一系列表的数据库被称为“模式”（`Schema`）。

每个表对应 SeaORM 中的一个 [`实体`](03-generate-entity/02-entity-structure.md#entity)，它帮助你对相关表执行 `CRUD`（创建、读取、更新和删除）操作。

`Entity` 特性提供了一个 API，允许你在运行时检查其属性（[`列`](03-generate-entity/02-entity-structure.md#column)、[`关系`](03-generate-entity/02-entity-structure.md#relation) 和 [`主键`](03-generate-entity/02-entity-structure.md#primary-key)）。

每个表有多个列，这些被称为“属性”。

这些属性及其值被分组在一个 Rust 结构体中，以便你可以操作它们，我们称这些为 [`模型`](03-generate-entity/02-entity-structure.md#model)。

但是，`Model` 仅用于读取操作。要执行插入、更新或删除，你需要使用一个在每个属性上附加元数据的 [`活动模型`](03-generate-entity/02-entity-structure.md#active-model)。

最后，SeaORM 中没有单例（全局上下文）。应用程序代码负责管理 [`DatabaseConnection`](02-install-and-config/03-connection.md) 的所有权。我们确实为包括 [Rocket](https://github.com/SeaQL/sea-orm/tree/master/examples/rocket_example)、[Actix](https://github.com/SeaQL/sea-orm/tree/master/examples/actix_example) 和 [axum](https://github.com/SeaQL/sea-orm/tree/master/examples/axum_example) 在内的 Web 框架提供了集成示例，以帮助你快速入门。