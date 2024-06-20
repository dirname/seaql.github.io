# 查询图数据

StarfishQL 允许用户执行针对节点的图和向量的高度自定义参数查询。

## 图示例

要查找 `sea-orm` 及其深度最多为 3 的依赖项的图：

```json
// 发送到 `/query` 的 POST 请求的正文
{
    "graph": {
        "of": "crate",
        "constraints": [
            {
                "rootNodes": [
                    "sea-orm"
                ]
            },
            {
                "edge": {
                    "of": "depends",
                    "traversal": {
                        "reverseDirection": true
                    }
                }
            },
            {
                "limit": {
                    "depth": 3
                }
            }
        ]
    }
}
```

结果：

```json
{
    "nodes": [
        {
            "name": "wolfie",
            "weight": null,
            "depth": 1
        },
        {
            "name": "sea-migrations",
            "weight": null,
            "depth": 1
        },
        {
            "name": "sea-orm-cli",
            "weight": null,
            "depth": 2
        },
        {
            "name": "inspirer-foundation",
            "weight": null,
            "depth": 1
        },
        {
            "name": "sea_orm_casbin_adapter",
            "weight": null,
            "depth": 1
        },
        {
            "name": "tardis",
            "weight": null,
            "depth": 1
        },
        {
            "name": "sea-orm",
            "weight": null,
            "depth": 0
        },
        {
            "name": "sea-schema",
            "weight": null,
            "depth": 1
        }
    ],
    "edges": [
        {
            "fromNode": "sea-orm",
            "toNode": "sea-migrations"
        },
        {
            "fromNode": "sea-orm",
            "toNode": "inspirer-foundation"
        },
        {
            "fromNode": "sea-orm",
            "toNode": "tardis"
        },
        {
            "fromNode": "sea-orm",
            "toNode": "sea-schema"
        },
        {
            "fromNode": "sea-orm",
            "toNode": "wolfie"
        },
        {
            "fromNode": "sea-orm",
            "toNode": "sea_orm_casbin_adapter"
        },
        {
            "fromNode": "sea-schema",
            "toNode": "sea-orm-cli"
        }
    ]
}
```
## 向量示例

要使用复杂连通性（具有 0.5 的权重衰减因子）查找被依赖次数最多的前 10 个 crates：

```json
// 发送到 `/query` 的 POST 请求的正文
{
    "vector": {
        "of": "crate",
        "constraints": [
            {
                "sortBy": {
                    "key": {
                        "connectivity": {
                            "of": "depends",
                            "type": "complex05"
                        }
                    },
                    "desc": true
                }
            },
            {
                "limit": 10
            }
        ]
    }
}
```

结果：

```json
[
    {
        "name": "syn",
        "weight": 9872.005332565983,
        "depth": null
    },
    {
        "name": "cc",
        "weight": 9140.676057275385,
        "depth": null
    },
    {
        "name": "ryu",
        "weight": 8823.481965709943,
        "depth": null
    },
    {
        "name": "chrono",
        "weight": 7459.312721305301,
        "depth": null
    },
    {
        "name": "url",
        "weight": 7204.165128913257,
        "depth": null
    },
    {
        "name": "log",
        "weight": 6289.462544210255,
        "depth": null
    },
    {
        "name": "anyhow",
        "weight": 6234.039542149767,
        "depth": null
    },
    {
        "name": "jobserver",
        "weight": 4610.775528637692,
        "depth": null
    },
    {
        "name": "no-panic",
        "weight": 4435.037857616553,
        "depth": null
    },
    {
        "name": "async-trait",
        "weight": 4052.337468007814,
        "depth": null
    }
]
```