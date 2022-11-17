<template>
  <div class="blog-toc-container">
    <h2>目录</h2>
    <RightList :list="tocWithSelected" @selected="handleSelected" />
  </div>
</template>

<script>
import RightList from "../RightList"
import { debounce } from "@/utils"

export default {
  data() {
    return {
      curAnchor: "",
    }
  },
  components: {
    RightList,
  },
  props: {
    toc: {
      type: Array,
    },
  },
  mounted() {
    this.fn = debounce(this.setSelected, 50)
    this.$bus.$on("mainScroll", this.fn)
  },
  beforeDestroy() {
    this.$bus.$off("mainScroll", this.fn)
  },
  methods: {
    handleSelected(item) {
      location.hash = item.anchor
    },
    //设置正确的curAnchor值
    setSelected(dom) {
      if(!dom){
        return
      }
      const range = 200
      for (const dom of this.doms) {
        if (!dom) {
          continue
        }
        const top = dom.getBoundingClientRect().top
        if (top >= 0 && top <= range) {
          this.curAnchor = dom.id
          return
        } else if (top > range) {
          return
        } else {
          this.curAnchor = dom.id
        }
      }
    },
  },
  computed: {
    //根据toc以及curAnchor 计算出带有selected的数据
    tocWithSelected() {
      const getTOC = (toc = []) => {
        return toc.map((it) => ({
          ...it,
          isSelect: this.curAnchor === it.anchor,
          children: getTOC(it.children),
        }))
      }
      return getTOC(this.toc)
    },
    //获取各个标题的dom,返回一个数组
    doms() {
      const doms = []
      const getDoms = (toc = []) => {
        toc.forEach((it) => {
          doms.push(document.getElementById(it.anchor))
          if (it.children && it.children.length) {
            getDoms(it.children)
          }
        })
      }
      getDoms(this.toc)
      return doms
    },
  },
}
</script>

<style lang="less" scoped>
.blog-toc-container {
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
  height: 100%;
  h2 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1em;
    margin-bottom: 5px;
  }
}
</style>
