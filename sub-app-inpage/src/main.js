import Vue from "vue";
import Vuex from "vuex";
import cloneDeep from "clone-deep";
import App from "./App.vue";
import routes from "./router";
import store from "./store";
import VueRouter from "vue-router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import { name } from "../package.json";
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(Vuex);
let install = null;
Vue.prototype.$store = store;

function render(props = {}) {
  const { container } = props;
  const router = new VueRouter({
    // base: window.__POWERED_BY_QIANKUN__ ? routerBase : process.env.BASE_URL,
    // mode: "history",
    routes
  });

  // 增加路由判断
  // if (window.__POWERED_BY_QIANKUN__) {
  //   router.beforeEach((to, from, next) => {
  //     // to and from are both route objects. must call `next`.
  //     if (!to.path.includes("/sub")) {
  //       next({ path: `/sub/${name}${to.path}` });
  //     } else {
  //       next();
  //     }
  //   });
  // }
  // let _store = initStore(props);
  install = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount(container ? container.querySelector("#app") : "#app");
}

if (window.__POWERED_BY_QIANKUN__) {
  // eslint-disable-next-line
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
} else {
  render();
}

export async function bootstrap() {
  console.log("micro app bootstrap");
}

export async function mount(props) {
  // 设置主应用下发的方法
  props.fn &&
    Object.keys(props.fn).forEach(method => {
      Vue.prototype[`$${method}`] = props.fn[method];
    });

  // 设置通讯
  Vue.prototype.$onGlobalStateChange = props.onGlobalStateChange;
  Vue.prototype.$setGlobalState = props.setGlobalState;
  render(props);
}
export async function unmount() {
  install.$destroy();
  install.$el.innerHTML = ""; // 子项目内存泄露问题
  install = null;
  console.log("micro app unmount");
}
