# 概览

可视化是一个力导向图 ([Observable 上的示例](https://observablehq.com/@d3/force-directed-graph))，其中 *crate* 节点被布局并使用 *depends* 边连接。

使用 `d3-force` 模块 ([仓库](https://github.com/d3/d3-force/tree/v3.0.0)) 来模拟节点之间的交互，如碰撞、电荷和位置力。

这部分的实现并不复杂，但涉及到大量的实验和调整。在与图形可视化交互的用户体验（UX）方面可能有改进空间，但我们认为当前状态对于现在来说是足够的。

 id: overview