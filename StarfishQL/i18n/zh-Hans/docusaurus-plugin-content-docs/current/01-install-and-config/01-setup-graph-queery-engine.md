# 设置图形查询引擎

## 设置数据库

使用 Docker 设置 MySQL[^1] 数据库连接：

```shell
docker run \
    --name "mysql-8.0" \
    --env MYSQL_DB="mysql" \
    --env MYSQL_USER="sea" \
    --env MYSQL_PASSWORD="sea" \
    --env MYSQL_ALLOW_EMPTY_PASSWORD="yes" \
    --env MYSQL_ROOT_PASSWORD="root" \
    -d -p 3306:3306 mysql:8.0
docker stop "mysql-8.0"
```

## 运行测试

```shell
# starfish-ql/starfish/
DATABASE_URL="mysql://root:root@localhost:3306" cargo test --all
```

## 启动查询引擎

```shell
# starfish-ql/starfish/
cargo run --release
```

或者，使用默认编译配置以便在终端中显示日志和 SQL 命令。

```shell
# starfish-ql/starfish/
cargo run
```

[^1]: 直到 [SeaQuery](https://crates.io/crates/sea-query) 提供更多支持，StarfishQL 只支持 MySQL 数据库。