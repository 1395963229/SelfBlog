<template>
  <div class="site-aside-container">
    <template v-if="data">
      <Avatar :url="tou" :size="avatar.size" />
      <h1>{{ data.siteTitle }}</h1>
      <Menu />
      <Contact />
      <p>{{ data.icp }}</p></template
    >
  </div>
</template>

<script>
import tou from "@/assets/touxiang.jpg"
import Avatar from "@/components/Avatar"
import Contact from "@/components/SiteAside/Contact"
import Menu from "@/components/SiteAside/Menu"
import { mapState } from "vuex"
export default {
  data() {
    return {
      tou,
      title: "xxxxx",
      avatar: {
        size: 150,
      },
    }
  },
  components: {
    Avatar,
    Contact,
    Menu,
  },
  computed: mapState("setting", ["data"]),
}
</script>

<style lang="less" scoped>
@import url(~@/style/var.less);
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
  }
  p {
    font-size: 12px;
  }
}
</style>
