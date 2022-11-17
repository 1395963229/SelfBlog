<template>
  <div
    class="carousel-item-container"
    ref="innerContainer"
    @mousemove="handleMousemove($event)"
    @mouseleave="handleMouseleave"
  >
    <div class="carousel-img" ref="outerContainer" :style="imgLocation">
      <ImageLoader
        @load="anewRender()"
        :src="carousel.bigImg"
        :placeholder="carousel.midImg"
      />
    </div>
    <div class="title" ref="title">{{ carousel.title }}</div>
    <div class="description" ref="desc">{{ carousel.description }}</div>
  </div>
</template>

<script>
import ImageLoader from "@/components/ImageLoader"
export default {
  computed: {
    imgLocation() {
      return {
        transform: `translate(${this.left},${this.top})`,
      }
    },
  },

  props: ["carousel"],
  components: {
    ImageLoader,
  },
  data() {
    return {
      left: 0, //图片left top值
      top: 0,
      titleWidth: 0,
      descWidth: 0,
      containerSize: null, //外层容器的尺寸（img容器）
      innerSize: null, //里层容器的尺寸
      excessWidth: 0,
      excessHeight: 0,
      mouseX: 0, //鼠标的横坐标
      mouseY: 0, //鼠标的纵坐标
    }
  },
  mounted() {
    this.titleWidth = this.$refs.title.clientWidth
    this.descWidth = this.$refs.desc.clientWidth

    this.setSize()
    this.left = -this.excessWidth / 2 + "px"
    this.top = -this.excessHeight / 2 + "px"
    window.addEventListener("resize", this.setSize)
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.setSize)
  },
  methods: {
    //加载文字
    anewRender() {
      this.$refs.title.style.opacity = 1
      this.$refs.title.style.width = 0
      this.$refs.title.clientHeight //reflow
      this.$refs.title.style.transition = "2s"
      this.$refs.title.style.width = this.titleWidth + "px"

      //‘说明’延迟两秒显示
      this.$refs.desc.style.opacity = 1
      this.$refs.desc.style.width = 0
      this.$refs.desc.clientHeight //reflow
      this.$refs.desc.style.transition = "3s 1s"
      this.$refs.desc.style.width = this.descWidth + "px"
    },
    //计算容器宽高
    setSize() {
      this.containerSize = {
        height: this.$refs.outerContainer.clientHeight,
        width: this.$refs.outerContainer.clientWidth,
      }
      this.innerSize = {
        height: this.$refs.innerContainer.clientHeight,
        width: this.$refs.innerContainer.clientWidth,
      }
      this.excessWidth = this.containerSize.width - this.innerSize.width //多出来的宽
      this.excessHeight = this.containerSize.height - this.innerSize.height //多出来的高
    },
    //鼠标移动事件
    handleMousemove(e) {
      const containerLocation =
        this.$refs.innerContainer.getBoundingClientRect()
      const rectX = containerLocation.x
      const rectY = containerLocation.y
      this.mouseX = rectX - e.clientX
      this.mouseY = rectY - e.clientY

      //
      this.left = (this.excessWidth / this.innerSize.width) * this.mouseX + "px"
      this.top =
        (this.excessHeight / this.innerSize.height) * this.mouseY + "px"
    },
    handleMouseleave() {
      this.left = -this.excessWidth / 2 + "px"
      this.top = -this.excessHeight / 2 + "px"
    },
  },
}
</script>

<style lang="less" scoped>
@import "~@/style/var.less";
p {
  color: #fff;
}
.carousel-item-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;

  .carousel-img {
    position: relative;
    left: 0;
    top: 0;
    width: 110%;
    height: 110%;
    transition: 0.3s;
  }
  .title,
  .description {
    position: absolute;
    left: 30px;
    top: 0;
    color: lighten(@gray, 10%);
    letter-spacing: 3px;
    white-space: nowrap;
    opacity: 0;
    overflow: hidden;
    text-shadow: 1px 0 0 rgb(0, 0, 0, 0.3), -1px 0 0 rgb(0, 0, 0, 0.3),
      0 1px 0 rgb(0, 0, 0, 0.3), 0 -1px 0 rgb(0, 0, 0, 0.3);
  }
  .title {
    top: calc(50% + 100px);
    font-size: 2em;
  }
  .description {
    top: calc(50% + 160px);
    font-size: 1.2em;
  }
}
</style>
