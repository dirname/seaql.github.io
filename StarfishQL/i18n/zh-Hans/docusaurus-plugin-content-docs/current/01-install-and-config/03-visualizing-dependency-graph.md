# 可视化依赖图

有了填充好的数据库和运行中的查询引擎，现在是时候进行一些可视化操作了。

## 本地运行应用

```shell
# starfish-ql/freeport/frontend
npm install
npm start
```

服务器将在 [http://localhost:8080/](http://localhost:8080/) 运行。

## 打包应用

```shell
# starfish-ql/freeport/frontend
npm run build
```

应用将使用 [webpack.js](https://webpack.js.org/) 打包到 `starfish-ql/freeport/frontend/dist`。