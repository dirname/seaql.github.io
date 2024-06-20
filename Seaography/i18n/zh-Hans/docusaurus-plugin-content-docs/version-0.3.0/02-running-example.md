# 运行示例

项目代码库自带一个示例数据库，您可以使用它来运行示例项目。

在本文中，我们将遵循设置示例项目的说明，并可以执行一些有用的查询。

## 要求

1. rustup: https://rustup.rs/
2. mysql / postgres 数据库（可选）

### 从Cargo安装

```shell
cargo install seaography-cli
```

### 从源码安装

1. 克隆项目
    ```shell
    git clone git@github.com:SeaQL/seaography.git
    ```

2. 构建项目
    ```shell
    cd ./seaography/cli
    cargo install --path .
    ```

### MySQL

1. 定位项目
    ```shell
    cd ./examples/mysql
    ```

2. 创建数据库
    ```shell
    mysql -uroot -p -h 127.0.0.1 mysql -e 'CREATE DATABASE `sakila`'
    ```

3. 导入模式
    ```shell
    mysql -uroot -p -h 127.0.0.1 sakila < sakila-schema.sql
    ```

4. 导入数据
    ```shell
    mysql -uroot -p -h 127.0.0.1 sakila < sakila-data.sql
    ```

### Postgres

1. 定位项目
    ```shell
    cd ./examples/postgres
    ```

2. 创建数据库
    ```shell
    psql -q postgres://postgres:postgres@localhost/postgres -c 'CREATE DATABASE "sakila"'
    ```

3. 导入模式
    ```shell
    psql -q postgres://postgres:postgres@localhost/sakila < sakila-schema.sql
    ```

4. 导入数据
    ```shell
    psql -q postgres://postgres:postgres@localhost/sakila < sakila-data.sql
    ```

### SQLite

1. 定位项目
    ```shell
    cd ./examples/sqlite
    ```

## 扩展和配置代码

您可以自由修改代码并更改以适应您的需求。更多信息请参阅 [如何扩展生成的代码](/docs/extending-code)。

## 运行服务器

```shell
cargo run
```

http://127.0.0.1:8000/

## 重新生成代码

以下是有关我们如何从头开始生成示例的说明。

1. 将工作目录设置为Seaography文件夹
    ```shell
    $ cd ./seaography
    ```

2. 构建项目
    ```shell
    cargo build
    ```

3. 清除生成的代码
    ```shell
    rm -rf ./examples/{mysql|sqlite|postgres}/src
    ```

4. 生成代码
    ```shell
    cd ./examples/{mysql|sqlite|postgres}
    seaography-cli <database_url> seaography-example .
    ```

    \* 示例数据库URL "sqlite://sakila.db", "mysql://username:password@127.0.0.1/sakila"

## 查询示例

#### 获取电影及其演员

```graphql
{
  film(pagination: { pages: { limit: 2, page: 0 } }, orderBy: { title: ASC }) {
    nodes {
      title
      description
      releaseYear
      filmActor {
        actor {
          firstName
          lastName
        }
      }
    }
  }
}

```

响应
```json
{
  "data": {
    "film": {
      "nodes": [
        {
          "title": "ACADEMY DINOSAUR",
          "description": "一部关于女权主义者与疯狂科学家必须在加拿大落基山脉与教师作战的史诗剧",
          "releaseYear": "2006",
          "filmActor": [
            {
              "actor": {
                "firstName": "PENELOPE",
                "lastName": "GUINESS"
              }
            },
            ...
          ]
        },
        {
          "title": "ACE GOLDFINGER",
          "description": "一位数据库管理员与探险家必须在中国古代寻找一辆汽车的惊人篇章",
          "releaseYear": "2006",
          "filmActor": [
            {
              "actor": {
                "firstName": "BOB",
                "lastName": "FAWCETT"
              }
            },
            ...
          ]
        }
      ]
    }
  }
}
```

#### 获取商店及其员工

```graphql
{
  store(filters: { storeId: { eq: 1 } }) {
    nodes {
      storeId
      address {
        address
        address2
      }
      staff {
        firstName
        lastName
      }
    }
  }
}
```

响应

```json
{
  "data": {
    "store": {
      "nodes": [
        {
          "storeId": 1,
          "address": {
            "address": "47 MySakila Drive",
            "address2": null
          },
          "staff": {
            "firstName": "Mike",
            "lastName": "Hillyer"
          }
        }
      ]
    }
  }
}
```

### 分页获取非活动客户

```graphql
{
  customer(
    filters: { active: { eq: 0 } }
    pagination: { pages: { page: 2, limit: 3 } }
  ) {
    nodes {
      customerId
      lastName
      email
    }
    pages
    current
  }
}
```

响应

```json
{
  "data": {
    "customer": {
      "nodes": [
        {
          "customerId": 315,
          "lastName": "GOODEN",
          "email": "KENNETH.GOODEN@sakilacustomer.org"
        },
        ...
      ],
      "pages": 5,
      "current": 2
    }
  }
}
```

### 上面的查询使用游标分页

```graphql
{
  customer(
    filters: { active: { eq: 0 } }
    pagination: { cursor: { limit: 3, cursor: "Int[3]:271" } }
  ) {
    nodes {
      customerId
      lastName
      email
    }
    pageInfo {
      hasPreviousPage
      hasNextPage
      endCursor
    }
  }
}
```

响应

```json
{
  "data": {
    "customer": {
      "nodes": [
        {
          "customerId": 315,
          "lastName": "GOODEN",
          "email": "KENNETH.GOODEN@sakilacustomer.org"
        },
        ...
      ],
      "pageInfo": {
        "hasPreviousPage": true,
        "hasNextPage": true,
        "endCursor": "Int[3]:406"
      }
    }
  }
}
```