import getComponentRootDom from "./getComponentRootDom.js"
import Icon from "@/components/Icon"
import styles from "./showMessage.module.less"

/**
 *
 * @param {String} content 显示的内容
 * @param {String} type 消息类型 info error success warn
 * @param {Number} duration 多久消失
 * @param {HTMLElement} container 要放进的目标容器 ，没有则默认为body （消息会显示到容器的正中）
 * @param {Function}  callback 消息消失后执行的回调函数
 */
export default function showMessage(options) {
  const content = options.content || ""
  const type = options.type || "info"
  const duration = options.duration || 2000
  const container = options.container || document.body

  //创建消息元素
  const div = document.createElement("div")
  const iconDom = getComponentRootDom(Icon, { type })
  div.innerHTML = `<span class='${styles.icon}'>${iconDom.outerHTML}</span><div>${content}</div>`
  div.className = `${styles.message} ${styles[type]}`
  //将div放入容器中
  //如果container没设置position 则将它的定位设置为相对定位
    if (getComputedStyle(container).position === "static") {
      container.style.position = "relative"
    }
  container.appendChild(div)

  //显示隐藏动画

  div.scrollHeight //强行让浏览器重排(reflow)

  div.style.transform = "translate(-50%, -50%)"
  div.style.opacity = 1

  //等待一段时间消失
  setTimeout(() => {
    div.style.opacity = 0
    div.style.transform = "translate(-50%, -50%) translateY(30px)"
    div.addEventListener(
      "transitionend",
      () => {
        div.remove()
        //有回调函数就执行
        if (options.callback) {
          options.callback()
        }
      },
      { once: true }
    ) //该事件触发一次
  }, duration)
}
