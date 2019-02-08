// component/comment/comment.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    userLogo:{
      type:String,
      value:''
    },
    userName:{
      type:String,
      value:''
    },
    userLastMsg:{
      type:String,
      value:""
    },
    chatTime:{
      type:String,
      value:''
    },
    unread:{
      type:String,
      value:''
    }
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
    gourl:function(){
      wx.navigateTo({
        url:"/pages/common/anonymousChat/anonymousChat",
      })
    }
  }
})
