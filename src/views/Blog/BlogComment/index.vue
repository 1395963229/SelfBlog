<template>
  <div class="blog-comment-container">
    <MessageArea
      :title="'评论列表'"
      :subTitle="`(${data.total})`"
      :list="data.rows"
      :isListLoading="isLoading"
      @submit="handleSubmit"
    />
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData.js"
import MessageArea from "@/components/MessageArea"
import { getComment, sendComment } from "@/api/blog.js"
export default {
  mixins: [fetchData({ total: 0, rows: [] })],
  components: {
    MessageArea,
  },
  data() {
    return {
      page: 1,
      limit: 10,
    }
  },
  computed: {
    //判断有没有更多评论
    hasMore() {
      return this.data.rows.length < this.data.total
    },
  },
  beforeDestroy() {
    this.$bus.$off("mainScroll", this.handleScroll)
  },
  created() {
    this.$bus.$on("mainScroll", this.handleScroll)
  },
  methods: {
    handleScroll(dom) {
      if (this.isLoading || !dom) {
        //正在加载中
        return
      }
      const range = 100 //在这个范围内都算作到达了底部
      const diff = Math.abs(dom.scrollTop + dom.clientHeight - dom.scrollHeight)
      if (diff <= range) {
        this.moreComment()
      }
    },
    async fetchData() {
      return await getComment(this.page, this.limit, this.$route.params.id)
    },
    //获取更多评论
    async moreComment() {
      if (!this.hasMore) {
        return
      }
      this.isLoading = true
      this.page++
      const resp = await this.fetchData()
      this.data.total = resp.total
      this.data.rows = this.data.rows.concat(resp.rows)
      this.isLoading = false
    },
    async handleSubmit(formData, callback) {
      //发送请求获取评论数据
      const resp = await sendComment({
        ...formData,
        blogId: this.$route.params.id,
      })
      this.data.rows.unshift(resp)
      this.data.total++
      callback("评论成功") //调用回调，处理后事
    },
  },
}
</script>

<style lang="less" scoped>
.blog-comment-container {
  margin-top: 50px;
}
</style>
