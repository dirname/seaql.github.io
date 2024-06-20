# 设置迁移

## 安装 SeaORM X CLI

使用 `cargo` 在本地安装 `sea-orm-cli`。

```shell
cargo install --path "<SEA_ORM_X_ROOT>/sea-orm-x/sea-orm-cli"
```

## 工作区结构

为了在应用包和迁移包之间共享 SeaORM 实体，建议按照以下方式构建您的 cargo 工作区。请查阅 [集成示例](https://github.com/SeaQL/sea-orm-x/tree/main/sea-orm-x/examples) 以获取演示。

### 迁移包

导入 `sea-orm-migration` 和 [`async-std`](https://crates.io/crates/async-std) 包。

```toml title="migration/Cargo.toml"
[dependencies]
async-std = { version = "1", features = ["attributes", "tokio1"] }

[dependencies.sea-orm-migration]
version = "0.12"
path = "<SEA_ORM_X_ROOT>/sea-orm-x/sea-orm-migration"
features = [
  # 如果您想通过 CLI 运行迁移，请启用至少一个 `ASYNC_RUNTIME` 和 `DATABASE_DRIVER` 特性。
  # 查看支持的特性列表：https://www.sea-ql.org/SeaORM/docs/install-and-config/database-and-async-runtime。
  # 例如：
  # "runtime-tokio-rustls",  # `ASYNC_RUNTIME` 特性
  # "sqlz-mssql",            # `DATABASE_DRIVER` 特性
]
```

### 实体包

指定 SeaORM X 依赖项。

```toml title="entity/Cargo.toml"
[dependencies]
sea-orm = { version = "0.12", path = "<SEA_ORM_X_ROOT>/sea-orm-x" }
```

### 应用包

这里是应用程序逻辑所在的地方。

创建一个包含应用、实体和迁移包的工作区，并将实体包导入到应用包中。

如果我们希望将迁移工具作为您应用的一部分进行捆绑，您可能还想导入迁移包。

```toml title="./Cargo.toml"
[workspace]
members = [".", "entity", "migration"]

[dependencies]
entity = { path = "entity" }
migration = { path = "migration" } # 取决于您的需求

[dependencies]
sea-orm = { version = "0.12", path = "<SEA_ORM_X_ROOT>/sea-orm-x", features = [..] }
```