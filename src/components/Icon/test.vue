<template>
  <div :style="containerStyle">
    <Icon v-for="type in types" :key="type" :type="type" />
  </div>
</template>

<script>
import Icon from "./";
export default {
  components: {
    Icon,
  },
  data() {
    return {
      types: ["chat", "empty", "arrowDown", "arrowUp", "weixin", "mail"],
      containerStyle: {
        display: "flex",
        gap: "10px",
        margin: "50px",
      },
    };
  },
};
</script>

<style scoped>
.Icon-container {
  font-size: 30px;
}
</style>
