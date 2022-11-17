<template>
  <div class="test-container">
    <SiteAside />
  </div>
</template>

<script>
import SiteAside from "./"
export default {
  components: {
    SiteAside,
  }
}
</script>

<style lang="less">
@import url(~@/style/global.less);
.test-container {
  width: 250px;
  height: 100vh;
}
</style>
