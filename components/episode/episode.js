// components/episode/episode.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    num: String 
  },

  /**
   * 组件的初始数据
   */
  data: {
    month: '',
    year: '',
    
  },
  ready: function(){
    this.date();
  },

  /**
   * 组件的方法列表
   */
  methods: {
    date(){
      let date = new Date();
      let y = date.getFullYear();
      let m = date.getMonth();
      let monthList = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十']
      let monthStr = '';

      monthList.forEach((val, key) => {
        switch (m) {
          case 10:
            monthStr = '十一';
            break
          case 11:
            monthStr = '十二';
            break
          default:
            monthStr = monthList[m] + '月'
        }
      })
      this.setData({
        year: y,
        month: monthStr
      })
    }
  }
})
