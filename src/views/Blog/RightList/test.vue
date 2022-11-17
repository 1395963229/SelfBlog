<template>
  <div class="right-list-test-container">
    <RightList :list="list" @selected="handleSelected" />
  </div>
</template>

<script>
import RightList from "./index.vue"
export default {
  data() {
    return {
      list: [
        {
          name: "a",
          isSelect: true,
          children: [
            {
              name: "b",
              isSelect: false,
              children: [{ name: "c", isSelect: false, children: [] }],
            },
          ],
        },
        {
          name: "A",
          isSelect: false,
          children: [{ name: "B", isSelect: false, children: [] }],
        },
      ],
    }
  },
  components: {
    RightList,
  },
  methods:{
    handleSelected(item){
        console.log(item)
    }
  }
}
</script>

<style></style>
