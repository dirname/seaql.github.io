# 使用 `sea-orm-cli`

首先，使用 `cargo` 安装 `sea-orm-cli`。

```shell
cargo install sea-orm-cli
```

:::tip SQL Server (MSSQL) 后端

带有 MSSQL 支持的 `sea-orm-cli` 的安装和使用可以在 [这里](https://www.sea-ql.org/SeaORM-X/docs/generate-entity/sea-orm-cli/) 找到。

:::

## 配置环境

在您的环境中设置 `DATABASE_URL`，或者在项目根目录创建一个 `.env` 文件。指定您的数据库连接。

```env title=".env"
DATABASE_URL=protocol://username:password@localhost/database
```

## 获取帮助

在任何 CLI 命令或子命令上使用 `-h` 标志获取帮助。

```shell
# 列出所有可用的命令
sea-orm-cli -h

# 列出 `generate` 命令中所有可用的子命令
sea-orm-cli generate -h

# 显示如何使用 `generate entity` 子命令
sea-orm-cli generate entity -h
```

## 生成实体文件

发现数据库中的所有表，并为每个表生成相应的 SeaORM 实体文件。

支持的数据库：
- MySQL
- PostgreSQL
- SQLite

命令行选项：
- `-u` / `--database-url`：数据库 URL（默认：在 ENV 中指定的 DATABASE_URL）
- `-s` / `--database-schema`：数据库模式（默认：在 ENV 中指定的 DATABASE_SCHEMA）
    - 对于 MySQL & SQLite，此参数被忽略
    - 对于 PostgreSQL，此参数是可选的，默认值为 'public'
- `-o` / `--output-dir`：实体文件输出目录（默认：当前目录）
- `-v` / `--verbose`：打印调试消息
- `-l` / `--lib`：生成索引文件作为 `lib.rs` 而不是 `mod.rs`
- `--include-hidden-tables`：从隐藏表生成实体文件（以下划线开头的表名默认是隐藏且被忽略的）
- `--ignore-tables`：跳过为指定的表生成实体文件（默认：`seaql_migrations`）
- `--compact-format`：生成实体文件的 [紧凑格式](04-generate-entity/02-entity-structure.md)（默认：true）
- `--expanded-format`：生成实体文件的 [扩展格式](04-generate-entity/03-expanded-entity-structure.md)
- `--with-serde`：自动为实体推导 serde Serialize / Deserialize 特性（`none`，`serialize`，`deserialize`，`both`）（默认：`none`）
    - `--serde-skip-deserializing-primary-key`：生成实体模型时，将主键字段标记为 `#[serde(skip_deserializing)]`
    - `--serde-skip-hidden-column`：生成实体模型时，将隐藏列（列名以 `_` 开头）字段标记为 `#[serde(skip)]`
- `--date-time-crate`：用于生成实体的日期时间 crate（`chrono`，`time`）（默认：`chrono`）
- `--max-connections`：初始化连接池中的最大数据库连接数（默认：`1`）
- `--model-extra-derives`：附加额外的 derive 宏到生成的模型结构体
- `--model-extra-attributes`：附加额外的属性到生成的模型结构体
- `--enum-extra-derives`：附加额外的 derive 宏到生成的枚举类型
- `--enum-extra-attributes`：附加额外的属性到生成的枚举类型
- `--seaography`：为 seaography 集成生成实体中的额外结构体

```shell
# 将数据库 `bakery` 的实体文件生成到 `entity/src`
sea-orm-cli generate entity -u protocol://username:password@localhost/bakery -o entity/src
```