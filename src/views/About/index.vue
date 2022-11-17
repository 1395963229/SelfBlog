<template>
  <div class="about-container" v-Loading="loading || srcLoading">
    <iframe
      :src="data"
      frameborder="0"
      class="content"
      @load="srcLoading = false"
    ></iframe>
  </div>
</template>

<script>
import { mapState } from "vuex"
export default {
  data(){
return {
srcLoading:true
}
  },
  computed: {
    ...mapState("about", ["data", "loading"]),
  },
  mounted() {
    this.$store.dispatch("about/fetchAbout")
  },
}
</script>

<style scoped>
.about-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}
.content {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
}
</style>
