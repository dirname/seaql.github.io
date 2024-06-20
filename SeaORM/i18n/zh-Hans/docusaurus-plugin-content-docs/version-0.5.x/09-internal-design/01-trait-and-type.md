# 特性和类型

## 实体 Entity

一个单元结构体，实现了`EntityTrait`，代表数据库中的一个表。

这个特性包含了实体的属性，包括：
- 表名（实现了`EntityName`）
- 列（实现了`ColumnTrait`）
- 关联（实现了`RelationTrait`）
- 主键（实现了`PrimaryKeyTrait`和`PrimaryKeyToColumn`）

这个特性还提供了一组CRUD操作的API：
- 查询：`find`，`find_*`
- 插入：`insert`，`insert_*`
- 更新：`update`，`update_*`
- 删除：`delete`，`delete_*`

## 列 Column

一个枚举，实现了`ColumnTrait`，代表了表的所有列以及列的类型和属性。

它还实现了：
- `IdenStatic` 提供了具有静态生命周期的列标识符映射
- `Iterable` 允许SeaORM核心遍历所有列变体

## 主键 Primary Key

一个枚举，实现了`PrimaryKeyTrait`，代表主键。每个主键变体必须对应一个列变体。

它还实现了：
- `IdenStatic` 提供了具有静态生命周期的主键标识符映射
- `Iterable` 允许SeaORM核心遍历所有主键变体

## 模型 Model

一个结构体，实现了`ModelTrait`，在内存中存储查询结果。这主要用于只读目的，并且它是无状态的。

它还实现了：
- `FromQueryResult` 将原始查询结果转换为相应的模型

## 活动模型 Active Model

一个结构体，实现了`ActiveModelTrait`，代表插入/更新操作。这旨在被编辑并保存到数据库中。

它还实现了：
- `ActiveModelBehavior` 定义了对活动模型不同动作的处理器

## 活动枚举 Active Enum

一个枚举，实现了`ActiveEnum`，代表以Rust枚举变体形式存储在数据库中的值。

## 关联 Relation

一个枚举，实现了`RelationTrait`，定义了与其他实体的关系。

它还实现了：
- `Iterable` 允许SeaORM核心遍历所有关联变体

## 相关 Related

一个泛型特性，`Related`，定义了连接路径来帮助你一起查询相关实体，尤其在多对多关系中特别有用。

## 链接 Linked

一个特性，`Linked`，定义了复杂的连接路径，包括链式关联、自引用关联以及两个实体之间的多个关联。