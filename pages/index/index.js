import { IndexModel } from "../../models/index.js"
import { LikeModel } from "../../models/like.js"
const indexModel = new IndexModel();
const likeModel = new LikeModel();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    classic: {}, // 音乐、视频、句子
    newIndex: 0, // 最新一期 
    favorNum: 0,  // 喜欢数量,
    num: '', // 期刊序号
    islikeStatus: 0,// 是否喜欢状态
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    indexModel.getLatest((res) => {
      this.setData({
        classic: res,
        newIndex: res.index
      })
      this.getFavorInfo(res.id, res.type)
      this.getNum()
    })
  },
  // 点赞状态
  onChangeLikeStatus: function (event) {
    likeModel.postLike(event.detail ,{
      art_id: this.data.classic.id,
      type: this.data.classic.type
    }).then((res) => {

    })
  },
  // 获取上或者下期刊 
  getClassic: function(nextAndPrev){
    var self = this;
    indexModel.getClassic({
      nextOrPrev: nextAndPrev,
      index: self.data.classic.index,
      callBack: (res) => {
        self.setData({
          classic: res,
          favorNum: res.fav_nums
        })
        this.getNum()
        this.getFavorInfo(res.id,res.type)
      }
    })
  },
  // 上一期期刊
  onPrevious: function () {
    var self = this
    this.getClassic('next')
  },
  // 下一期期刊
  onNext: function(){
    var self = this
    this.getClassic('previous')
  },
  getFavorInfo: function (artId, category){
    var self = this;
    likeModel.getFavor({
      id: artId,
      type: category
    }).then((res) => {
      self.setData({
        favorNum: res.fav_nums,
        islikeStatus: res.like_status
      })
    })
  },
  // 获取期刊序号
  getNum() { 
    let idx = this.data.classic.index < 10 ? ('0' + this.data.classic.index) : this.data.classic.index
    this.setData({
      num: idx
    })
  },
  methods:{
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  }
})