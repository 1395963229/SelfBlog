<template>
  <div class="image-loader-container">
    <img v-if="everythingDoing" class="placeholder" :src="placeholder" alt="" />
    <img
      class="img-show"
      :src="src"
      @load="changeImg"
      :style="{ opacity: imgShowOpacity, transition: `all ${duration}ms` }"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoadingImg: true, //图片正在加载
      everythingDoing: true, //图片加载完成但还在改变opacity
    }
  },
  props: {
    //原始图片路径
    src: {
      type: String,
      required: true,
    },
    //加载完成前的占位图
    placeholder: {
      type: String,
      required: true,
    },
    //原始图加载完成后，切换到原始图经过的毫秒数
    duration: {
      type: Number,
      default: 500,
    },
  },
  computed: {
    imgShowOpacity() {
      return this.isLoadingImg ? 0 : 1
    },
  },
  methods: {
    //图片加载完毕的回调函数
    changeImg() {
      this.isLoadingImg = false
      setTimeout(() => {
        this.everythingDoing = false
      }, this.duration)
      this.$emit("load")
    },
  },
}
</script>

<style lang="less" scoped>
@import url(~@/style/common.less);
.image-loader-container {
  overflow: hidden;
}
img {
  .self-fill();
  z-index: -1;
}
.placeholder {
  filter: blur(12px);
}
</style>
