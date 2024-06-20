# 特性和类型

## 实体 Entity

一个单元结构体，实现了[`EntityTrait`](#)来表示数据库中的一个表。

这个特性包含了实体的属性，包括：
- 表名（实现自[`EntityName`](#)）
- 列（实现自[`ColumnTrait`](#)）
- 关系（实现自[`RelationTrait`](#)）
- 主键（实现自[`PrimaryKeyTrait`](#) 和 [`PrimaryKeyToColumn`](#)）

这个特性还提供了一组用于CRUD操作的API：
- 查询：`find`, `find_*`
- 插入：`insert`, `insert_*`
- 更新：`update`, `update_*`
- 删除：`delete`, `delete_*`

## 列 Column

一个枚举，实现了[`ColumnTrait`](#)，代表了表的所有列以及列的类型和属性。

它同样实现了：
- [`IdenStatic`](#)，提供了静态生命周期的列标识符映射
- [`Iterable`](#)，允许SeaORM核心遍历所有列变种

## 主键 Primary Key

一个枚举，实现了[`PrimaryKeyTrait`](#)，代表主键。每个主键变种必须有对应的列变种。

它同样实现了：
- [`IdenStatic`](#)，提供了静态生命周期的主键标识符映射
- [`Iterable`](#)，允许SeaORM核心遍历所有主键变种

## 模型 Model

一个结构体，实现了[`ModelTrait`](#)，在内存中存储查询结果。这主要用于只读目的，并且它是无状态的。

它同样实现了：
- [`FromQueryResult`](#)，将原始查询结果转换为相应的模型

## 活动模型 Active Model

一个结构体，实现了[`ActiveModelTrait`](#)，代表插入/更新操作。这主要是为了编辑和保存到数据库而设计的。

它同样实现了：
- [`ActiveModelBehavior`](#)，定义了对活动模型的不同操作的处理器

## 活动枚举 Active Enum

一个枚举，实现了[`ActiveEnum`](#)，代表以Rust枚举变种形式存储在数据库中的值。

## 关系 Relation

一个枚举，实现了[`RelationTrait`](#)，定义了与其他实体的关系。

它同样实现了：
- [`Iterable`](#)，允许SeaORM核心遍历所有关系变种

## 相关 Related

一个泛型特性，[`Related`](#)，定义了联接路径来帮助你一起查询相关实体，特别是在多对多关系中特别有用。

## 链接 Linked

一个特性，[`Linked`](#)，定义了复杂的联接路径，包括链式关系、自引用关系和两个实体之间的多重关系。