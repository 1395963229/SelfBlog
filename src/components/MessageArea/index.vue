<template>
  <div class="message-area-container">
    <h1>评论区</h1>
    <DataForm v-on="$listeners"/>
    <h3>
      {{ title }}
      <span>{{ subTitle }}</span>
    </h3>
    <DataList :list="list" />
    <div class="loading" v-loading="isListLoading"></div>
  </div>
</template>

<script>
import DataForm from "./DataForm";
import DataList from "./DataList";
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    subTitle: {
      type: String,
      default: "", 
    },
    list: {
      type: Array,
      default: () => [],
    },
    isListLoading: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    DataForm,
    DataList,
  },
  methods:{
    handleSubmit(formData,callback){
      this.$emit('submit',formData,callback)
    }
  }
};
</script>

<style scoped lang="less">
h1{
  margin: 30px auto;
  width: 100%;
}
.loading {
  position: relative;
  height: 100px;
}
</style>
