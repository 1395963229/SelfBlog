<template>
  <div class="blog-detail-container">
    <h1>{{ blog.title }}</h1>
    <aside>
      <span>日期：{{ formatDate(blog.createDate) }}</span>
      <span>浏览：{{ blog.scanNumber }}</span>
      <a href="#data-form-container">评论：{{ blog.commentNumber }}</a>
      <RouterLink
        :to="{ name: 'CategoryBlog', params: { categoryId: blog.category.id } }"
        >分类：{{ blog.category.name }}</RouterLink
      >
    </aside>
    <div v-html="blog.htmlContent" class="markdown-body"></div>
  </div>
</template>

<script>
import { formatDate } from "@/utils"
export default {
  props: {
    blog: {
      type: Object,
      required: true,
    },
  },
  methods: {
    formatDate,
  },
}
</script>

<style lang="less" scoped>
@import url(~@/style/markdown.css);
@import "~@/style/var.less";
.blog-detail-container {
  margin: 1em 0;
  h1 {
    text-align: center;
  }
  aside {
    height: 40px;
    line-height: 40px;
    font-size: 12px;
    color: @gray;
    margin-bottom: 30px;
    text-align: center;
    span {
      margin: 0 10px;
    }
    a {
      margin: 0 10px;
    }
  }
}
</style>
