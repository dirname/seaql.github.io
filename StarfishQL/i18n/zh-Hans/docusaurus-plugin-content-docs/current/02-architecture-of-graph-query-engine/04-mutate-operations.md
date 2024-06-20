# 修改操作

StarfishQL 支持以下修改操作：

## 插入

### 主体格式

插入一组节点：

```typescript
// 发送到 `/mutate` 的 POST 请求主体
{
    insert: {
        node: {
            of: string, // 实体的 `name`
            nodes: [
                {
                    name: string,
                    attributes: {
                        attr_name: attr_value, // 未指定的属性变为 `null`
                        ...
                    }
                }
            ]
        }
    }
}
```

**请注意，如果同名节点已存在，则会抛出错误并导致请求失败。**

插入一组边：

```typescript
// 发送到 `/mutate` 的 POST 请求主体
{
    insert: {
        edge: {
            of: string, // 关系的 `name`
            edges: [
                {
                    from_node: string, // 节点的 `name`
                    to_node: string // 节点的 `name`
                }
            ]
        }
    }
}
```

### 使用示例

首先，插入节点 `sea-orm` 和 `serde`。

```json
{
    "insert": {
        "node": {
            "of": "crate",
            "nodes": [
                {
                    "name": "sea-orm",
                    "attributes": {
                        "version": "0.6.0"
                    }
                },
                {
                    "name": "serde",
                    "attributes": {
                        "version": "1.0.136"
                    }
                }
            ]
        }
    }
}
```

然后，可以插入一条边“*sea-orm 依赖于 serde*”。

```json
{
    "insert": {
        "edge": {
            "of": "depends",
            "edges": [
                {
                    "from_node": "sea-orm",
                    "to_node": "serde"
                }
            ]
        }
    }
}
```

### 插入或更新（Upsert）

您可以通过在查询参数中设置 `upsert=true` 来执行插入或更新操作（即，插入不存在的节点，更新存在的节点）。

```typescript
// 发送到 `/mutate?upsert=true` 的 POST 请求主体
{
    insert: {
        node: {
            of: string, // 实体的 `name`
            nodes: [
                {
                    name: string,
                    attributes: {
                        attr_name: attr_value, // 未指定的属性变为 `null`
                        ...
                    }
                }
            ]
        }
    }
}
```

## 更新

### 主体格式

更新主体的关键逻辑是使用 `selector` 选择现有数据，并根据 `content` 进行更新。

更新节点的 **属性**：

```typescript
// 发送到 `/mutate` 的 POST 请求主体
{
    update: {
        node: {
            selector: {
                of: string, // 实体的 `name`
                name: string, // 节点的 `name`，可选
                attributes: { // 可选
                    attr_name: attr_value,
                    ...
                }
            },
            content: {
                attr_name: attr_value,
                ...
            }
        }
    }
}
```

请注意，如果 `selector` 中既没有 `name` 也没有 `attributes`，则将选择并更新指定实体中的所有节点。

更新边：

```typescript
// 发送到 `/mutate` 的 POST 请求主体
{
    update: {
        edge: {
            selector: {
                of: string, // 关系的 `name`
                from_node: string, // 节点的 `name`，可选
                to_node: string, // 节点的 `name`，可选
            },
            content: {
                from_node: string, // 节点的 `name`，可选
                to_node: string, // 节点的 `name`，可选
            }
        }
    }
}
```

请注意，尽管尚未实现验证检查，但仅在以下场景中定义了行为：

- selector: { of, from_node }, content: { from_node } <- 更新多条边的 `from_node`
- selector: { of, to_node }, content: { to_node } <- 更新多条边的 `to_node`
- selector: { of, from_node, to_node }, content: { * } <- 更新确切一条边

### 使用示例

选择所有 `version` 等于 `2.0` 的 crates 并将其 `version` 更新为 `3.14`。

```json
{
    "update": {
        "node": {
            "selector": {
                "of": "crate",
                "attributes": {
                    "version": "2.0"
                }
            },
            "content": {
                "version": "3.14"
            }
        }
    }
}
```

选择所有指向 `serde` 的 `depends` 边并将它们更新为 `<from> -> rand`。

```json
{
    "update": {
        "edge": {
            "selector": {
                "of": "depends",
                "to_node": "serde"
            },
            "content": {
                "to_node": "rand"
            }
        }
    }
}
```

## 删除

### 主体格式

删除主体的关键逻辑类似于更新，只是它只需要选择要删除的数据。

删除节点：

```typescript
// 发送到 `/mutate` 的 POST 请求主体
{
    delete: {
        node: {
            of: string, // 实体的 `name`
            name: string, // 节点的 `name`，可选
            attributes: { // 可选
                attr_name: attr_value,
                ...
            }
        }
    }
}
```

请注意，如果 `name` 和 `attributes` 都不存在，则将选择并删除指定实体中的所有节点。

删除边：

```typescript
// 发送到 `/mutate` 的 POST 请求主体
{
    delete: {
        edge: {
            of: string, // 关系的 `name`
            from_node: string, // 节点的 `name`，可选
            to_node: string, // 节点的 `name`，可选
        }
    }
}
```

### 使用示例

删除 crate `sea-orm`。

```json
{
    "delete": {
        "node": {
            "of": "crate",
            "name": "sea-orm"
        }
    }
}
```

删除所有指向 `serde` 的 `depends` 边

```json
{
    "delete": {
        "edge": {
            "of": "depends",
            "to_node": "serde"
        }
    }
}
```