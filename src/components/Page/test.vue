<template>
  <div>
    <h1>组件</h1>
    <Page :current="current" :total="total" @pageChange="renderPage($event)" />
  </div>
</template>

<script>
import Page from "./"
export default {
  name: "App",
  data() {
    return {
      current: 22,
      total: 333,
    }
  },
  components: {
    Page,
  },
  methods: {
    renderPage(newPage) {
      this.current = newPage

      //加载数据
    },
  },
}
</script>

<style scoped></style>
