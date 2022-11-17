export default function(defaultData = null) {
  return {
    data() {
      return {
        isLoading: true,
        data: defaultData,
      }
    },
    async created() {
      //使用该混入时，需要使用者提供一个fetchData方法
      this.data = await this.fetchData()

      this.isLoading = false
    },
  }
}


