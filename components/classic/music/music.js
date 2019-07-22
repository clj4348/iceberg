// components/classic/music/music.js
import { BEH } from "../classic-behavior.js"
Component({
  /**
   * 组件的属性列表
   */
  behaviors: [BEH], // 共用的数据
  properties: {
    // 音乐路径
    musicUrl: {
      type: String,
      default: ''
    },
    title: String, // 音乐标题
    coverImgUrl: String // 微信音乐总关的图片
  },

  /**
   * 组件的初始数据
   */
  data: {
    play: './images/player@play.png',
    pause: './images/player@pause.png',
    isPlayMusic: false, 
  },
  attached: function(){
    let self = this
   
    wx.onBackgroundAudioPlay(function () {
      self.setData({
        isPlayMusic: true
      })
    })
    wx.onBackgroundAudioPause(function () {
      self.setData({
        isPlayMusic: false
      })
    })
  }, 
  /**
   * 组件的方法列表
   */
  ready: function(){
    
  },
  methods: {
    playBtn: function(){
      if (this.data.isPlayMusic){
        this.setData({
          isPlayMusic: false
        })
        this.pauseMusic()
      }else {
        this.setData({
          isPlayMusic: true
        })
        this.playMusic() 
      }
    },
    pauseMusic: function(){
      wx.pauseBackgroundAudio()
    },
    playMusic: function(){
      wx.playBackgroundAudio({
        dataUrl: this.properties.musicUrl,
        title: this.properties.title,
        coverImgUrl: this.properties.imgUrl
      })
    }
  }
})
