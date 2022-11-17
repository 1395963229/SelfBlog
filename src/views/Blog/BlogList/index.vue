<template>
  <div class="blog-list-container" v-Loading="isLoading" ref="container">
    <ul>
      <li v-for="item in data.rows" :key="item.id">
        <div v-if="item.thumb" class="thumb">
          <RouterLink
            :to="{
              name: 'DetailBlog',
              params: {
                id: item.id,
              },
            }"
          >
            <img v-layz="item.thumb" :alt="item.title" :title="item.title" />
          </RouterLink>
        </div>
        <div class="main">
          <RouterLink
            :to="{
              name: 'DetailBlog',
              params: {
                id: item.id,
              },
            }"
          >
            <h2>{{ item.title }}</h2>
          </RouterLink>
          <div class="aside">
            <span>日期：{{ formatDate(item.createDate) }}</span>
            <span>浏览：{{ item.scanNumber }}</span>
            <span>评论{{ item.commentNumber }}</span>
            <RouterLink
              :to="{
                name: 'CategoryBlog',
                params: {
                  categoryId: item.category.id,
                },
              }"
              class=""
              >分类{{ item.category.id }}</RouterLink
            >
          </div>
          <div class="desc">
            {{ item.description }}
          </div>
        </div>
      </li>
    </ul>
    <!-- 分页放到这里 -->
    <Page
      v-if="!isLoading"
      :current="getRouterInfo.page"
      :total="data.total"
      :limit="getRouterInfo.limit"
      :visibleNumber="10"
      @pageChange="handlePageChange"
    />
    <Empty v-if="data.length === 0 && !isLoading" />
  </div>
</template>

<script>
import Empty from "@/components/Empty"
import Page from "@/components/Page"
import { getBlog } from "@/api/blog.js"
import fetchData from "@/mixins/fetchData.js"
import { formatDate } from "@/utils"
import mainScroll from "@/mixins/mainScroll.js"
export default {
  mixins: [fetchData({ total: 0, data: [] }), mainScroll("container")], //不是mainScroll(this.$refs.container)？？ 传dom过去为啥是直接写字符串ref的值
  methods: {
    //处理页码变化
    handlePageChange(newPage) {
      const query = {
        page: newPage,
        limit: this.getRouterInfo.limit,
      }
      //跳转到当前的页码newPage，this.$route.params.categoryId, this.$route.query.page
      //如果没有分类，/article?page=this.$route.query.page &limit=this.$route.query.limit
      if (this.$route.params.categoryId === -1) {
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
            categoryId: this.getRouterInfo.categoryId,
          },
        })
      }
    },
    //处理时间戳
    formatDate,
    //获取数据
    async fetchData() {
      return await getBlog(
        this.getRouterInfo.page,
        this.getRouterInfo.limit,
        this.getRouterInfo.categoryId
      )
    },
  },
  components: {
    Page,
    Empty,
  },
  computed: {
    //获取路由信息
    getRouterInfo() {
      const categoryId = +this.$route.params.categoryId || -1
      const page = +this.$route.query.page || 1
      const limit = +this.$route.query.limit || 10
      return {
        categoryId, //分类
        page, //页数
        limit, //每页信息量
      }
    },
  },
  watch: {
    async $route() {
      this.isLoading = true
      this.$refs.container.scrollTop = 0
      this.data = await this.fetchData()
      this.isLoading = false
    },
  },
}
</script>

<style scoped lang="less">
@import "~@/style/var.less";
.blog-list-container {
  scroll-behavior: smooth;
  line-height: 1.7;
  position: relative;
  padding: 20px;
  overflow-y: auto;
  // &::-webkit-scrollbar {
  //   width: 0 !important;
  // }
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
}
li {
  display: flex;
  padding: 15px 0;
  border-bottom: 1px solid @gray;
  .thumb {
    flex: 0 0 auto;
    margin-right: 15px;
    img {
      display: block;
      max-width: 200px;
      border-radius: 5px;
    }
  }
  .main {
    flex: 1 1 auto;
    h2 {
      margin: 0;
    }
  }
  .aside {
    font-size: 12px;
    color: @gray;
    span {
      margin-right: 15px;
    }
  }
  .desc {
    margin: 15px 0;
    font-size: 14px;
  }
}
</style>
