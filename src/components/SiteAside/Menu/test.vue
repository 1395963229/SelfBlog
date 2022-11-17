<template>
  <div class="test-container">
    <Menu></Menu>
  </div>
</template>

<script>
import Menu from "./"
export default {
  components: {
    Menu,
  },
}
</script>

<style lang="less" scoped>
@import url(~@/style/global.less);
    .test-container{
        height: 500px;
        width: 300px;
        border: 2px solid;
        padding-top: 100px;
        background-color: #000;
    }
</style>
