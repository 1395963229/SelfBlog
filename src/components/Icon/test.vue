<template>
  <div>
    <h1>组件</h1>
    <div v-for="i in iconObj" :key="i">
      <Icon :type="i"/>
      {{i}}
    </div>
  </div>
</template>

<script>
import Icon from "./"
import { iconObj } from "./"
export default {
  name: "App",
  data() {
    return {
      type: "home",
      iconObj
    }
  },
  components: {
    Icon,
  },
}
</script>

<style scoped></style>
