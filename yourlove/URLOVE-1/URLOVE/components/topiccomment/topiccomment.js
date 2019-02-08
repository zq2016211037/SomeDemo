
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    userHead:{
      type:String,
      value:''
    },
    userName:{
      type:String,
      value:''
    },
    applaudNum:{
      type:String,
      value:""
    },
    contents:{
      type:String,
      value:''
    },
    commentuserId:{
      type:Number,
      value:0
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
    gourl:function(res){
    var that = this;
    wx.navigateTo({
      url:"/pages/common/myinfofromothers/myinfofromothers?topicuserId=" + that.data.commentuserId
    })
  },
  }
})
