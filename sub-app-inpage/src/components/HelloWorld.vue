<template>
  <div class="base-container">
    {{ inpageMsg || "waiting for left micro-app‘s message..." }}
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      title: "Micro App",
      inpageMsg: "",
      sendMsg: "",
    };
  },
  mounted() {
    // 增加state监听，当msg数据发生变化的时候，我们修改name，体现在页面上
    this.$onGlobalStateChange((state, prev) => {
      if (state.inpageMsg !== prev.inpageMsg) {
        this.inpageMsg = state.inpageMsg;
      }
    });
  },
  methods: {
    handleClick(param) {
      // let path = `/#/sub/micro-app/${param}`;
      // history.pushState(null, path, path);

      this.$router.push({
        path: `/${param}`,
      });
    },
    sendMessageToFather(v) {
      this.sendMsg = v;
      this.$setGlobalState({ sendMsg: v });
    },
  },
};
</script>

<style scoped>
.option {
  padding-left: 40px;
  width: 284px;
}
.option .el-button {
  display: block;
  margin-bottom: 20px;
  margin-left: 0;
}
.option .el-button.is-plain:focus,
.el-button.is-plain:hover {
  background: #fff;
  border-color: #42b983;
  color: #42b983;
}
.content {
  width: 70%;
  height: calc(100% - 111px);
  position: absolute;
  right: 0;
  top: 51px;
  box-shadow: -1px 2px 10px -4px #888883;
  text-align: center;
  padding: 30px;
}
</style>
