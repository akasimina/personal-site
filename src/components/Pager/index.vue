<template>
  <!-- 只有总页数大于1的时候才显示 -->
  <div class="pager-container" v-if="pageNumber > 1">
    <a @click="handleClick(1)" :class="{ disabled: current === 1 }"
      >|&lt;&lt;</a
    >
    <a @click="hanldeClick(current - 1)" :class="{ disabled: current === 1 }"
      >&lt;&lt;</a
    >
    <a
      v-for="(n, i) in numbers"
      :key="i"
      :class="{ active: n === current }"
      @click="handleClick(n)"
      >{{ n }}</a
    >
    <a
      @click="handleClick(current + 1)"
      :class="{ disabled: current === pageNumber }"
      >&gt;&gt;</a
    >
    <a
      @click="handleClick(pageNumber)"
      :class="{ disabled: current === pageNumber }"
      >&gt;&gt;|</a
    >
  </div>
</template>

<style lang="less" scoped>
// 在样式中～@代表src目录 webpack配置
@import "~@/styles/var.less";
.pager-container {
  display: flex;
  justify-content: center;
  margin: 20px 0;
  a {
    color: @primary;
    margin: 0 6px;
    cursor: pointer;
    &.disabled {
      color: @lightWords;
      cursor: not-allowed;
    }
    &.active {
      color: @words;
      font-weight: bold;
      cursor: text;
    }
  }
}
</style>

<script>
// 在脚本中@代表src目录（webpack配置）
export default {
  props: {
    current: {
      type: Number,
      default: 1,
    },
    total: {
      type: Number,
      default: 0,
    },
    limit: {
      type: Number,
      default: 10,
    },
    visibleNumber: {
      type: Number,
      default: 10,
    },
  },
  computed: {
    pageNumber() {
      return Math.ceil(this.total / this.limit);
    },
    // 得到页码中最小的数字
    visibleMin() {
      let min = this.current - Math.ceil(this.visibleNumber / 2);
      if (min < 1) min = 1;
      return min;
    },
    // 得到页码中最大的数字
    visibleMax() {
      let max = this.visibleMin + this.visibleNumber - 1;
      if (max > this.pageNumber) max = this.pageNumber;
      return max;
    },
    numbers() {
      let nums = [];
      for (let i = this.visibleMin; i <= this.visibleMax; i++) {
        nums.push(i);
      }
      return nums;
    },
  },
  methods: {
    handleClick(newPage) {
      // 抛出一个事件
      if (newPage < 1) newPage = 1;
      if (newPage > this.pageNumber) newPage = this.pageNumber;
      if (newPage === this.current) return;
      this.$emit("pageChange", newPage);
    },
  },
};
</script>
