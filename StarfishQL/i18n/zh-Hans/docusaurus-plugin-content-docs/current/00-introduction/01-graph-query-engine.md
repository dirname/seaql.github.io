# 什么是图形查询引擎

查询引擎接收以特定查询语言（例如SQL语句）编写的输入查询，在数据库中执行必要的操作，然后将用户应用程序感兴趣的数据输出。您也可以将查询引擎视为一个抽象层，使得用户可以简单地在支持的查询语言中设计查询，而让查询引擎完成其余的工作。

对于*图形*查询引擎而言，输出数据是一个*图形*([wiki](https://en.wikipedia.org/wiki/Graph_(abstract_data_type))).

![图形查询引擎概览](/img/graph_query_engine_overview.png)