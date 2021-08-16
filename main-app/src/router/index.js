import Vue from "vue";
import Router from "vue-router";
import MainAppEnterPage from "@/components/MainAppEnterPage";
import Mainpage from "@/components/Mainpage";

Vue.use(Router);

// 解决Vue-Router升级导致的Uncaught(in promise) navigation guard问题
// const originalPush = Router.prototype.push;
// Router.prototype.push = function push(location, onResolve, onReject) {
//   if (onResolve || onReject)
//     return originalPush.call(this, location, onResolve, onReject);
//   return originalPush.call(this, location).catch(err => err);
// };

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/main/*"
    },
    {
      path: "/main/*",
      name: "MainAppEnterPage",
      exact: true,
      component: MainAppEnterPage,
      children: [
        {
          path: "/main/mainpage",
          name: "mainpage",
          exact: true,
          component: Mainpage
        }
      ]
    }
  ]
});
