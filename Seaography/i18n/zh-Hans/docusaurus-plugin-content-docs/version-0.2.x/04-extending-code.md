# 扩展生成的代码

当我们完成代码生成后，就可以根据我们的需求来修改Rust代码了。

## 引言

为了扩展现有代码，首先你需要熟悉生成代码所依赖的库。

* [async_graphql](https://github.com/async-graphql/async-graphql)
* [sea_orm](https://github.com/SeaQL/sea-orm)
* [poem](https://github.com/poem-web/poem)

研究生成代码的结构可以提供有价值的信息，帮助你找到重要的特性，更多信息请参见[这里](/docs/generated-project-structure)。

当你对所有术语足够熟悉时，你可以跳转到各个文件夹中，根据你的目标添加新功能或逻辑。

## 主要特性

以下是一些你可能需要的重要特性：

### 字段保护

通过字段保护，你可以使用自定义的保护函数来阻止特定查询或字段访问器被访问。

你可以在这里阅读更多：https://async-graphql.github.io/async-graphql/en/field_guard.html


### 查询复杂度和深度

当前的生成器不会防止循环依赖。恶意行为者可以利用循环依赖执行无限嵌套的查询并使服务器崩溃。

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

为了防止这种行为，我们可以通过几行代码启用查询复杂度计算器和深度限制器。

#### 查询深度限制

在 .env 文件中，将这一行从：

```
# DEPTH_LIMIT=
```

改为：

```
DEPTH_LIMIT=2 # 深度限制数值
```

#### 查询复杂度限制

在 .env 文件中，将这一行从：

```
# COMPLEXITY_LIMIT=
```

改为：

```
COMPLEXITY_LIMIT=32 # 复杂度限制数值
```

#### 更多文档

https://async-graphql.github.io/async-graphql/en/depth_and_complexity.html