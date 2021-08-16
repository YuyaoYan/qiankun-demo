<template >
  <div class="mainpage-Container">
    <div id="microapp-inpage-viewport"></div>
    <div id="subapp-inpage-viewport"></div>
  </div>
</template>
<script>
export default {
  name: "Subpages",
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
