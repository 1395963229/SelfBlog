<template>
  <div>
    <Avatar
      :url="'https://img0.baidu.com/it/u=3749952019,1825770822&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1667581200&t=c76d0aba75e17685ee2b124fc9764d93'"
    />

    <Page :current="current" :total="total" @pageChange="renderPage($event)" />
  </div>
</template>

<script>
import Avatar from "./components/Avatar.vue"
import Page from "./components/Page/index.vue"
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
    Avatar,
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
