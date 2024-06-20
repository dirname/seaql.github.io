# 目录

## SeaORM 教程

如果你更喜欢逐步教程来学习如何使用 SeaORM。你可以查看 [SeaORM 教程](https://www.sea-ql.org/sea-orm-tutorial/)！

## 引言

1. [什么是 ORM](01-introduction/01-orm.md)

2. [Rust 中的异步编程](01-introduction/02-async.md)

3. [SeaORM 概念](01-introduction/03-sea-orm.md)

## 入门指南

1. 安装与配置

   1.1 [选择数据库与异步运行时](02-install-and-config/01-database-and-async-runtime.md)

   1.2 [模式管理](02-install-and-config/02-schema.md)

   1.3 [连接池](02-install-and-config/03-connection.md)

   1.4 [调试日志](02-install-and-config/04-debug-log.md)

2. 生成实体

   2.1 [使用 `sea-orm-cli`](03-generate-entity/01-sea-orm-cli.md)

   2.2 [实体结构](03-generate-entity/02-entity-structure.md)

   2.3 [扩展实体结构](03-generate-entity/03-expanded-entity-structure.md)

   2.4 [枚举](03-generate-entity/04-enumeration.md)

3. 生成数据库模式

   3.1 [创建表](04-generate-database-schema/01-create-table.md)

   3.2 [创建枚举](04-generate-database-schema/02-create-enum.md)

   3.3 [创建索引](04-generate-database-schema/03-create-index.md)

4. 迁移

   4.1 [设置迁移](05-migration/01-setting-up-migration.md)

   4.2 [编写迁移](05-migration/02-writing-migration.md)

   4.3 [运行迁移](05-migration/03-running-migration.md)

5. 基本 CRUD

   5.1 [SELECT: 查找、过滤、排序、分页](06-basic-crud/01-select.md)

   5.2 [INSERT: Model 与 ActiveModel, 批量插入](06-basic-crud/02-insert.md)

   5.3 [UPDATE: 查找与保存，批量更新](06-basic-crud/03-update.md)

   5.4 [SAVE: 插入或更新](06-basic-crud/04-save.md)

   5.5 [DELETE: 删除单个与批量删除](06-basic-crud/05-delete.md)

   5.6 [JSON](06-basic-crud/06-json.md)

   5.7 [原始 SQL 查询](06-basic-crud/07-raw-sql.md)

## 学习更多

6. 关联

   6.1 [一对一](07-relation/01-one-to-one.md)

   6.2 [一对多](07-relation/02-one-to-many.md)

   6.3 [多对多](07-relation/03-many-to-many.md)

   6.4 [链式关联](07-relation/04-chained-relations.md)

   6.5 [自引用](07-relation/05-self-referencing.md)

   6.6 [烘焙店模式](07-relation/06-bakery-schema.md)

7. 编写测试

   7.1 [稳健与正确](08-write-test/01-testing.md)

   7.2 [模拟接口](08-write-test/02-mock.md)

   7.3 [使用 SQLite](08-write-test/03-sqlite.md)

8. 高级查询

   8.1 [自定义查询](09-advanced-query/01-custom-select.md)

   8.2 [条件表达式](09-advanced-query/02-conditional-expression.md)

   8.3 [聚合函数](09-advanced-query/03-aggregate-function.md)

   8.4 [自定义连接](09-advanced-query/04-custom-joins.md)

   8.5 [子查询](09-advanced-query/05-subquery.md)

   8.6 [事务](09-advanced-query/06-transaction.md)

   8.7 [流式处理](09-advanced-query/07-streaming.md)

   8.8 [自定义 Active Model](09-advanced-query/08-custom-active-model.md)

9. 内部设计

   9.1 [特性与类型](10-internal-design/01-trait-and-type.md)

   9.2 [派生宏](10-internal-design/02-derive-macro.md)

   9.3 [与 Diesel 的比较](10-internal-design/03-diesel.md)