<template>
  <div class="micro-app-inpage-container">
    <el-input
      v-model="inpageMsg"
      placeholder="与sub-app-inpage子应用通信"
      @change="sendMessageToSubappInpage"
    ></el-input>
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
    sendMessageToSubappInpage(v) {
      this.$setGlobalState({ inpageMsg: v });
    },
  },
};
</script>

<style scoped>
.micro-app-inpage-container{
    width: 230px;
}
</style>
