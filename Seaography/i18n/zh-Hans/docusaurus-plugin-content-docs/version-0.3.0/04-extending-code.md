# 扩展生成的代码

当我们完成代码生成后，就可以根据需要修改Rust代码了。

## 引言

为了扩展现有代码，首先你需要熟悉生成代码所依赖的库。

* [async_graphql](https://github.com/async-graphql/async-graphql)
* [sea_orm](https://github.com/SeaQL/sea-orm)
* [poem](https://github.com/poem-web/poem)

研究生成代码的结构可以提供有关在哪里查找重要特性的宝贵信息，更多信息请参考[这里](/docs/generated-project-structure)。

当你对所有术语都足够熟悉时，你就可以进入文件夹并根据你的目标添加新功能或逻辑。

## 主要特性

以下是一些你可能需要的重要特性：

### 字段保护

通过字段保护，你可以使用自定义的保护函数来阻止特定查询或字段访问器被访问。

你可以在这里阅读更多：https://async-graphql.github.io/async-graphql/en/field_guard.html


### 查询复杂度和深度

当前的生成器不防止循环依赖。恶意用户可以利用循环依赖进行无限嵌套查询，从而导致服务器崩溃。

我们有以下实体：

```rust

pub struct Category {
    pub id: i32,
    pub name: String,
    pub products: Vec<Product>
}

pub struct Product {
    pub id: i32,
    pub name: String,
    pub categories: Vec<Category>
}

```

你可以执行以下查询

```graphql
{
    category {
        nodes {
            id,
            name,
            product {
                id,
                name,
                category {
                    id,
                    name,
                    product {
                        id,
                        name,
                        category {
                            [....]
                        }
                    }
                }
            }
        }
    }
}
```

为了防止这种行为，我们可以用几行代码启用查询复杂度计算器和深度限制器。

#### 查询深度限制

在.env中，将这行：

```
# DEPTH_LIMIT=
```

改为：

```
DEPTH_LIMIT=2 # 深度限制数值
```

#### 查询复杂度限制

在.env中，将这行：

```
# COMPLEXITY_LIMIT=
```

改为：

```
COMPLEXITY_LIMIT=32 # 复杂度限制数值
```

#### 更多文档

https://async-graphql.github.io/async-graphql/en/depth_and_complexity.html