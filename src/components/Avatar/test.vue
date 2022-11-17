<template>
  <div>
    <h1>组件</h1>
    <Avatar :url="url" />
  </div>
</template>

<script>
import Avatar from "./"
export default {
  name: "App",
  data() {
    return {
      url: "https://img0.baidu.com/it/u=3749952019,1825770822&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1667581200&t=c76d0aba75e17685ee2b124fc9764d93",
    }
  },
  components: {
    Avatar,
  },
}
</script>
