<template>
  <Layout>
    <div class="main-container" v-loading="isLoading" ref="mainContainer">
      <BlogDetail :blog="data" v-if="data" />
      <BlogComment v-if="!isLoading" />
    </div>
    <template #right>
      <div class="blog-toc-container" v-loading="isLoading">
        <BlogTOC :toc="data.toc" v-if="data" />
      </div>
    </template>
  </Layout>
</template>

<script>
import { setTitle } from "@/utils"
import BlogComment from "../BlogComment"
import "highlight.js/styles/github.css"
import fetchData from "@/mixins/fetchData.js"
import { getOneBlog } from "@/api/blog.js"
import Layout from "@/components/Layout"
import BlogDetail from "../BlogDetail"
import BlogTOC from "../BlogTOC"
import mainScroll from "@/mixins/mainScroll.js"
export default {
  data() {
    return {}
  },
  mixins: [fetchData(null), mainScroll("mainContainer")],
  components: { Layout, BlogDetail, BlogTOC, BlogComment },
  methods: {
    async fetchData() {
      const resp = await getOneBlog(this.$route.params.id)
      if (!resp) {
        this.$router.push("/404")
        return
      }
      if (resp.title) {
        setTitle.setRouteTitle(resp.title)
      }
      return resp
    },
  },
  updated() {
    //页码加载跳转到哈希值相应位置
    const hash = location.hash
    location.hash = ""
    setTimeout(() => {
      location.hash = hash
    }, 50)
  },
}
</script>

<style lang="less" scoped>
.main-container {
  overflow-y: auto;
  padding: 30px;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  scroll-behavior: smooth;
}
.blog-toc-container {
  width: 300px;
  height: 100%;
  overflow-y: auto;
  position: relative;
  box-sizing: border-box;
}
</style>
