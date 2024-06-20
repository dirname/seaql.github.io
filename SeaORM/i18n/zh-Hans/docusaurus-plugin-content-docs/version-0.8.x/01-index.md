# 目录

## 引言

1. 引言

    1.1. [什么是 ORM](01-introduction/01-orm.md)

    1.2. [Rust 中的异步编程](01-introduction/02-async.md)

    1.3. [SeaORM 概念](01-introduction/03-sea-orm.md)

    1.4. [教程与示例](01-introduction/04-tutorial.md)

## 基础知识

2. 安装与配置

    2.1 [选择数据库与异步运行时](02-install-and-config/01-database-and-async-runtime.md)

    2.2 [模式管理](02-install-and-config/02-schema.md)

    2.3 [连接池](02-install-and-config/03-connection.md)

    2.4 [调试日志](02-install-and-config/04-debug-log.md)

3. 生成实体

    3.1 [使用 `sea-orm-cli`](03-generate-entity/01-sea-orm-cli.md)

    3.2 [实体结构](03-generate-entity/02-entity-structure.md)

    3.3 [扩展的实体结构](03-generate-entity/03-expanded-entity-structure.md)

    3.4 [枚举](03-generate-entity/04-enumeration.md)

4. 生成数据库模式

    4.1 [创建表](04-generate-database-schema/01-create-table.md)

    4.2 [创建枚举](04-generate-database-schema/02-create-enum.md)

    4.3 [创建索引](04-generate-database-schema/03-create-index.md)

5. 基本的 CRUD 操作

    5.1 [SELECT: 查找，过滤，排序，分页](05-basic-crud/01-select.md)

    5.2 [INSERT: 模型与 ActiveModel，批量插入](05-basic-crud/02-insert.md)

    5.3 [UPDATE: 查找与保存，批量更新](05-basic-crud/03-update.md)

    5.4 [SAVE: 插入或更新](05-basic-crud/04-save.md)

    5.5 [DELETE: 删除单个与批量删除](05-basic-crud/05-delete.md)

    5.6 [JSON](05-basic-crud/06-json.md)

    5.7 [原始 SQL 查询](05-basic-crud/07-raw-sql.md)

## 高级主题

6. 迁移

    6.1 [设置迁移](06-migration/01-setting-up-migration.md)

    6.2 [编写迁移](06-migration/02-writing-migration.md)

    6.3 [执行迁移](06-migration/03-running-migration.md)

    6.4 [数据播种](06-migration/04-seeding-data.md)

7. 关系

    7.1 [一对一](07-relation/01-one-to-one.md)

    7.2 [一对多](07-relation/02-one-to-many.md)

    7.3 [多对多](07-relation/03-many-to-many.md)

    7.4 [链式关系](07-relation/04-chained-relations.md)

    7.5 [自引用](07-relation/05-self-referencing.md)

    7.6 [烘焙店模式](07-relation/06-bakery-schema.md)

8. 编写测试

    8.1 [健壮与正确](08-write-test/01-testing.md)

    8.2 [模拟接口](08-write-test/02-mock.md)

    8.3 [使用 SQLite](08-write-test/03-sqlite.md)

9. 高级查询

    9.1 [自定义查询](09-advanced-query/01-custom-select.md)

    9.2 [条件表达式](09-advanced-query/02-conditional-expression.md)

    9.3 [聚合函数](09-advanced-query/03-aggregate-function.md)

    9.4 [自定义联接](09-advanced-query/04-custom-joins.md)

    9.5 [子查询](09-advanced-query/05-subquery.md)

    9.6 [事务](09-advanced-query/06-transaction.md)

    9.7 [流式处理](09-advanced-query/07-streaming.md)

    9.8 [自定义 ActiveModel](09-advanced-query/08-custom-active-model.md)

10. 内部设计

    10.1 [特质与类型](10-internal-design/01-trait-and-type.md)

    10.2 [派生宏](10-internal-design/02-derive-macro.md)

    10.3 [与 Diesel 的比较](10-internal-design/03-diesel.md)