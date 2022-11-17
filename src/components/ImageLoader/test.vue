<template>
   <ImageLoader
    :src="src"
    :placeholder="placeholder"
    :duration="duration"
    @load="changeImgUrl"
  />
 
</template>

<script>
import ImageLoader from "./"
export default {
  data() {
    return {
      src: "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304",
      placeholder:
        "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100",
      duration: 1000,
    }
  },
  components: {
    ImageLoader,
  },
  methods: {
    changeImgUrl() {
      console.log('图片加载完成,changeImgUrl函数执行')
    },
  },
}
</script>

<style scoped>
.image-loader-container{
  position: relative;
  width: 500px;
  height: 300px;
  margin: 0 auto;
}
</style>
