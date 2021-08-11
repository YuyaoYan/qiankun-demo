import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/HelloWorld.vue";
import One from "../components/MicroOne.vue";
import Two from "../components/MicroTwo.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "/one",
        component: One
      },
      {
        path: "/two",
        component: Two
      }
    ]
  }
];

export default routes;
