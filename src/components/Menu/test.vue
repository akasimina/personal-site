<template>
  <div class="test-container">
    <Menu></Menu>
  </div>
</template>
<script>
import "@/styles/global.less";
import Menu from "./";
export default {
  components: {
    Menu,
  },
};
</script>
<style lang="less" scoped>
.test-container {
  width: 400px;
  height: 600px;
  background: #000;
  border: 2px solid red;
  margin: 200px auto;
  padding-top: 200px;
}
</style>
