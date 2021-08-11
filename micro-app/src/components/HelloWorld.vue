<template>
  <div class="base-container">
    <div class="option">
      <h1>{{ msg }}</h1>
      <el-button @click="() => handleClick('one')" plain>micro one</el-button>
      <el-button @click="() => handleClick('two')" plain
        >another micro</el-button
      >
    </div>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Micro App",
    };
  },
  methods: {
    handleClick(param) {
      // let path = `/#/sub/micro-app/${param}`;
      // history.pushState(null, path, path);

      this.$router.push({
        path: `/${param}`,
      });
    },
  },
};
</script>

<style scoped>
.option {
  padding-left: 40px;
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
