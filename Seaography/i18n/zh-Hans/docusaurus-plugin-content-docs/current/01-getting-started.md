# 开始使用

## 安装 SeaORM 和 Seaography CLI

```bash
cargo install sea-orm-cli@^0.12
cargo install seaography-cli@1
```

## CLI 参数

```bash
🧭 一个为 SeaORM 设计的 GraphQL 框架和代码生成器

用法: seaography-cli [OPTIONS] <DESTINATION> <ENTITIES> <DATABASE_URL> <CRATE_NAME>

参数:
  <DESTINATION>   项目目标文件夹
  <ENTITIES>      SeaORM 实体文件夹
  <DATABASE_URL>  写入 .env 的数据库 URL
  <CRATE_NAME>    生成项目的包名

选项:
  -f, --framework <FRAMEWORK>
          使用哪个 Web 框架 [默认值: poem] [可能的值: actix, poem]
      --depth-limit <DEPTH_LIMIT>
          GraphQL 深度限制
      --complexity-limit <COMPLEXITY_LIMIT>
          GraphQL 复杂度限制
  -h, --help
          打印帮助信息
  -V, --version
          打印版本信息
```

* `DATABASE_URL` 示例：`mysql://user:pass@127.0.0.1:1235/database_name`，`postgres://user:pass@127.0.0.1/base_name`，`sqlite://my_db.db`

## 先决条件

为了理解生成的代码是如何工作的，建议学习以下资源：

1. [async-graphql](https://docs.rs/async-graphql/latest/async_graphql/)

    这是一个 Rust 语言的服务器端 GraphQL 库。

2. [sea-orm](https://docs.rs/sea-orm/latest/sea_orm/)

    SeaORM 是一个关系型 ORM，帮助您用 Rust 构建 Web 服务。

3. 生成项目的 Web API

    [poem](https://docs.rs/crate/poem/latest)
    [actix](https://docs.rs/crate/actix/latest)

4. [tokio*](https://docs.rs/tokio/latest/tokio/)

    这是一个运行时环境，用于使用 Rust 编程语言编写可靠、异步且精简的应用程序。