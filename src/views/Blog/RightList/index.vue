<template>
  <ul class="right-list-container">
    <li v-for="(item, i) in list" :key="i">
      <span @click="handleClick(item)" :class="{ active: item.isSelect }">{{
        item.name
      }}</span>
      <span
        @click="handleClick(item)"
        v-if="item.sum"
        class="sum"
        :class="{ active: item.isSelect }"
        >{{ item.sum }}篇</span
      >
      <RightList :list="item.children" @selected="handleClick" />
    </li>
  </ul>
</template>

<script>
export default {
  //list:[{name:xxx,isSelect:boolean,children:[]}]
  name: "RightList",
  props: {
    list: {
      type: Array,
      default: () => [], //当值为数组和对象时，最好使用函数返回值。
    },
  },
  methods: {
    handleClick(item) {
      if (!item.isSelect) {
        //不是选中状态触发
        this.$emit("selected", item)
      }
    },
  },
}
</script>

<style lang="less" scoped>
@import "~@/style/var.less";
.right-list-container {
  list-style: none;
  padding: 0;
  .right-list-container {
    margin-left: 1em;
  }
  li {
    min-height: 40px;
    line-height: 40px;
    font-size: 14px;
    cursor: pointer;
    .active {
      color: @warn !important;
      font-weight: bold !important;
    }
    .sum {
      margin-left: 2em;
      font-size: .5em;
      color: @gray;
      font-weight: 200;
    }
  }
}
</style>
