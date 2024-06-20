# 特性和类型

## 实体

一个单元结构体实现了[`EntityTrait`](#)来表示数据库中的表。

这个特性包含了实体的属性，包括
- 表名（实现了[`EntityName`](#)）
- 列（实现了[`ColumnTrait`](#)）
- 关系（实现了[`RelationTrait`](#)）
- 主键（实现了[`PrimaryKeyTrait`](#)和[`PrimaryKeyToColumn`](#)）

这个特性还提供了一组CRUD操作的API
- 查询：`find`, `find_*`
- 插入：`insert`, `insert_*`
- 更新：`update`, `update_*`
- 删除：`delete`, `delete_*`

## 列

一个枚举类型，实现了[`ColumnTrait`](#)，代表了表的所有列以及列的类型和属性。

它还实现了
- [`IdenStatic`](#) 提供了到具有静态生命周期的列标识符的映射
- [`Iterable`](#) 允许SeaORM核心遍历所有列变体

## 主键

一个枚举类型，实现了[`PrimaryKeyTrait`](#)，代表主键。每个主键变体都必须有一个对应的列变体。

它还实现了
- [`IdenStatic`](#) 提供了到具有静态生命周期的主键标识符的映射
- [`Iterable`](#) 允许SeaORM核心遍历所有主键变体

## 模型

一个结构体，实现了[`ModelTrait`](#)，在内存中存储查询结果。这主要用于只读目的，并且它是无状态的。

它还实现了
- [`FromQueryResult`](#) 将原始查询结果转换为相应的模型

## 活动模型

一个结构体，实现了[`ActiveModelTrait`](#)，代表插入/更新动作。这旨在被编辑并保存到数据库中。

它还实现了
- [`ActiveModelBehavior`](#) 定义了对活动模型的不同动作的处理程序

## 关系

一个枚举类型，实现了[`RelationTrait`](#)，定义了与其他实体的关系。

它还实现了
- [`Iterable`](#) 允许SeaORM核心遍历所有关系变体

## 相关

一个泛型特性，[`Related`](#)，定义了联接路径以帮助您一起查询相关实体，尤其在多对多关系中非常有用。