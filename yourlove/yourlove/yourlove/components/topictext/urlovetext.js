Component({
  properties: {
    userId:{
      type:String,
      value:''
    },
    userToken:{
      type:String,
      value:''
    },
      img: {
        type: String,
        value: ''
      },
      isLike: {
        type: String,
        value: ''
      },
      avatarUrl: {
        type: String,
        value: ''
      },
      createTime: {
        type: String,
        value: ""
      },
      nickName: {
        type: String,
        value: ''
      },
      isLikeNum: {
        type: String,
        value: ''
      },
      title: {
        type: String,
        value: ''
      },
      likeVerdict:{
        type:String,
        value:''
      },
      userId: {
        type: String,
        value: ''
      },
      content: {
        type: String,
        value: ''
      },
      pageViewNum: {
        type: String,
        value: ''
      },
      psgId:{
        type:String,
        value:''
      },
      topicType:{
        type:String,
        value:''
      },
  },

  /**
   * 组件的初始数据
   */
  data: {
    psgId:'',
    toggle:false   //true 已点赞  false 未点赞
  },

  methods: {
    giveLike: function () {
      var that = this;
      var requestUrl;
      if(that.data.toggle == false){
        requestUrl = 'http://120.78.165.40:9090/topic/topicLikeAuto'
      }else{
        requestUrl = 'http://120.78.165.40:9090/topic/topicLikeDecrement'
      }
      wx.request({
        url: requestUrl,
        data: {
          userId: that.properties.userId,
          topicId: that.properties.psgId
        },
        header: {
          "content-type": "applciation/json",
          'userId': that.properties.userId,
          'userToken': that.properties.userToken
        },
        method: "GET",
        success: function (res) {
          that.setData({
            toggle: false
          })
          console.log(res);
        },
        fail: function (err) { },//请求失败
        complete: function () { }//请求完成后执行的函数
      })
    }
  }
})
