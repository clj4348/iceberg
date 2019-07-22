// components/navi/navi.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: String,
    index: {
      type: Number,
      default: 8
    },
    newNumber: Number // 最新一期
  },

  /**
   * 组件的初始数据
   */
  data: {
    prevAct:'./images/triangle@left.png',
    prevDis: './images/triangle.dis@left.png',
    nextAct:'./images/triangle@right.png',
    nextDis: './images/triangle.dis@right.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onNext: function(){
      if (this.properties.index <= 1) {
        return 
      }
      this.triggerEvent('next', '')
    },
    onPrev: function(){
      if (this.properties.index >= this.properties.newNumber){
        return
      }
      this.triggerEvent('previous', '')
    }
  },
  attached: function(){
   
  }
})
