var userId,userToken;
Component({
  properties: {
    isLikeNum:{
      type:String,
      value:''
    },
    userId:{
      type:String,
      value:''
    },
    userToken:{
      type:String,
      value:''
    },
    psgId:{
      type:String,
      value:''
    },
    likeVerdict:{
      type:String,
      value:''
    },
    zanlogo:{
      type:String,
      value:'/images/yousuozhi/like.png'
    }
  },
  data: {
    psgId:'',
    toggle:false   //true 已点赞  false 未点赞
  },

  methods: {

    giveLike: function () {
      var that = this;
      var requestUrl;
      // if (that.properties.likeVerdict) {
      //   that.setData({
      //     toggle: true
      //   })
      // } else {
      //   that.setData({
      //     toggle: false
      //   })
      // }
      if (that.data.toggle == false) {
        requestUrl = 'http://120.78.165.40:9090/topic/topicLikeAuto'
      } else {
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
          console.log('dianzan');
          console.log(that.properties.psgId);
          that.setData({
            toggle: !(that.data.toggle),
          })
          if (that.properties.toggle) {
            that.setData({
              isLikeNum: parseInt(that.properties.isLikeNum) + 1,
              zanlogo:'/images/yousuoai/haszanlogo.png'
            })
          } else {
            that.setData({
              isLikeNum: parseInt(that.properties.isLikeNum) - 1,
              zanlogo: '/images/yousuoai/like.png'
            })
          }
        },
        fail: function (err) { },//请求失败
        complete: function () { }//请求完成后执行的函数
      })
    }
  }
})
