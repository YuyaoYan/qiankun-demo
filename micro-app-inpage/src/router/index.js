import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/HelloWorld.vue";
import About from "../components/About.vue";
// import One from "../components/MicroOne.vue";
// import Two from "../components/MicroTwo.vue";
import { name } from "../../package.json";

Vue.use(VueRouter);

// 解决Vue-Router升级导致的Uncaught(in promise) navigation guard问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}
 
let prefix = window.__POWERED_BY_QIANKUN__ ? `/sub/${name}/` : "/";
console.log("name", name, prefix);
const routes = [
  {
    path: prefix,
    name: "Home",
    component: Home,
    children: [
      // {
      //   path: `${prefix}one`,
      //   component: One
      // },
      // {
      //   path: `${prefix}two`,
      //   component: Two
      // }
    ]
  },
  {
    path: `${prefix}about`,
    name: "about",
    component: About
  }
];

export default routes;
