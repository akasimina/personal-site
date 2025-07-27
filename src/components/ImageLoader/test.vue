<template>
  <div class="test-container">
    <ImageLoader
      src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
      placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100"
      :duration="1000"
      @load="handleLoaded"
    />
  </div>
</template>
<script>
import ImageLoader from "./";
export default {
  components: {
    ImageLoader,
  },
  methods: {
    handleLoaded() {
      console.log("已经加载完成了");
    },
  },
};
</script>
<style>
.test-container {
  width: 500px;
  height: 400px;
  margin: 100px auto;
  border: 2px solid;
}
</style>
