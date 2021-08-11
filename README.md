# qiankun 微前端 demo 说明

- [qiankun 微前端 demo 说明](#qiankun-%E5%BE%AE%E5%89%8D%E7%AB%AF-demo-%E8%AF%B4%E6%98%8E)
    + [路由说明：](#%E8%B7%AF%E7%94%B1%E8%AF%B4%E6%98%8E)
        * [hash 路由：](#hash-%E8%B7%AF%E7%94%B1)

项目目录见 `ProjectTree.md`。

通过`npm-run-all`包启动所有应用，主应用 main-app 采用动态路由嵌入两个子应用：`micro-app`和`sub-app`。

`micro-app`中再次采用动态路由实现子应用内部页面的路由跳转：`/one` `/two`。

---

### 路由说明：



##### hash 路由：

通过`window.__POWERED_BY_QIANKUN__`增加路由判断,给子应用匹配统一的路由器前缀`/sub`。

这么做是为了保证子应用单独调试时路由匹配正确。

事实上，我们提倡微应用单独开发。

##### history 路由：