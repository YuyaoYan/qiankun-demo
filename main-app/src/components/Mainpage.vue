<template >
  <div class="mainpage-Container">
    Test page jump btw mainapp and microapp.
    <h3>To load sub-app-inpage by manual trigger ⬇️</h3>
    <el-button @click="handleLoadSubApp" plain>handle load sub-app</el-button>
    <el-button @click="handleUnmountSubApp" plain
      >handle unmount sub-app</el-button
    >
    <div id="content"></div>
  </div>
</template>
<script>
import { loadMicroApp } from "qiankun";

export default {
  name: "mainpage",
  data() {
    return {
      microApp: null,
    };
  },
  methods: {
    handleLoadSubApp() {
      this.microApp = loadMicroApp({
        name: "sub-app-inpage",
        entry: "//localhost:4012",
        container: "#content",
        props: {},
      });
    },
    handleUnmountSubApp() {
      console.log("this.microApp's lifeCycle", this.microApp);
      this.microApp.unmount();
    },
  },
};
</script>
<style scoped>
.mainpage-Container {
  padding: 20px;
}
/* #content {
  width: 300px;
  height: 300px;
  
} */
#content {
  width: 70%;
  height: calc(100% - 111px);
  position: absolute;
  right: 0;
  top: 51px;
  box-shadow: -1px 2px 10px -4px #888883;
  text-align: center;
  padding: 30px;
}
.mainpage-Container .el-button {
  display: block;
  margin-bottom: 20px;
  margin-left: 0;
  margin-top: 20px;
}
.mainpage-Container .el-button.is-plain:focus,
.el-button.is-plain:hover {
  background: #fff;
  border-color: #42b983;
  color: #42b983;
}
</style>
