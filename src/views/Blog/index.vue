<template>
  <Layout>
  <BlogList/>
<template #right>
<BlogCategroy/>
</template>
  </Layout>
</template>

<script>
import Layout from '@/components/Layout'
import BlogCategroy from './BlogCategory'
import BlogList from './BlogList'
export default {
components:{
  Layout,
  BlogCategroy,
  BlogList
}
}
</script>

<style>

</style>