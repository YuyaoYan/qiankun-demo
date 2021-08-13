# qiankun 微前端 demo 说明

启动：
```
$ npm start
```

项目文件说明见 `ProjectTree.md`。

通过`npm-run-all`包启动所有应用，主应用 main-app 采用动态路由嵌入两个子应用：`micro-app`和`sub-app`。

`micro-app`中再次采用动态路由实现子应用内部页面的路由跳转：`/one` `/two`。

---

### 1. 路由说明：



##### 1.1 hash 路由：

通过`window.__POWERED_BY_QIANKUN__`增加路由判断,给子应用匹配统一的路由器前缀`/sub`。

这么做是为了保证子应用单独调试时路由匹配正确。

事实上，我们提倡微应用单独开发。

##### 1.2 history 路由：



### 2. LifeCycles:

```js
type Lifecycle = (app: RegistrableApp) => Promise<any>;

beforeLoad - Lifecycle | Array<Lifecycle> - 可选
beforeMount - Lifecycle | Array<Lifecycle> - 可选
afterMount - Lifecycle | Array<Lifecycle> - 可选
beforeUnmount - Lifecycle | Array<Lifecycle> - 可选
afterUnmount - Lifecycle | Array<Lifecycle> - 可选
```

### 3. 父子通讯

想要解决的问题：
- 主应用与微应用的通信
- 微应用之间的通信