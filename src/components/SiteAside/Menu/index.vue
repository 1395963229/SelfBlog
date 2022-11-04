<template>
  <ul class="menu-container">
    <li v-for="(item, i) in itemArr" :key="i">
      <a :href="item.link" :class="{ active: isRightUrl(item) }">
        <div class="icon"><Icon :type="item.icon" /></div>
        <span>{{ item.text }}</span>
      </a>
    </li>
  </ul>
</template>

<script>
import Icon from "@/components/Icon"

export default {
  data() {
    return {
      itemArr: [
        {
          link: "/",
          text: "首页",
          icon: "home",
        },
        {
          link: "/blog",
          text: "文章",
          icon: "blog",
          isStart: true, //是否只以link开头
        },
        {
          link: "/about",
          text: "关于我",
          icon: "about",
        },
        {
          link: "/project",
          text: "效果&项目",
          icon: "code",
        },
        {
          link: "/message",
          text: "留言板",
          icon: "chat",
        },
      ],
    }
  },
  methods: {
    isRightUrl(item) {
      const a = item.link.toLowerCase()
      const b = location.pathname.toLowerCase()
      if (item.isStart) {
        return b.startsWith(a)
      } else {
        return a === b
      }
    },
  },
  components:{
    Icon
  }
}
</script>

<style lang="less" scoped>
@import url(~@/components/style/var.less);
.menu-container {
  margin: 24px 0;
  color: @gray;
  @itemHeight: 45px;
  li {
    height: 45px;
    line-height: 45px;
    a {
      text-decoration: none;
      color: inherit;
      display: flex;
      align-content: center;
      padding: 0 50px;
      .icon {
        width: 24px;
      }
      &:hover {
        color: #fff;
      }
      &.active {
        background-color: @words;
      }
    }
  }
}
</style>
