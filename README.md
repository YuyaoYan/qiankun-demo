@[toc]
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

##### 路由切换
- 主应用路由配置：参考qiankun官网说明
- 微应用路由配置：有必要说明的是，微应用可以通过路由守卫来配置成动态的路径，以便微应用可以单独开发。
```js
// main.js
// 增加路由判断
if (window.__POWERED_BY_QIANKUN__) {
  router.beforeEach((to, from, next) => {
    // to and from are both route objects. must call `next`.
    if (!to.path.includes("/sub")) {
      next({ path: `/sub/${name}${to.path}` });
    } else {
      next();
    }
  });
}
```
```js
//   ./router/index.js
let prefix = window.__POWERED_BY_QIANKUN__ ? `/sub/${name}/` : "/";
const routes = [
  {
    path: prefix,
    name: "Home",
    component: Home,
    children: [
      {
        path: `${prefix}one`,
        component: One
      }
    ]
  },
  {
    path: `${prefix}about`,
    name: "about",
    component: About
  }
];
```
### 2. LifeCycles:
```js
type Lifecycle = (app: RegistrableApp) => Promise<any>;
```

| name | -- | description |
|--|--|--|
|beforeLoad |Array<Lifecycle>  |可选 |
|beforeMount | Array<Lifecycle> | 可选|
|afterMount |  Array<Lifecycle>|可选 |
|beforeUnmount  |  Array<Lifecycle>|可选|
|afterUnmount | Array<Lifecycle> | 可选|




### 3. 父子通讯

想要解决的问题：
##### 3.1主应用与微应用的通信
在主应用（main-app）中：
- 通过`qiankun`提供的`initGlobalState`初始化state。
- `onGlobalStateChange`监听变化

```js
// 主应用状态初始化
// 通讯
const actions = initGlobalState({               // 👈
  mt: "init", // 初始化state
  msg: "",
  sendMsg: ""
});
// 在项目中任何需要监听的地方进行监听
actions.onGlobalStateChange((state, prev) => {              // 👈
  console.log("main state change", state);
});
// 将action对象绑到Vue原型上，为了项目中其他地方使用方便
Vue.prototype.$actions = actions;
```

子应用（micro-app）中：
- 接收到主应用的方法并挂载。
```js
export async function mount(props) {
  // 设置通讯
  Vue.prototype.$onGlobalStateChange = props.onGlobalStateChange;  // 👈
  Vue.prototype.$setGlobalState = props.setGlobalState;            // 👈
  render(props);
}
```
- 变化时更新该数据：
```js
sendMessageToFather(v) {
  this.sendMsg = v;
  this.$setGlobalState({ sendMsg: v });
}
```

主应用接收该变化并更新进store管理：
```js
actions.onGlobalStateChange((state, prev) => {
  console.log("main state change", state);
  _store.commit("updateMsg", state);
  _store.commit("updateSendMsg", state);
});
```

##### 3.2微应用之间的通信


### Trouble Shooting
1. 微应用切换回主应用路由后，主应用页面不加载不显示。
