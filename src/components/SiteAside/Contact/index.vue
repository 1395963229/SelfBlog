<template>
  <ul class="contact-container">
    <li>
      <a :href="data.github">
        <div class="icon"><Icon type="github" /></div>
        <span>{{ data.githubName }}</span>
      </a>
    </li>
    <li>
      <a :href="`mailto:${data.mail}`">
        <div class="icon"><Icon type="mail" /></div>
        <span>{{ data.mail }}</span>
      </a>
    </li>
    <li>
      <a
        :href="`tencent://message/?Menu=yes&uin=${data.qq}}&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45`"
      >
        <div class="icon"><Icon type="qq" /></div>
        <span>{{ data.qq }}</span>
      </a>
      <div class="pop">
        <img :src="data.qqQrCode" alt="" />
      </div>
    </li>
    <li>
      <a href="">
        <div class="icon weixin"><Icon type="weixin" /></div>
        <span>{{ data.weixin }}</span>
      </a>
      <div class="pop">
        <img :src="data.weixinQrCode" alt="" />
      </div>
    </li>
  </ul>
</template>

<script>
import Icon from "@/components/Icon"
import { mapState } from "vuex"
export default {
  components: {
    Icon,
  },
  computed: mapState("setting", ["data"]),
}
</script>

<style lang="less" scoped>
@import url(~@/style/var.less);
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
