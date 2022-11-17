import VueRouter from "vue-router" //导入路由
import Vue from "vue"
import routes from "./router"
import {setTitle} from '@/utils'
if(!window.VueRouter){Vue.use(VueRouter) }

const router = new VueRouter({
  routes,
  mode: "history",
})
router.afterEach((to, from) => {
  if (to.meta.title) {
  setTitle.setRouteTitle(to.meta.title)
  }
})
export default router
