import axios from "axios"
import showMessage from "../utils/showMessage"
const ins = axios.create()
ins.interceptors.response.use((resp) => {
  //响应体里的code不为0，表示没有错误
  if (resp.data.code === 0) {
    return resp.data.data
  } else {
    //否则有错误，弹出错误消息
    showMessage({
      content: resp.data.msg,
      type: "error",
    })
    return null
  }
})

export default ins
