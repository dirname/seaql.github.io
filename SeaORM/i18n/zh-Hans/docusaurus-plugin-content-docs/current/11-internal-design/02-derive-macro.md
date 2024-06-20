# 衍生宏

## EntityModel

[`EntityModel`](#) 衍生宏是“万能”宏，它可以从给定的 `Model` 自动生成 `Entity`、`Column` 和 `PrimaryKey`。

## Entity

[`DeriveEntity`](#) 衍生宏将为 `Entity` 实现 `EntityTrait`，并假设在当前作用域中存在 `Model`、`Column`、`PrimaryKey` 和 `Relation`。它还为 `Entity` 提供了 `Iden` 和 `IdenStatic` 的实现。

## Column

[`DeriveColumn`](#) 衍生宏将为 `Columns` 实现 `ColumnTrait`。通过实现 `Iden` 和 `IdenStatic`，它定义了每一列的标识符。同时也衍生了 `EnumIter`，允许遍历所有枚举变体。

## 主键

[`DerivePrimaryKey`](#) 衍生宏将为 `PrimaryKey` 实现 `PrimaryKeyToColumn`，其定义了主键与列之间繁琐的映射。同时，`EnumIter` 也被衍生，允许遍历所有枚举变体。

## Model

[`DeriveModel`](#) 衍生宏将为 `Model` 实现 `ModelTrait`，它为模型中的所有属性提供了设置器和获取器。它还实现了 `FromQueryResult`，用于将查询结果转换为对应的 `Model`。

## 活动模型

[`DeriveActiveModel`](#) 衍生宏将为 `ActiveModel` 实现 `ActiveModelTrait`，它为活动模型中所有活动值提供了设置器和获取器。

## 部分模型

[`DerivePartialModel`](#) 衍生宏将为 `Model` 实现 `PartialModelTrait`。

## 活动枚举

[`DeriveActiveEnum`](#) 衍生宏将为任何枚举实现 `ActiveEnum`。

## 关系

[`DeriveRelation`](#) 衍生宏将为 `Relation` 实现 `RelationTrait`。

## 相关实体

当启用 `seaography` 功能时，[`DeriveRelatedEntity`](#) 衍生宏将为 `RelatedEntity` 枚举实现 `seaography::RelationBuilder`。

## 可迭代

`EnumIter` 衍生宏将实现 `Iterable`，以允许遍历所有枚举变体。

## 值类型

`DeriveValueType` 衍生宏将为 `T` 实现 `From<T> for Value`、`sea_orm::TryGetable for T` 和 `sea_query::ValueType for T`。

## 显示

`DeriveDisplay` 衍生宏将为枚举实现 `std::fmt::Display`。