<template >
  <div class="mainpage-Container">
    <!-- <el-button plain @click="sendMessageToChildren">与子应用通信</el-button> -->
  </div>
</template>
<script>
export default {
  name: "mainpage",
  methods: {
    // sendMessageToChildren() {
    //   this.$actions.setGlobalState({
    //     msg: "father",
    //   });
    // },
  },
};
</script>
<style scoped>
.mainpage-Container {
  padding: 20px;
}
</style>
