# 概览

为了将数据插入数据库，我们需要从 [crates.io](https://crates.io) 获取 crate 的数据。

通常的、简单的方法可能是直接从它们的前端网站抓取数据或向其 API 发送 HTTP 请求来礼貌地请求资源。然而，这些方法是 **慢** 的（数据通过互联网传输需要时间）并且 **可能造成干扰** （带宽有限）。在 crates.io 的情况下，存在一个更好的解决方案。

crates.io 将其数据放在一个 [公共 git 仓库](https://github.com/rust-lang/crates.io-index) 中。让我们克隆它并深入探究。

```shell
# tree crates.io-index | less
crates.io-index
├── 1
│   ├── a
│   ├── b
│   ├── c
│   ├── d
│   ├── e
│   ├── f
...
├── se
...
│   ├── a-
│   │   ├── sea-canal
│   │   ├── sea-migrations
│   │   ├── sea-orm
│   │   ├── sea-orm-cli
│   │   ├── sea-orm-codegen
│   │   ├── sea-orm-macros
│   │   ├── sea-orm-rocket
│   │   ├── sea-orm-rocket-codegen
│   │   ├── sea-query
│   │   ├── sea-query-derive
│   │   ├── sea-schema
│   │   ├── sea-schema-derive
...
```

显然，该仓库的文件结构是一个（部分）前缀树 ([wiki](https://en.wikipedia.org/wiki/Trie))。我们关心的只是最深层次的所有文件，每个文件代表一个单独的 crate。例如，查看 `se/a-/sea-orm`：

```json
{"name":"sea-orm","vers":"0.1.0","deps":[...],"cksum":"1eb3d26aba7b281f174f580ab38cdc6eef34cad85628390339aa89dcd752c1dd","features":{...},"yanked":false,"links":null}
{"name":"sea-orm","vers":"0.1.1","deps":[...],"cksum":"3cd6599f09116bfd821f0efeacde224d728f43f9239cb0218dd622e238146b08","features":{...},"yanked":false,"links":null}
{"name":"sea-orm","vers":"0.1.2","deps":[...],"cksum":"3866c8ae90109677487be8763847ff1914d92592272994b95a6e389045f5fc7a","features":{...},"yanked":false,"links":null}
{"name":"sea-orm","vers":"0.1.3","deps":[...],"cksum":"3a687813af71b76317ce0b739a011d831c8700228e3410cf03ab1828e0b5e7e5","features":{...},"yanked":false,"links":null}
...
{"name":"sea-orm","vers":"0.5.0","deps":[...],"cksum":"5452736ac11d11f9dcf1980897d3a6302d78ee2bfcb928b0f9c03569f2e6b12c","features":{...},"yanked":false,"links":null}
{"name":"sea-orm","vers":"0.6.0","deps":[...],"cksum":"dd24380b48dacd3ed1c3d467c7b17ffa5818555a2c04066f4a0a9e17d830abc9","features":{...},"yanked":false,"links":null}
{"name":"sea-orm","vers":"0.7.0","deps":[...],"cksum":"47cf9814f87c3c05b8013b368da62984e2bf9f31fc4d4d871257b4a00f073003","features":{...},"yanked":false,"links":null}
{"name":"sea-orm","vers":"0.7.1","deps":[...],"cksum":"27dbb8a742003f8dbf2ba290d128134d4275a6b55fd02f4d728683b6b55ea9bf","features":{...},"yanked":false,"links":null}
```

这些文件中包含了 crate 的名称、版本和依赖项。因此，“爬虫”实际上只是一个文件读取器+解析器。