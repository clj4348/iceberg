import { SearchModel } from './models.js';
const searchModel = new SearchModel;
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    searchStr:{
      type: String,
      observer: 'loadingMore'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    searching: false,
    hasHistory: [],
    hotList:[],
    searchParam:{
      start: 0,
      count:20,
      summary: 0,
      keyword: ''
    },
    total: 0,
    booksList:[],
    loadingCenter: false,
    loadingBottom: false,
    noneResult: false
  },

  /**
   * 组件的方法列表
   */
  attached: function(){
    this.setData({
      hasHistory: searchModel.getHistoryKey()
    })
    searchModel.getHotSearch().then((res) =>{
      this.setData({
        hotList: res.hot
      })
    })
  },  
  methods: {
    loadingMore(){
      if (this.data.booksList.length >= this.data.total){
        return
      }
      this.setData({
        loadingBottom: true,
        'searchParam.start': this.data.booksList.length
      })
      this.getSearchList();
    },
    // 搜索输入关键词
    onConfirm(event){
      let keyword = event.detail.value;
      if (!keyword){
        return
      }
      searchModel.setHistory(keyword)
      this.setData({
        loadingCenter: true,
        'searchParam.start': 0,
        'searchParam.keyword': keyword
      })
      this.getSearchList()
    },
    getSearchList() {
      this.setData({
        searching: true
      })
      searchModel.getSearchBook(this.data.searchParam).then((res)=>{
        this.setData({
          loadingCenter: false,
          loadingBottom: false,
          booksList: this.data.booksList.concat(res.books),
          total: res.total,
          hasHistory: searchModel.getHistoryKey()
        })
        if(!res.books.length){
          this.setData({
            noneResult: true
          })
        }
      })
    },
    searchBtn(event){
      let keyword = event.currentTarget.dataset.variable;
      this.setData({
        loadingCenter: true,
        'searchParam.start': 0,
        'searchParam.keyword': keyword
      });
      searchModel.setHistory(keyword)
      this.getSearchList() 
    },
    // 删除
    onDelete(){
      this.setData({
        'searchParam.keyword':'',
        searching: false,
        booksList: [],
        noneResult: false
      })
    },
    // 取消
    onCancel(){
      this.triggerEvent('onCancel', false)
    }
  }
})
