<template>
  <div class="empty-container">
    <Icon type="empty" />
    <p>{{ text }}</p>
  </div>
</template>

<script>
import Icon from "../Icon"
export default {
  props: {
    text: {
      type: String,
      default: "无数据",
    },
  },
  components: {
    Icon,
  },
}
</script>

<style scoped lang="less">
@import url(~@/components/style/var.less);
@import url(~@/components/style/common.less);
.empty-container {
  .self-center();
  color: @gray;
  text-align: center;
  font-size: 1.5em;
  .icon-container {
    font-size: 100px;
  }
}
</style>
