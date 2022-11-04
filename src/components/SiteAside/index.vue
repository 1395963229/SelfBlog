<template>
  <div class="site-aside-container">
    <Avatar :url="avatar.url" :size="avatar.size" />
    <h1>{{ title }}</h1>
    <Menu />
    <Contact />
    <p>黑ICP备17001719号</p>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar"
import Contact from "@/components/SiteAside/Contact"
import Menu from "@/components/SiteAside/Menu"
export default {
  data() {
    return {
      title: "我的个人空间",
      avatar: {
        size: 150,
        url: "https://pic.qqtn.com/up/2019-9/15690311636958128.jpg",
      },
    }
  },
  components: {
    Avatar,
    Contact,
    Menu,
  },
}
</script>

<style lang="less" scoped>
@import url(~@/components/style/var.less);
.site-aside-container {
  text-align: center;
  padding: 20px 0;
  width: 100%;
  height: 100%;
  background-color: @dark;
  h1 {
    margin: 0.6em;
    font-size: 20px;
    color: @white;
  }
  .avatar-container {
    margin: 0 auto;
    border: 1px @gray solid;
  }
  p {
    font-size: 12px;
  }
}
</style>
