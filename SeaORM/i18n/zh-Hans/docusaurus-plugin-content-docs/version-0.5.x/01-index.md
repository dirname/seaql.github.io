# 目录

## 引言

1. [什么是ORM](01-introduction/01-orm.md)

2. [Rust中的异步编程](01-introduction/02-async.md)

3. [SeaORM概念](01-introduction/03-sea-orm.md)

## 入门指南

1. 安装与配置

    1.1 [选择数据库与异步运行时](02-install-and-config/01-database-and-async-runtime.md)

    1.2 [模式管理](02-install-and-config/02-schema.md)

    1.3 [连接池](02-install-and-config/03-connection.md)

    1.4 [调试日志](02-install-and-config/04-debug-log.md)

2. 生成实体

    2.1 [使用`sea-orm-cli`](03-generate-entity/01-sea-orm-cli.md)

    2.2 [实体结构](03-generate-entity/02-entity-structure.md)

    2.3 [扩展的实体结构](03-generate-entity/03-expanded-entity-structure.md)

    2.4 [枚举](03-generate-entity/04-enumeration.md)

3. 生成数据库模式

    3.1 [创建表](04-generate-database-schema/01-create-table.md)

    3.2 [创建枚举](04-generate-database-schema/02-create-enum.md)

4. 基本CRUD操作

    4.1 [SELECT: 查找、过滤、排序、分页](05-basic-crud/01-select.md)

    4.2 [INSERT: 模型与ActiveModel，批量插入](05-basic-crud/02-insert.md)

    4.3 [UPDATE: 查找与保存，批量更新](05-basic-crud/03-update.md)

    4.4 [SAVE: 插入或更新](05-basic-crud/04-save.md)

    4.5 [DELETE: 删除单个与批量删除](05-basic-crud/05-delete.md)

    4.6 [JSON](05-basic-crud/06-json.md)

    4.7 [原始SQL查询](05-basic-crud/07-raw-sql.md)

## 进阶学习

5. 关系

    5.1 [一对一](06-relation/01-one-to-one.md)

    5.2 [一对多](06-relation/02-one-to-many.md)

    5.3 [多对多](06-relation/03-many-to-many.md)

    5.4 [链式关系](06-relation/04-chained-relations.md)

    5.5 [自引用](06-relation/05-self-referencing.md)

    5.6 [烘焙店模式](06-relation/06-bakery-schema.md)

6. 编写测试

    6.1 [稳健与正确](07-write-test/01-testing.md)

    6.2 [模拟接口](07-write-test/02-mock.md)

    6.3 [使用SQLite](07-write-test/03-sqlite.md)

7. 高级查询

    7.1 [自定义查询](08-advanced-query/01-custom-select.md)

    7.2 [条件表达式](08-advanced-query/02-conditional-expression.md)

    7.3 [聚合函数](08-advanced-query/03-aggregate-function.md)

    7.4 [自定义联接](08-advanced-query/04-custom-joins.md)

    7.5 [子查询](08-advanced-query/05-subquery.md)

    7.6 [事务](08-advanced-query/06-transaction.md)

    7.7 [流式处理](08-advanced-query/07-streaming.md)

    7.8 [自定义Active Model](08-advanced-query/08-custom-active-model.md)

8. 内部设计

    8.1 [特性与类型](09-internal-design/01-trait-and-type.md)

    8.2 [派生宏](09-internal-design/02-derive-macro.md)

    8.3 [与Diesel比较](09-internal-design/03-diesel.md)