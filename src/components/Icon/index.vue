<template>
  <i class="iconfont icon-container" :class="setIcon"></i>
</template>

<script>
const classMap = {
  home: "iconzhuye",
  success: "iconzhengque",
  error: "iconcuowu",
  close: "iconguanbi",
  warn: "iconjinggao",
  info: "iconxinxi",
  blog: "iconblog",
  code: "iconcode",
  about: "iconset_about_hov",
  weixin: "iconweixin",
  mail: "iconemail",
  github: "icongithub",
  qq: "iconsign_qq",
  arrowUp: "iconiconfonticonfonti2copy",
  arrowDown: "iconiconfonticonfonti2",
  empty: "iconempty",
  chat: "iconliuyan",
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
@import "//at.alicdn.com/t/font_2164449_nalfgtq7il.css";
.iconfont {
  color: inherit;
  font-size: inherit;
}
</style>
