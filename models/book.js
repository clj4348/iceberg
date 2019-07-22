import { http } from '../utils/http.js'
class BookModel extends http {
  
  // 获取点赞信息
  getBook() {
    let url = `book/hot_list`;
    return this.request(url, 'get')
  }
}
export {
  BookModel
}