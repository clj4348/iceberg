// components/book/book.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    book:Object
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTapDetail: function(){
      const bookId = this.properties.book.id
      wx.navigateTo({
        url: `/pages/book-detail/detail?bid=${bookId}`
      })
    }
  }
})