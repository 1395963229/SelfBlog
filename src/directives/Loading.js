import imgUrl from "@/assets/loading.svg"
import styles from "./Loading.module.less"
//得到正在加载的图片
function getLoadingImg(el) {
  const img = el.querySelector("img[data-loading=ing]")
  return img
}
//创建加载图片
function createLoadingImg() {
  const img = document.createElement("img")
  img.src = imgUrl
  img.className = styles.center
  img.dataset.loading = "ing"
  return img
}

export default function (el, bingding) {
  const curImg = getLoadingImg(el)
  //如果bingding.value为true，表示正在加载
  if (bingding.value) {
    if (!curImg) {
      const img = createLoadingImg()
      el.appendChild(img)
    }
  } else {
    if (curImg) {
      curImg.remove()
    }
  }
}
