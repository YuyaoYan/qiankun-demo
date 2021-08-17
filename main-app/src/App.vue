<template>
  <div id="app">
    <div class="layout-header">
      <div class="logo">QIANKUN-MAIN</div>
      <ul class="sub-apps">
        <li
          :class="{ active: '/#/main/mainpage' === current }"
          @click="jumpToMsinpage()"
        >
          main-app
        </li>
        <li
          v-for="item in microApps"
          :class="{ active: item.activeRule === current }"
          :key="item.name"
          @click="goto(item)"
        >
          {{ item.name }}
        </li>
        <li :class="{ active: '/#/main/inpage' === current }" @click="jumpToApps">
          communicate btw sub apps
        </li>
        <li>
          <el-input
            size="mini"
            v-model="msg"
            placeholder="与micro-app子应用通信"
            @change="sendMessageToChildren"
          ></el-input>
        </li>
        <li>
          {{ childMsg || "👉 Msg Receiving from micro-app..." }}
        </li>
      </ul>
    </div>
    <div id="subapp-viewport">
      <!-- 微应用销毁后，<router-view>将不存在，进而导致切换回主应用时页面不加载问题 -->
      <router-view></router-view>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import microApps from "./micro-app";
export default {
  name: "App",
  data() {
    return {
      microApps,
      current: "",
      msg: "",
      // childMsg: "",
    };
  },
  computed: {
    childMsg() {
      return this.$store && this.$store.state && this.$store.state.sendMsg;
    },
  },
  methods: {
    goto(item) {
      history.pushState(null, item.activeRule, item.activeRule); // 没引入路由，所以不能用路由切换
      this.resetCurrentPath();
    },

    // 跳转主应用页面
    jumpToMsinpage() {
      // history.pushState(null, "/main/mainpage", "/main/mainpage"); // 没引入路由，所以不能用路由切换
      this.$router.push({
        path: "/main/mainpage",
      });
      this.resetCurrentPath();
    },
    jumpToApps() {
      this.$router.push({
        path: "/main/inpage",
      });
      this.resetCurrentPath();
    },
    sendMessageToChildren(v) {
      this.$actions.setGlobalState({
        msg: v,
      });
    },
    resetCurrentPath() {
      let path = `/${window.location.hash}`;
      this.current = path;
    },
  },
  created() {
    let path = `/${window.location.hash}`;
    if (this.microApps.findIndex((item) => item.activeRule === path) >= 0) {
      this.current = path;
    }
  },
};
</script>

<style>
html,
body {
  margin: 0 !important;
  padding: 0;
}
.layout-header {
  height: 50px;
  width: 100%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  line-height: 50px;
  position: relative;
}
.logo {
  float: left;
  margin: 0 50px;
}
.sub-apps {
  list-style: none;
  margin: 0;
  overflow: hidden;
}
.sub-apps li {
  list-style: none;
  padding: 0 20px;
  cursor: pointer;
  float: left;
}
.sub-apps li.active {
  color: #42b983;
  text-decoration: underline;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>