# 爬取 crates.io 数据

一旦数据库和查询引擎运行起来，下一步就是准备数据来填充数据库。

## 首次运行爬虫

```shell
# starfish-ql/freeport/backend
npm install
npm start
```

Node 应用程序会**拉取** crates.io 的 [索引仓库](https://github.com/rust-lang/crates.io-index)，并使用本地克隆的仓库更新数据库，这样整个爬取过程对 crates.io 的服务影响最小。

## 更新数据库

```shell
# starfish-ql/freeport/backend
npm start
```

为了方便起见，相同的 npm 脚本（`start`）被用于更新数据库。这是通过存储一些爬取元数据实现的。

## 从头开始

在某些情况下，你可能想要清空整个数据库，重新开始。

```shell
# starfish-ql/freeport/backend
npm restart
```