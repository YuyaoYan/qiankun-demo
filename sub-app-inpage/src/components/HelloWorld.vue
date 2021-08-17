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
    this.$onGlobalStateChange &&
      this.$onGlobalStateChange((state, prev) => {
        if (state.inpageMsg !== prev.inpageMsg) {
          this.inpageMsg = state.inpageMsg;
        }
      });
  },
  methods: {
    sendMessageToFather(v) {
      this.sendMsg = v;
      this.$setGlobalState && this.$setGlobalState({ sendMsg: v });
    },
  },
};
</script>