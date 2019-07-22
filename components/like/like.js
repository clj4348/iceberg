// components/like/like.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    favNums:{
      type: Number,
      value: 0
    },
    likeStatus: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    like: 'images/like.png',
    dislike: 'images/like@dis.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeLikeStatus(){
      let isLike = this.properties.likeStatus === 1 ? 0 : 1;
      let count = this.properties.favNums;
      count = isLike === 1 ? count + 1 : count - 1;
      this.setData({
        likeStatus: isLike,
        favNums: count
      })
      this.triggerEvent('like', this.data.likeStatus)
    }
  }
})
