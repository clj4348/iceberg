import { config } from "../config.js";
// 请求方法封装
class http {
  request(url, data = {}, method='get'){
    const promise = new Promise((resolve, reject) => {
      wx.request({
        url: config.api + url,
        data: data,
        header: {
          'content-type': 'application/json',
          'appKey': config.appkey
        },
        method: method,
        success: function (res) {
          resolve(res.data)
        },
        fail: function (res) { 
          reject()
        }
      })
    })
    return promise
  }
}
export {
  http
}