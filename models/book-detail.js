import { http } from '../utils/http.js'
class BookDetailModel extends http{
  getDetail(id){
    return this.request(`book/${id}/detail`, 'get')
  }
  getComments(id){
    return this.request(`book/${id}/short_comment`, 'get')
  }
}
export{
  BookDetailModel
}