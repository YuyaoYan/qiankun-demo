<template >
  <!-- 两个子应用在一个页面通信 -->
  <div class="inpage-container">
    <div id="microapp-inpage-viewport"></div>
    <div id="subapp-inpage-viewport"></div>
  </div>
</template>
<script>
export default {
  name: "Subpages",
  methods: {},
};
</script>
<style scoped>
.inpage-container {
  padding-top: 100px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  justify-content: space-evenly;
}
</style>
