import { http } from '../../utils/http.js'
class SearchModel extends http{
  getSearchBook(data){
    return this.request(
      '/book/search',
      {
        start: data.start,
        count: data.count,
        summary: data.summary,
        q: data.keyword
      },
      'get'
    )
  }
  getHotSearch(){
    return this.request('/book/hot_keyword', {}, 'get')
  }
  setHistory(keyword){
    let storageArr = this.getHistoryKey();
    for (let val in storageArr) {
      if (keyword === storageArr[val]) {
        return 
      }
    }
    // 异步存储
    wx.setStorageSync('keyAarry', this.setHistoryArray(keyword))
  }
  setHistoryArray(item){
    let arr = [];
    let storageArr = this.getHistoryKey();
    if (!storageArr){
      arr.push(item);
    } else {
      // 超出十条数据截取
      if (storageArr.length >= 10){
        storageArr.pop();
      }
      storageArr.unshift(item);
      arr = arr.concat(storageArr);
    }
    return arr
  }
  getHistoryKey(){
    return wx.getStorageSync('keyAarry')
  }
}
export {
  SearchModel
}