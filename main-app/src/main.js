import Vue from "vue";
import Vuex from "vuex";
import store from "./store";
import App from "./App.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import {
  registerMicroApps,
  start,
  setDefaultMountApp,
  initGlobalState
} from "qiankun";
import microApps from "./micro-app";
import microConfig from "./micro-config";
import router from "./router";

Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.use(ElementUI);

let _store = new Vuex.Store(store);
Vue.prototype.$store = _store;

new Vue({
  router,
  _store,
  render: h => h(App)
}).$mount("#app");

// 主应用状态初始化
// 通讯
const actions = initGlobalState({
  mt: "init", // 初始化state
  msg: "",
  sendMsg: ""
});
// 在项目中任何需要监听的地方进行监听，在这里监听是为了方便
actions.onGlobalStateChange((state, prev) => {
  console.log("main state change", state);
  _store.commit("updateMsg", state);
  _store.commit("updateSendMsg", state);
});
// 将action对象绑到Vue原型上，为了项目中其他地方使用方便
Vue.prototype.$actions = actions;

registerMicroApps(microApps, microConfig);
setDefaultMountApp(microApps[0].activeRule); // 默认打开第一个子项目
start();
