<template>
  <i class="iconfont icon-container" :class="setIcon"></i>
</template>

<script>
const classMap = {
  home: "icon-iconfonticonzhuye",
  success: "icon-success-fill",
  error: "icon-error",
  close: "icon-close",
  warn: "icon-warnfill",
  info: "icon-info",
  blog: "icon-blog",
  code: "icon-code",
  about: "icon-about",
  weixin: "icon-weixin",
  mail: "icon-mail",
  github: "icon-github-fill",
  qq: "icon-QQ-circle-fill",
  arrowUp: "icon-up",
  arrowDown: "icon-arrow",
  empty: "icon-empty",
  chat: "icon-chat",
}
export const iconObj = Object.keys(classMap)
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
  },
  computed: {
    setIcon() {
      return classMap[this.type]
    },
  },
}
</script>

<style>
@import "//at.alicdn.com/t/c/font_3757010_ajm2xteem8.css";
.iconfont {
  color: inherit;
  font-size: inherit;
}
</style>
