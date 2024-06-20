# 模式管理

如果你已经有了一个包含表和数据的数据库，你可以跳过这一节。

如果你是从一个新的数据库开始，实际上最好使用迁移工具来版本控制你的数据库模式。

我们仍在开发SeaORM的模式管理工具，所以现在你可以使用SQLx的[`sqlx-cli`](https://crates.io/crates/sqlx-cli)。

```shell
$ cargo install sqlx-cli
```

在你的环境中设置`DATABASE_URL`，或者在你的项目根目录下创建一个`.env`文件。指定你的数据库连接。

```env title=".env"
DATABASE_URL=protocol://username:password@localhost/database
```

创建一个新的`.sql`文件。

```shell
$ sqlx migrate add <name>
```

运行迁移。

```shell
$ sqlx migrate run
```