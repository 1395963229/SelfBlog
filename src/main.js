import Vue from "vue"
import App from "./App.vue"
import "@/style/global.less"
import router from "@/router"
import "@/mock"
import store from "@/store" //导入仓库
store.dispatch("setting/fetchSetting")
Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

//导入弹出提示信息模块，并添加至vue原型上
import { showMessage } from "@/utils"
Vue.prototype.$showMessage = showMessage

//导入指令配置对象,配置全局自定义指令
import vLoading from "@/directives/Loading.js"
Vue.directive("Loading", vLoading)
import vLayz from "@/directives/Layz.js"
Vue.directive("Layz", vLayz)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app")

import "@/api/banner.js" //运行banner.js,获取首页数据

import "@/eventBus.js" //导入事件总线




