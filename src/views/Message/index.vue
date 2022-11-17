<template>
  <div class="message-container" ref="messageContainer">
    <MessageArea
      title="留言板"
      :subTitle="`(${data.total})`"
      :list="data.rows"
      :isListLoading="isLoading"
      @submit="handleSubmit"
    />
  </div>
</template>

<script>
import mainScroll from "@/mixins/mainScroll"
import MessageArea from "@/components/MessageArea"
import fetchData from "@/mixins/fetchData"
import { postMessage, getMessage } from "@/api/message"

export default {
  mixins: [fetchData({ total: 0, rows: [] }), mainScroll("messageContainer")],
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
  components: {
    MessageArea,
  },
  beforeDestroy() {
    this.$bus.$off("mainScroll", this.handleScroll)
  },
  created() {
    this.$bus.$on("mainScroll", this.handleScroll)
  },
  methods: {
    async fetchData() {
      return await getMessage(this.page, this.limit)
    },
    async handleSubmit(data, callback) {
      const resp = await postMessage(data)
      callback("留言成功！")
      this.data.rows.unshift(resp)
      this.data.total++
    },

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
  },
}
</script>

<style lang="less" scoped>
.message-container {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 50px 0;
  box-sizing: border-box;
  .message-area-container {
    width: 700px;
    margin: 0 auto;
  }
}
</style>
