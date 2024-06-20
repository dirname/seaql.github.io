# SeaORM 概念

在 SeaORM 中，包含一系列表的数据库被称为 `Schema`。

每个表对应 SeaORM 中的一个 [`Entity`](03-generate-entity/02-entity-structure.md#entity)，它帮助你对相关表执行 `CRUD`（创建、读取、更新和删除）操作。

`Entity` 特性提供了一个 API，使你可以在运行时检查其属性（[`Column`](03-generate-entity/02-entity-structure.md#column)、[`Relation`](03-generate-entity/02-entity-structure.md#relation) 和 [`PrimaryKey`](03-generate-entity/02-entity-structure.md#primary-key)）。

每个表有多个列，这些列被称为 `属性`。

这些属性及其值被组织在一个 Rust 结构体（一个 [`Model`](03-generate-entity/03-expanded-entity-structure.md#model)）中，以便你可以操纵它们。

但是，`Model` 仅用于读取操作。为了执行插入、更新或删除，你需要使用带有每个属性元数据的 [`ActiveModel`](03-generate-entity/03-expanded-entity-structure.md#active-model)。

最后，SeaORM 中没有单例（全局上下文）。应用程序代码负责管理 [`DatabaseConnection`](02-install-and-config/03-connection.md) 的所有权。我们确实为包括 [Rocket](https://github.com/SeaQL/sea-orm/tree/master/examples/rocket_example)、[Actix](https://github.com/SeaQL/sea-orm/tree/master/examples/actix_example)、[axum](https://github.com/SeaQL/sea-orm/tree/master/examples/axum_example) 和 [poem](https://github.com/SeaQL/sea-orm/tree/master/examples/poem_example) 在内的 Web 框架提供了集成示例，以帮助你快速入门。