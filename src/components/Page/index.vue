<template>
  <div v-if="pageNumber !== 1" class="page-container">
    <a
      @click.prevent="clickPage(1)"
      href=""
      :class="{ disabled: current === 1 }"
      >|&lt;&lt;</a
    >
    <a
      @click.prevent="clickPage(current-1)"
      href=""
      :class="{ disabled: current === 1 }"
      >&lt;&lt;</a
    >
    <!-- 遍历页码数组 -->
    <a
      @click.prevent="clickPage(page)"
      v-for="(page, i) in pageArr"
      :key="i"
      href=""
      :class="{ active: page === current }"
      >{{ page }}</a
    >
    <a
      @click.prevent="clickPage(current+1)"
      href=""
      :class="{ disabled: current === pageNumber }"
      >&gt;&gt;</a
    >
    <a
      @click.prevent="clickPage(pageNumber)"
      href=""
      :class="{ disabled: current === pageNumber }"
      >&gt;&gt;|</a
    >
  </div>
</template>

<script>
export default {
  props: {
    //当前页码
    current: {
      type: Number,
      default: 1,
    },
    //总数据量
    total: {
      type: Number,
      default: 0,
    },
    //页容量
    limit: {
      type: Number,
      default: 10,
    },
    //可见页码数
    visibleNumber: {
      type: Number,
      default: 10,
    },
  },
  computed: {
    //总页码数
    pageNumber() {
      return Math.ceil(this.total / this.limit)
    },
    //当前显示的最小页码
    visibleMin() {
      let min = this.current - Math.floor(this.visibleNumber / 2)
      min = min < 1 ? 1 : min
      return min
    },
    //当前显示的最大页码
    visibleMax() {
      let max = this.visibleMin + this.visibleNumber - 1
      max = max > this.pageNumber ? this.pageNumber : max
      return max
    },
    //生成页码数组
    pageArr() {
      let arr = []
      for (let i = this.visibleMin; i <= this.visibleMax; i++) {
        arr.push(i)
      }
      return arr
    },
  },
  methods: {
    clickPage(newPage) {
      newPage = newPage < 1 ? 1 : newPage
      newPage = newPage > this.pageNumber ? this.pageNumber : newPage
      if (newPage === this.current) {
        return
      }
      this.$emit("pageChange", newPage)
    },
  },
}
</script>

<style lang="less" scoped>
@import url(~@/style/var.less);
.page-container {
  display: flex;
  justify-content: center;
  a {
    margin: 0 7px;
    color: @primary;
    &.disabled {
      color: @lightWords;
      cursor: not-allowed;
    }
    &.active {
      color: @dark;
      cursor: default;
    }
  }
}
</style>
