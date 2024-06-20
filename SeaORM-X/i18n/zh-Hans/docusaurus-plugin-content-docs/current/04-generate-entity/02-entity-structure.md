# 实体结构

## 列

### 列类型

列类型将通过以下映射自动推导：

对于Rust基本数据类型的映射。

| Rust 类型 | 数据库类型 <br/> ([`ColumnType`](https://docs.rs/sea-orm/*/sea_orm/entity/enum.ColumnType.html)) | MSSQL <br/> 数据类型 |
| --------- | --------- | --------- |
| `String` | Char | nchar |
| `String` | String | nvarchar |
| `i8` | TinyInteger | tinyint |
| `u8` | TinyUnsigned | tinyint |
| `i16` | SmallInteger | smallint |
| `u16` | SmallUnsigned | smallint |
| `i32` | Integer | int |
| `u32` | Unsigned | int |
| `i64` | BigInteger | bigint |
| `u64` | BigUnsigned | bigint |
| `f32` | Float | real |
| `f64` | Double | float |
| `bool` | Boolean | bit |
| `Vec<u8>` | Binary | binary |

对于Rust非基本数据类型的映射。你可以在[`entity/prelude.rs`](https://github.com/SeaQL/sea-orm/blob/master/src/entity/prelude.rs)中查看所有重新导出的类型。

| Rust 类型 | 数据库类型 <br/> ([`ColumnType`](https://docs.rs/sea-orm/*/sea_orm/entity/enum.ColumnType.html)) | MSSQL <br/> 数据类型 |
| --------- | --------- | --------- |
| `Date`: chrono::NaiveDate <br/>`TimeDate`: time::Date | Date | date |
| `Time`: chrono::NaiveTime <br/>`TimeTime`: time::Time | Time | time |
| `DateTime`: chrono::NaiveDateTime <br/>`TimeDateTime`: time::PrimitiveDateTime | DateTime | datetime |
| `DateTimeLocal`: chrono::DateTime&lt;Local&gt; <br/>`DateTimeUtc`: chrono::DateTime&lt;Utc&gt; | Timestamp | datetime2 |
| `DateTimeWithTimeZone`: chrono::DateTime&lt;FixedOffset&gt; <br/>`TimeDateTimeWithTimeZone`: time::OffsetDateTime | TimestampWithTimeZone | datetimeoffset |
| `Uuid`: uuid::Uuid, uuid::fmt::Braced, uuid::fmt::Hyphenated, uuid::fmt::Simple, uuid::fmt::Urn | Uuid | uniqueidentifier |
| `Json`: serde_json::Value | Json | nvarchar(max) |
| `Decimal`: rust_decimal::Decimal | Decimal | decimal |
