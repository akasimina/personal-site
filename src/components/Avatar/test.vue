<template>
  <Avatar :url="url" :size="150" />
</template>

<script>
import Avatar from "./";
export default {
  components: {
    Avatar,
  },
  data() {
    return {
      url: "http://mdrs.yuanjin.tech/img/20201130153821.png",
    };
  },
};
</script>
<style scoped></style>
