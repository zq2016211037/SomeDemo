
Component({
  properties: {
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
    likeVerdict: {
      type: String,
      value: ''
    },
    topicType:{
      type:String,
      value:''
    }
  },
   methods: {
    mifo:function(){
      wx.navigateTo({
        url:'/pages/myinfofromothers/myinfofromothers?loveId=76'
      })
    },
    giveLike: function () {
      var that = this;
      wx.request({
        url: 'http://120.78.165.40:9090/topic/getHomeTopicByTopic',
        data: {
          userId: userId,
          topicId: that.data.psgId
        },
        header: {
          "content-type": "applciation/json",
          'userId': userId,
          'userToken': userToken
        },
        method: "GET",
        success: function (res) {

          console.log(that.data.topicId);
          console.log(res);

        },
        fail: function (err) { },//请求失败
        complete: function () { }//请求完成后执行的函数
      })
    }
  }
})
