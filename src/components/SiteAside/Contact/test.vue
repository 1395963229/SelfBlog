<template>
  <div class="test-contact">
    <Contact />
  </div>
</template>

<script>
import Contact from './'
export default {
components:{
    Contact
}
}
</script>

<style lang="less">
@import url(~@/components/style/global.less);
    .test-contact{
        height: 500px;
        width: 300px;
        border: 2px solid;
        padding-top: 200px;
    }
</style>