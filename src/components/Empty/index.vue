<template>
  <div class="Empty-container container-column-center">
    <Icon type="empty" />
    <p class="empty-text">{{ text }}</p>
  </div>
</template>

<style scoped lang="less">
@color: #b5b9bd;
.container-column-center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.Icon-container {
  font-size: 100px;
  color: @color;
}

.empty-text {
  text-align: center;
  color: @color;
  font-weight: 600;
}
</style>

<script>
import Icon from "@/components/Icon";
export default {
  components: {
    Icon,
  },
  props: {
    text: {
      type: String,
      default: "无数据",
    },
  },
};
</script>
