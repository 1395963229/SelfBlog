export default function (date, getMinute = false) {
  const time = new Date(+date)
  const month = (time.getMonth() + 1).toString().padStart(2, "0")
  const day = time.getDate().toString().padStart(2, "0")
  let str = `${time.getFullYear()}-${month}-${day}`
  if (getMinute) {
    const hour = time.getHours().toString().padStart(2, "0")
    const min = time.getMinutes().toString().padStart(2, "0")
    const s = time.getSeconds().toString().padStart(2, "0")
    str = `${time.getFullYear()}-${month}-${day} ${hour}:${min}:${s}`
  }
  return str
}
