import { BookModel } from "../../models/book.js";
import { random } from "../../utils/util.js"
const bookModel = new BookModel
Page({
  /**
   * 页面的初始数据
   */
  data: {
    bookLisk:[],
    searching: false,
    searchStr: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let self = this;
    bookModel.getBook()
      .then((res)=>{
        self.setData({
          bookLisk: res
        })
    })
  },
  searchCheck(){
    this.setData({
      searching:true,
    })
  },
  onCancel(event){
    let flag = event.detail
    this.setData({
      searching: flag,
    })
  },
  onReachBottom(){
    if (this.data.searching){
      this.setData({
        searchStr: random(16)
      })
    }
  }
})