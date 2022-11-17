<template>
  <div class="blog-category-container" v-loading="isLoading">
    <h2>文章分类</h2>
    <RightList :list="list" @selected="handleSelected" />
  </div>
</template>

<script>
import RightList from "../RightList"
import fetchData from "@/mixins/fetchData"
import { getBlogtype } from "@/api/blog.js"
export default {
  data() {
    return {
      result: null,
    }
  },
  mixins: [fetchData([])],
  computed: {
    categoryId() {
      return +this.$route.params.categoryId || -1
    },
    limit() {
      return +this.$route.query.limit || 10
    },
    list() {
      const totalArticleCount = this.data.reduce(
        (a, b) => a + b.articleCount,
        0
      )

      const result = [
        { name: "全部", id: -1, articleCount: totalArticleCount },
        ...this.data,
      ]
      return result.map((it) => ({
        ...it,
        isSelect: it.id === this.categoryId,
        sum: `${it.articleCount}`,
      }))
    },
  },
  components: {
    RightList,
  },
  methods: {
    async fetchData() {
      return await getBlogtype()
    },
    handleSelected(item) {
      const query = {
        page: 1,
        limit: this.limit,
      }
      //跳转到当前的页码newPage，this.$route.params.categoryId, this.$route.query.page
      //如果没有分类，/article?page=this.$route.query.page &limit=this.$route.query.limit
      if (item.id === -1) {
        this.$router.push({
          name: "Blog",
          query,
        })
      } else {
        //有分类，/article/cate/this.$route.params.categoryId?page=this.$route.query.page &limit=this.$route.query.limitBl
        this.$router.push({
          name: "CategoryBlog",
          query,
          params: {
            categoryId: item.id,
          },
        })
      }
    },
  },
}
</script>

<style lang="less" scoped>
.blog-category-container {
  position: relative;
  width: 300px;
  box-sizing: border-box;
  padding: 20px;
  overflow-y: auto;
  height: 100%;
  h2 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1em;
    margin-bottom: 5px;
  }
}
</style>
