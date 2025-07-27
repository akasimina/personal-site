<template>
  <div class="image-loader-container">
    <img :src="placeholder" class="placeholder" alt="" />
    <img
      @load="handleLoaded"
      :src="src"
      :style="{ opacity: imageOpacity, transition: `${duration}ms` }"
    />
  </div>
</template>

<style scoped lang="less">
@import "~@/styles/mixin.less";
.image-loader-container {
  width: 100%;
  height: 100%;
  border: 1px solid;
  position: relative;
  overflow: hidden;
  img {
    .self-fill();
    object-fit: cover;
  }
  .placeholder {
    filter: blur(22px);
  }
}
</style>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      default: 500,
    },
  },
  data() {
    return {
      imageOpacity: 0,
    };
  },
  methods: {
    handleLoaded() {
      setTimeout(() => {
        this.imageOpacity = 1;
        this.$emit("load");
      }, this.duration);
    },
  },
};
</script>
