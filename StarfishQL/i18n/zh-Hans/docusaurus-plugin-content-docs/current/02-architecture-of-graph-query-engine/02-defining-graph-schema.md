# 定义图模式

模式定义了StarfishQL处理的实体格式和关系。

## 请求体格式

```typescript
// 发送到 `/schema` 的 POST 请求的请求体
{
    reset: boolean, // 默认值：false
    define: { // 可选
        entities: [
            {
                name: string,
                attributes: [
                    {
                        name: string,
                        datatype: "Int" | "String",
                    }
                ]
            }
        ],
        relations: [
            {
                name: string,
                from_entity: string,
                to_entity: string,
                directed: boolean
            }
        ]
    }
}
```

请注意，所有根级字段（`reset` 和 `define`）都是可选的；一个空请求体 `{}` 不执行任何操作。

## 定义模式

以下请求体定义了：

- 名为 `crate` 的实体，具有数据库中的 *String* 类型属性 `version`[^1]
- 一个 *有向* 关系，名为 `depends`，从 `crate` 到 `crate` 定义[^2]

```json
{
    "define": {
        "entities": [
            {
                "name": "crate",
                "attributes": [
                    {"name": "version", "datatype": "String"}
                ]
            }
        ],
        "relations": [
            {
                "name": "depends",
                "from_entity": "crate",
                "to_entity": "crate",
                "directed": true
            }
        ]
    }
}
```

## 追加到模式

如果您发送另一个带有以下请求体的请求，将定义另一个名为 `author` 的实体。

```json
{
    "define": {
        "entities": [
            {
                "name": "author",
                "attributes": []
            }
        ]
    }
}
```

## 重置模式

如果您想重新开始，指定 `reset: true` 来重置模式。

```json
{
    "reset": true
}
```

如果您想在同一个请求中重置模式并重新定义它，只需同时提供 `reset: true` 和 `define: {...}`。

```json
{
    "reset": true,
    "define": {
        "entities": [
            {
                "name": "crate",
                "attributes": [
                    {"name": "version", "datatype": "String"}
                ]
            }
        ],
        "relations": [
            {
                "name": "depends",
                "from_entity": "crate",
                "to_entity": "crate",
                "directed": true
            }
        ]
    }
}
```

[^1]: 隐式插入了一个名为 `name` 的唯一列，但仍然接受一个名为 `name` 的属性。关于这一点的更多内容请参见 [数据存储](02-architecture-of-graph-query-engine/03-data-storage.md#storage-of-entities)。

[^2]: 为了简化起见，模式中定义的所有关系都是一对多的。因此，为每个关系创建一个单独的表。