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
  },
  data: {
    psgId:'',
    toggle:false   //true 已点赞  false 未点赞
  },

  methods: {
    giveLike: function () {
      var that = this;
      var requestUrl;
      // if(that.properties.likeVerdict){
      //   console.log('toggle true');
      //   that.setData({
      //     toggle:true
      //   })
      // }else{
      //   console.log('toggle false');
      //   that.setData({
      //     toggle:false
      //   })
      // }
      //   if(that.properties.likeVerdict){
      // if(that.properties.likeVerdict){
      //   console.log('toggle true');
      //   that.setData({
      //     likeVerdict:true
      //   })
      // }else{
      //   console.log('toggle false');
      //   that.setData({
      //     likeVerdict:false
      //   })
      // }
      // if(that.data.toggle == false){
      if(that.data.likeVerdict == false){
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
          if (that.data.likeVerdict) {
            console.log('jiajiajia');
            that.setData({
               isLikeNum:parseInt(that.properties.isLikeNum)-1
            })
          }else{
            console.log('jianjianjian');
            that.setData({
               isLikeNum:parseInt(that.properties.isLikeNum)+1
            })
          }
          that.setData({
            // toggle: !(that.properties.toggle),
            likeVerdict:!(that.data.likeVerdict)
          })
          console.log(that.data.likeVerdict);
        },
        fail: function (err) { },//请求失败
        complete: function () { }//请求完成后执行的函数
      })
    }
  }
})
