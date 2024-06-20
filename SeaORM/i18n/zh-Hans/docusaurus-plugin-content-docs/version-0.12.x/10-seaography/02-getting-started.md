# 开始使用

这个示例可以在 [SeaORM + Seaography 示例](https://github.com/SeaQL/sea-orm/tree/master/examples/seaography_example) 中找到。

![](https://raw.githubusercontent.com/SeaQL/sea-orm/master/examples/seaography_example/Seaography%20example.png)

要开始，您只需要一个具有模式的活动 SQL 数据库。您可以通过编写 SeaORM 迁移在 Rust 中编码所有内容，或者使用图形界面工具（例如 [DataGrip](https://www.jetbrains.com/datagrip/)）设计模式。

## 安装 Seaography

```bash
cargo install seaography-cli@^1.0.0-rc.2
```

## 生成 Seaography 实体

```bash
sea-orm-cli generate entity --output-dir graphql/src/entities --seaography
```

使用 `sea-orm-cli` 生成实体，但添加了一个额外的 `--seaography` 标志。这些实体基本上是传统的 SeaORM 实体，但带有额外的 `RelatedEntity` 枚举。

## 生成 GraphQL 项目

```bash
# seaography-cli <目的地> <实体> <数据库 URL> <包名>
seaography-cli graphql graphql/src/entities $DATABASE_URL sea-orm-seaography-example
```

## 启动服务器

```bash
cd graphql
cargo run
```

当然，您可以自由修改项目以满足您的需求。但是有趣的部分从 `seaography::register_entity!` 宏和 [seaography::Builder](https://docs.rs/seaography/1.0.0-rc.2/seaography/builder/struct.Builder.html) 开始。