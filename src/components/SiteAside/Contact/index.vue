<template>
  <ul class="contact-container">
    <li>
      <a href="">
        <div class="icon"><Icon type="github" /></div>
        <span>hello,come on!</span>
      </a>
    </li>
    <li>
      <a href="mailto:1395963229@qq.com">
        <div class="icon"><Icon type="mail" /></div>
        <span>1395963229@qq.com</span>
      </a>
    </li>
    <li>
      <a
        href="tencent://message/?Menu=yes&uin=1395963229&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45"
      >
        <div class="icon"><Icon type="qq" /></div>
        <span>1395963229</span>
      </a>
      <div class="pop">
        <img :src="qqImg" alt="" />
      </div>
    </li>
    <li>
      <a href="">
        <div class="icon weixin"><Icon type="weixin" /></div>
        <span>zj13479012344</span>
      </a>
      <div class="pop">
        <img :src="wxImg" alt="" />
      </div>
    </li>
  </ul>
</template>

<script>
import qqImg from "@/assets/qq.jpg"
import wxImg from "@/assets/weixin.png"
import Icon from "@/components/Icon"
export default {
  data() {
    return {
      qqImg,
      wxImg,
    }
  },
  components: {
    Icon,
  },
}
console.log(qqImg)
</script>

<style lang="less" scoped>
@import url(~@/components/style/var.less);
.contact-container {
  padding: 20px;
  color: @gray;
  li {
    &:hover .pop {
      transform: scaleY(1);
    }
    @itemHeight: 30px;
    position: relative;
    height: @itemHeight;
    line-height: @itemHeight;
    margin: 14px 0;
    cursor: pointer;
    a {
      display: flex;
      align-content: center;
      font-size: 14px;
    }
    .icon {
      font-size: 26px;
      width: 36px;
      &weixin {
        font-size: 31px;
        margin-left: -3px;
      }
    }
    .pop {
      transform-origin: center bottom;
      transition: all 0.3s;
      transform: scaleY(0);
      position: absolute;
      left: 0;
      bottom: @itemHeight+7px;
      padding: 20px 15px;
      border-radius: 5px;
      background-color: #fff;
      &::after {
        content: "";
        position: absolute;
        left: 50%;
        transform: translateX(-50%) rotate(45deg);
        width: 8px;
        height: 8px;
        background: #fff;
        bottom: -4px;
      }
      img {
        width: 150px;
        height: 150px;
        object-fit: cover;
      }
    }
  }
}
</style>
