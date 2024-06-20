# 什么是查询构建器

SeaQuery 是一个查询构建器，帮助你在 Rust 中构建动态 SQL 查询。
你可以使用符合人体工程学的 API 构建表达式、查询和模式为抽象语法树。
我们在适当的情况下通过通用接口对齐了 MySQL、Postgres 和 SQLite 的行为。

我们提供了与 [SQLx](https://crates.io/crates/sqlx)、
[postgres](https://crates.io/crates/postgres) 和 [rusqlite](https://crates.io/crates/rusqlite) 的集成。
请参阅 [示例](https://github.com/SeaQL/sea-query/blob/master/examples) 了解用法。

SeaQuery 是 [SeaORM](https://github.com/SeaQL/sea-orm) 的基础，这是一个异步且动态的 Rust ORM。