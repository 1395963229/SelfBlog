<template>
  <div class="home-container" @wheel="wheelMouse($event)" v-Loading="loading">
    <!-- 图片模块start -->
    <ul
      class="content-ul"
      :style="{ marginTop: currentTop }"
      ref="container"
      @transitionend="handleTransitionend"
    >
      <li v-for="item in data" :key="item.id">
        <CarouseItem :carousel="item" />
      </li>
    </ul>
    <!-- 图片模块end -->
    <!-- 上下箭头模块start -->
    <div v-show="index >= 1" @click="switchTo(index - 1)" class="icon icon-top">
      <Icon type="arrowUp" />
    </div>
    <div
      v-show="index < data.length - 1"
      @click="switchTo(index + 1)"
      class="icon icon-bottom"
    >
      <Icon type="arrowDown" />
    </div>
    <!-- 上下箭头模块end -->
    <!-- 右侧指示器模块start-->
    <ul class="indicator">
      <li
        :class="{ active: i === index }"
        v-for="(item, i) in data"
        :key="item.id"
        @click="switchTo(i)"
      ></li>
    </ul>
    <!-- 右侧指示器模块end-->
  </div>
</template>

<script>
import CarouseItem from "./CarouseItem.vue"
import Icon from "@/components/Icon"
import { mapState } from "vuex"
export default {
  data() {
    return {
      index: 0, //当前是第几张图片
      containerHeight: 0, //容器的高度
      wheeling: false, //滚轮是否在滚动
    }
  },
  created() {
    this.$store.dispatch("banner/fetchBanner")
  },
  mounted() {
    this.containerHeight = this.$refs.container.clientHeight
    window.addEventListener("resize", this.handleResize) //浏览器大小改变时，重新读取容器高度
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize)
  },
  components: {
    CarouseItem,
    Icon,
  },
  computed: {
    ...mapState("banner", ["loading", "data"]),
    currentTop() {
      return -this.index * this.containerHeight + "px"
    },
  },
  methods: {
    handleResize() {
      this.containerHeight = this.$refs.container.clientHeight
    },
    switchTo(i) {
      this.index = i
    },
    handleTransitionend() {
      this.wheeling = false
    },
    wheelMouse(e) {
      if (this.wheeling) {
        return
      }
      if (e.deltaY < -5 && this.index > 0) {
        this.wheeling = true
        this.index--
      } else if (e.deltaY > 5 && this.index < this.data.length - 1) {
        this.wheeling = true
        this.index++
      }
    },
  },
}
</script>

<style lang="less" scoped>
@import "~@/style/common.less";
@import "~@/style/var.less";
.home-container {
  @gap: 25px;
  @jump: 7px;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  .content-ul {
    width: 100%;
    height: 100%;
    transition: 0.5s;
    li {
      width: 100%;
      height: 100%;
    }
  }
  .icon {
    position: absolute;
    left: 50%;
    top: 50%;
    font-size: 20px;
    color: @gray;
    cursor: pointer;
  }
  @keyframes jump-top {
    0% {
      transform: translate(50%, @jump);
    }
    50% {
      transform: translate(50%, -@jump);
    }
    100% {
      transform: translate(50%, @jump);
    }
  }
  @keyframes jump-bottom {
    0% {
      transform: translate(50%, -@jump);
    }
    50% {
      transform: translate(50%, @jump);
    }
    100% {
      transform: translate(50%, -@jump);
    }
  }
  .icon-top {
    top: @gap;
    animation: jump-top 2s infinite;
  }
  .icon-bottom {
    top: auto;
    bottom: @gap;
    animation: jump-bottom 2s infinite;
  }
  //指示器
  .indicator {
    position: absolute;
    right: 20px;
    top: 50%;
    li {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background-color: @words;
      margin: 5px;
      border: 1px solid @white;
      box-sizing: border-box;
      transition: 0.5s;
      cursor: pointer;
      &.active {
        background-color: @white;
      }
    }
  }
}
</style>
