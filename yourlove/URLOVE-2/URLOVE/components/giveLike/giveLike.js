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
      type:Boolean,
      value:false
    },
    // zanlogo:{
    //   type:String,
    //   value:''
    // }
  },
  data: {
    psgId:'',
    zanlogo:''
    // toggle:''   //true 已点赞  false 未点赞
  },
  ready:function(){
    var that = this;
    userToken = getApp().globalData.userToken;
    userId = getApp().globalData.userId;
    console.log('likeverdict:')
    console.log(that.properties.likeVerdict);
    if (that.properties.likeVerdict){
      that.setData({
        // toggle:true,
        zanlogo:'/images/yousuoai/haszanlogo.png'
      })
    }
    else {
      that.setData({
        // toggle:false,
        zanlogo:'/images/yousuoai/like.png'
      })
    }
  },
  methods: {

    // giveLike: function () {
    //   var that = this;
    //   var requestUrl;
    //   if (that.properties.likeVerdict == false) {
    //     requestUrl = 'http://120.78.165.40:9090/topic/topicLikeAuto'
    //   } else {
    //     requestUrl = 'http://120.78.165.40:9090/topic/topicLikeDecrement'
    //   }
    //   wx.request({
    //     url: requestUrl,
    //     data: {
    //       userId: userId,
    //       topicId: that.properties.psgId
    //     },
    //     header: {
    //       "content-type": "applciation/json",
    //       'userId': userId,
    //       'userToken': userToken
    //     },
    //     method: "GET",
    //     success: function (res) {
    //       console.log(res);
    //       if (that.properties.likeVerdict) {
    //         that.setData({
    //           isLikeNum: parseInt(that.properties.isLikeNum) - 1,
    //           zanlogo: '/images/yousuoai/like.png',
    //           likeVerdict: false
    //         })
    //       }
    //       if(that.properties.likeVerdict == false) {
    //         that.setData({
    //           isLikeNum: parseInt(that.properties.isLikeNum) + 1,
    //           zanlogo: '/images/yousuoai/haszanlogo.png',
    //           likeVerdict: true
    //         })
    //       }
    //       // that.setData({
    //       //   toggle: !(that.data.toggle),
    //       // })
    //     },
    //     fail: function (err) { },//请求失败
    //     complete: function () { }//请求完成后执行的函数
    //   })
    // }
    giveLike:function(){
      var that = this;
      if (that.properties.likeVerdict == false) {
        wx.request({
          url: "http://120.78.165.40:9090/topic/topicLikeAuto",
          method: "GET",
          data: {
            userId: userId,
            topicId: that.properties.psgId
          },
          header: {
            "content-type": "application/json",
            "userId": userId,
            "userToken": userToken
          },
          success: function (res) {
            console.log(res);
            console.log('点赞评论成功');
            that.setData({
              zanlogo: '/images/yousuoai/haszanlogo.png',
              isLikeNum: parseInt(that.properties.isLikeNum) + 1,
              likeVerdict: true
            });
          }
        })
      };
      if (that.properties.likeVerdict == true) {
        wx.request({
          url: "http://120.78.165.40:9090/topic/topicLikeDecrement",
          method: "GET",
          data: {
            userId: userId,
            topicId: that.properties.psgId
          },
          header: {
            "content-type": "application/json",
            "userId": userId,
            "userToken": userToken
          },
          success: function (res) {
            console.log(res);
            console.log('取消点赞评论成功');
            that.setData({
              zanlogo: '/images/yousuoai/like.png',
              likeVerdict: false,
              isLikeNum: parseInt(that.properties.isLikeNum) - 1
            });
          }
        })
      };
    }
  }
})
