<template>
  <ul class="menu-container">
    <li v-for="(item, i) in itemArr" :key="i">
      <RouterLink
        :to="{name:item.name}"
        :exact="item.exact"
        :active-class="'selected'"
        :exact-active-class="''"
      >
        <div class="icon"><Icon :type="item.icon" /></div>
        <span>{{ item.text }}</span>
      </RouterLink>
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
          name: "Home",
          text: "首页",
          icon: "home",
          exact: true,
        },
        {
          name: "Blog",
          text: "文章",
          icon: "blog",
          exact: false, //是否精确匹配
        },
        {
          name: "About",
          text: "关于我",
          icon: "about",
          exact: true,
        },
        {
          name: "Project",
          text: "效果&项目",
          icon: "code",
          exact: true,
        },
        {
          name: "Message",
          text: "留言板",
          icon: "chat",
          exact: true,
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
  components: {
    Icon,
  },
}
</script>

<style lang="less" scoped>
@import url(~@/style/var.less);
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
      &.selected {
        background-color: @words;
      }
    }
  }
}
</style>
