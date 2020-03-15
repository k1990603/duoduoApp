// 反正触发多次请求(节流)
let lastTime = null
const timeGap = 600
export function preventMoreClick (context, fn) {
  (function () {
    var nowTime = new Date().getTime()
    if (!lastTime || nowTime - lastTime > timeGap) {
      fn.call(context)
      lastTime = nowTime
    }
  })()
}