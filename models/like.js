import { http } from '../utils/http.js'
class LikeModel extends http {
  // 是否喜欢请求
  postLike(status, data) {
    let url = status === 1 ? 'like' : 'like/cancel';
    return this.request(url, data, 'post')
  }
  // 获取点赞信息
  getFavor(data, callBack){
    let url = `classic/${data.type}/${data.id}/favor`;
    return this.request(url,'get')
  }
}
export {
  LikeModel
}