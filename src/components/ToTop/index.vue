<template>
  <div v-show="show" class="to-top-container" @click="handleClick">Top</div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    }
  },
  created() {
    this.$bus.$on("mainScroll", this.handleScroll)
  },
  beforeDestroy() {
    this.$bus.$off("mainScroll", this.handleScroll)
  },
  methods: {
    handleScroll(dom) {
      if (!dom) {
        this.show = false
        return
      }
      this.show = dom.scrollTop >= dom.scrollHeight / 2
    },
    handleClick() {
      this.$bus.$emit("setMainScroll", 0)
    },
  },
}
</script>

<style lang="less" scoped>
@import "~@/style/var.less";
.to-top-container {
  width: 50px;
  height: 50px;
  background-color: @primary;
  border-radius: 50%;
  position: fixed;
  right: 50px;
  bottom: 50px;
  line-height: 50px;
  text-align: center;
  cursor: pointer;
  color: #fff;
}
</style>
