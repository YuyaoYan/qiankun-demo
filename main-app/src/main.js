import Vue from "vue";
import App from "./App.vue";
import { registerMicroApps, start, setDefaultMountApp } from "qiankun";
import microApps from "./micro-app";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");

const config = {
  beforeLoad: [
    app => {
      console.log(
        "%c before load ",
        "background:#A0522D ; padding: 1px; border-radius: 3px;  color: #fff",
        app.name
      );
    }
  ], // 挂载前回调
  beforeMount: [
    app => {
      console.log(
        "%c before mount ",
        "background:#32CD32 ; padding: 1px; border-radius: 3px;  color: #fff",
        app.name
      );
    }
  ], // 挂载后回调
  afterMount: [
    app => {
      console.log(
        "%c after mount ",
        "background:#006400 ; padding: 1px; border-radius: 3px;  color: #fff",
        app.name
      );
    }
  ],
  beforeUnmount: [
    app => {
      console.log(
        "%c before unload ",
        "background:#C71585 ; padding: 1px; border-radius: 3px;  color: #fff",
        app.name
      );
    }
  ],
  afterUnmount: [
    app => {
      console.log(
        "%c after unload ",
        "background:#800080 ; padding: 1px; border-radius: 3px;  color: #fff",
        app.name
      );
    }
  ] // 卸载后回调
};

registerMicroApps(microApps, config);
setDefaultMountApp(microApps[0].activeRule); // 默认打开第一个子项目
start();
