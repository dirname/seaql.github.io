# 开始使用


## 安装 CLI
```bash
cargo install seaography-cli
```

## CLI 参数

```bash
seaography-cli

用法:
    seaography-cli [选项] <DATABASE_URL> <CRATE_NAME> <DESTINATION>

参数:
    <DATABASE_URL>                               [字符串] 指向数据库的有效 URL
    <CRATE_NAME>                                 [字符串] 生成项目的 cargo 包名
    <DESTINATION>                                [字符串] 指向输出文件夹的路径，如果不存在会创建它

选项:
    -c, --complexity-limit <COMPLEXITY_LIMIT>    [数字] 限制 GraphQL 查询复杂度，使其不超过这个数字。
    -d, --depth-limit <DEPTH_LIMIT>              [字符串] 限制 GraphQL 查询深度，使其不超过这个数字
    -e, --expanded-format <EXPANDED_FORMAT>      [布尔值] 如果你希望 Sea ORM 实体采用扩展格式
    -f, --framework <FRAMEWORK>                  [枚举] 指示生成器使用哪个 Web API 框架。可能的值：actix, poem (默认=poem)
    -h, --help                                   打印帮助信息
    -V, --version                                打印版本信息
```

#### 注意事项
* **DATABASE_URL 示例:** `mysql://user:pass@127.0.0.1:1235/database_name`, `postgres://user:pass@127.0.0.1/base_name`, `sqlite://my_db.db`
* [扩展格式](https://www.sea-ql.org/SeaORM/docs/generate-entity/expanded-entity-structure/)

## 预备知识

为了理解生成代码的工作原理，建议研究以下资源：

1. [async-graphql](https://docs.rs/async-graphql/latest/async_graphql/)

    这是一个服务器端的 GraphQL 库，用于 Rust。

2. [sea-orm](https://docs.rs/sea-orm/latest/sea_orm/)

    SeaORM 是一个关系型 ORM，旨在帮助您用 Rust 构建 Web 服务。

3. 生成项目的 Web API

    [poem](https://docs.rs/crate/poem/latest)
    [actix](https://docs.rs/crate/actix/latest)

4. [tokio*](https://docs.rs/tokio/latest/tokio/)

    这是一个运行时，用于编写可靠、异步和精简的应用程序，使用 Rust 编程语言。