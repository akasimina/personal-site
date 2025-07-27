<template>
  <ul class="contact-container">
    <li v-for="(item, index) in contactList" :key="index">
      <a :href="item.href" target="_blank">
        <div class="icon" :class="{ weixin: item.icon === 'weixin' }">
          <Icon :type="item.icon" />
        </div>
        <span>{{ item.text }}</span>
      </a>
      <div v-if="item.image" class="pop">
        <img :src="item.image" alt="" />
      </div>
    </li>
  </ul>
</template>
<script>
import Icon from "@/components/Icon";
export default {
  components: {
    Icon,
  },
  data() {
    return {
      contactList: [
        {
          href: "https://github.com/akasimina",
          icon: "github",
          text: "_Honjeng_Zhou",
        },
        {
          href: "mailto:honjeng20@gmail.com",
          icon: "mail",
          text: "honjeng20@gmail.com",
        },
        {
          href:
            "tencent://message/?Menu=yes&uin=1074368873&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45",
          icon: "qq",
          text: "1074368873",
          image: "/qq-qrcode.png",
        },
        { href: "", icon: "weixin", text: "Honjeng" },
      ],
    };
  },
};
</script>
<style scoped lang="less">
@import "~@/styles/var.less";
@import "~@/styles/mixin.less";
.contact-container {
  list-style: none;
  padding: 20px;
  margin: 0;
  color: @gray;
  @itemHeight: 30px;
  li {
    height: @itemHeight;
    line-height: 30px;
    margin: 14px 0;
    position: relative;
    &:hover {
      .pop {
        transform: scaleY(1);
      }
    }
  }
  a {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .icon {
    font-size: 26px;
    width: 36px;
    &.weixin {
      font-size: 32px;
      text-indent: -3px;
    }
  }
  .pop {
    .flex-center();
    position: absolute;
    left: 0;
    bottom: @itemHeight + 5px;
    padding: 10px 15px;
    background: white;
    border-radius: 5px;
    transform: scaleY(0);
    transform-origin: center bottom;
    transition: 0.3s;
    img {
      width: 150px;
      height: 150px;
      object-fit: cover;
    }
    &::after {
      content: "";
      position: absolute;
      left: 50%;
      transform: translateX(-50%) rotate(45deg);
      width: 8px;
      height: 8px;
      background: white;
      bottom: -4px;
    }
  }
}
</style>
