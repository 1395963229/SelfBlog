// 事件总线
// listeners = {
//   event1: [handle1, handle2], 事件1和它的函数
//   event2: [handle1, handle2], 事件2和它的函数
// }

// const listeners = {}

// export default {

//   //监听事件
//   $on(eventName, handle) {
//     if (!listeners[eventName]) {
//       //如果没有此事件，就创建这个事件
//       listeners[eventName] = new Set()
//     }
//     listeners[eventName].add(handle)
//   },

//   //取消监听
//   $off(eventName, handle) {
//     if (!listeners[eventName]) {
//       return
//     }
//     listeners[eventName].delete(handle)
//   },

//   //触发事件
//   $emit(eventName, ...args) { //触发事件，可以传参数
//     if (!listeners[eventName]) {
//       return
//     }
//     for (const handle of listeners[eventName]) {
//       handle(...args)
//     }
//   },
// }

import Vue from "vue"
const bus = new Vue({})
Vue.prototype.$bus =bus
export default bus
