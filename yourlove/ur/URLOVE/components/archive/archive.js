// components/archive/archives.js
Component({
  properties: {
    title:{
      type:String,
      value:''
    },
    userLogo: {
      type: String,
      value: ''
    },
    userName: {
      type: String,
      value: ''
    },
    psgCnt: {
      type: String,
      value: ""
    },
    isLikeNum: {
      type: String,
      value: ''
    },
    commentNum: {
      type: String,
      value: ''
    },
    psgId:{
      type:String,
      value:''
    },
    topicType: {
      type: String,
      value: ''
    }
  },
  methods: {
    mifo:function(){
      wx.navigateTo({
        url:'/pages/myinfofromothers/myinfofromothers'
      })
    },
    // dianzan  /topic/topicLikeAuto
    giveLike:function(){
      var that = this;
      wx.request({
        url: 'http://120.78.165.40:9090/topic/getHomeTopicByTopic',
        data: {
          userId: userId,
          topicId:that.data.psgId
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
