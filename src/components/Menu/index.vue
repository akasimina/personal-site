<template>
  <nav class="menu-container">
    <a
      class="menu-item"
      v-for="(item, index) in menuList"
      :key="index"
      :href="item.path"
      @click="handleSelected(item)"
      :class="{ selected: isSelected(item) }"
    >
      <div class="icon">
        <Icon :type="item.icon" />
      </div>
      <span>{{ item.text }}</span>
    </a>
  </nav>
</template>
<script>
import Icon from "@/components/Icon";
export default {
  components: {
    Icon,
  },
  data() {
    return {
      menuList: [
        { icon: "home", text: "首页", path: "/" },
        { icon: "blog", text: "文章", path: "/blog", startWith: true }, //只要当前以link开头，当前菜单就是选中
        { icon: "info", text: "关于我", path: "/about" },
        { icon: "code", text: "项目&效果", path: "/project" },
        { icon: "chat", text: "留言板", path: "/message" },
      ],
    };
  },
  methods: {
    isSelected(item) {
      let path = item.path.toLowerCase();
      let curPathname = location.pathname.toLowerCase();
      if (item.startWith) {
        return curPathname.startsWith(path);
      }
      return path === curPathname;
    },
  },
};
</script>
<style scoped lang="less">
@import "~@/styles/var.less";
.menu-container {
  color: @gray;
  list-style: none;
  margin: 24px 0;
  a {
    height: 45px;
    line-height: 45px;
    padding: 0 50px;
    display: flex;
    align-items: center;
    cursor: pointer;
    &:hover {
      color: white;
    }
  }
  .icon {
    margin: 0 10px;
  }
}

.selected {
  background: #2f2f2f;
}
</style>
