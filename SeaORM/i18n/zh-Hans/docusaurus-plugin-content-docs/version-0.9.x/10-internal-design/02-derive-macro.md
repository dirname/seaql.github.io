# 衍生宏 Derive Macros

## EntityModel

[`EntityModel`](#) 衍生宏是“全能”宏，它能从给定的 `Model` 自动生成 `Entity`、`Column` 和 `PrimaryKey`。

## Entity

[`DeriveEntity`](#) 衍生宏将为 `Entity` 实现 [`EntityTrait`](#)，并假设 `Model`、`Column`、`PrimaryKey` 和 `Relation` 在当前范围内存在。它还为 `Entity` 提供了对 [`Iden`](#) 和 [`IdenStatic`](#) 的实现。

## Column

[`DeriveColumn`](#) 衍生宏将为 `Columns` 实现 [`ColumnTrait`](#)。通过实现 [`Iden`](#) 和 [`IdenStatic`](#)，它定义了每一列的标识符。同时衍生出的还有 [`EnumIter`](#)，允许遍历所有枚举变体。

## 主键 Primary Key

[`DerivePrimaryKey`](#) 衍生宏将为 `PrimaryKey` 实现 [`PrimaryKeyToColumn`](#)，用于定义主键和列之间的繁琐映射。`[`EnumIter`](#)` 同样被衍生出来，允许遍历所有枚举变体。

## 模型 Model

[`DeriveModel`](#) 衍生宏将为 `Model` 实现 [`ModelTrait`](#)，它为模型中的所有属性提供设置器和获取器。同时，它还实现了 [`FromQueryResult`](#)，以便将查询结果转换成对应的 `Model`。

## 活动模型 Active Model

[`DeriveActiveModel`](#) 衍生宏将为 `ActiveModel` 实现 [`ActiveModelTrait`](#)，它为活动模型中所有活动值提供设置器和获取器。

## 活动枚举 Active Enum

[`DeriveActiveEnum`](#) 衍生宏将为任何枚举实现 [`ActiveEnum`](#)。

## 关系 Relation

[`DeriveRelation`](#) 衍生宏将为 `Relation` 实现 [`RelationTrait`](#)。

## 可迭代 Iterable

[`EnumIter`](#) 衍生宏将实现 [`Iterable`](#)，以允许遍历所有枚举变体。