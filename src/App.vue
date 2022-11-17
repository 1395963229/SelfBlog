<template>
  <div class="app-container">
    <!-- 整体布局 -->
    <Layout>
      <!-- 左边区域 -->
      <template #left>
        <div class="left">
          <!-- 左侧导航栏 -->
          <SiteAside></SiteAside>
        </div>
      </template>
      <!-- 中间内容区域 -->
      <template #default>
        <div class="content">
          <RouterView />
        </div>
      </template>
      <!-- 右边区域 -->
      <template #right>
        <div class="right"></div>
      </template>
    </Layout>
    <ToTop/>
  </div>
</template>

<script>
import SiteAside from "@/components/SiteAside"
import Layout from "@/components/Layout"
import ToTop from '@/components/ToTop'
export default {
  components: {
    SiteAside,
    Layout,
    ToTop
  },
}
</script>

<style lang="less" scoped>
@import url(~@/style/common.less);
.app-container {
  .self-fill(fixed);
  .left {
    height: 100%;
    width: 250px;
  }
  .content {
    width: 100%;
    height: 100%;
  }
}
</style>
