import { http } from '../utils/http.js'
class IndexModel extends http{
  getLatest(callBack){
    this.request('classic/latest', {}, 'get')
    .then((res) => {
      callBack && callBack(res)
      this.setStorage(this._getKey(res.index), res)
    })
  }
  
  // 期刊数据切换
  getClassic({nextOrPrev, index, callBack}){
    let key = nextOrPrev === 'next' ? this._getKey(index + 1) : this._getKey(index - 1)
    let getClassicKey = this.getItem(key);
    // 是否有缓存
    if (!getClassicKey){
      this.request('classic/' + index + '/' + nextOrPrev, {}, 'get')
        .then((res) => {
          this.setStorage(key, res)
          callBack && callBack(res)
        })
    }else {
      callBack && callBack(getClassicKey)
    }
  }
  // 设置本地缓存
  setStorage(key, data){
    wx.setStorageSync(key, data)
  }
  // 获取本地缓存
  getItem(name){
    return  wx.getStorageSync(name)
  }
  // 本地缓存name
  _getKey(index){
    return 'classic-' + index 
  }
}
export {
  IndexModel
}