//导入事件总线
import eventBus from "@/eventBus"
import { debounce } from "@/utils"
import defaultImgSrc from "@/assets/default.gif"

let imgs = []

function setImage(img) {
  img.dom.src = defaultImgSrc
  const rect = img.dom.getBoundingClientRect()
  const viewHeight = document.documentElement.clientHeight
  if (rect.top >= -img.dom.clientHeight && rect.top <= viewHeight) {
    //在视口范围内
    const loadImg = new Image()
    loadImg.src = img.src
    loadImg.onload = () => {
      img.dom.src = img.src
    }
    imgs = imgs.filter((i) => i !== img)
  }
}

//调用该函数，就能设置应该显示的图片
function setImages() {
  for (const img of imgs) {
    setImage(img)
  }
}

function handleScroll() {
  setImages()
}

eventBus.$on("mainScroll", debounce(handleScroll, 50))
export default {
  inserted(el, binding) {
    const img = {
      dom: el,
      src: binding.value,
    }
    imgs.push(img)
    setImage(img)
  },
  unbind(el) {
    imgs = imgs.filter((it) => it.dom !== el)
  },
}
