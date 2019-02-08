var userId;
Page({
  data: {
    socketObj:null,
    matchUser:null,
    userId:userId,
    messagequeue: []
  },
  onLoad: function (options) {
    var matchUser = options.matchUser;
    var socketObj = getApp().globalData.socketObj;
    userId = getApp().globalData.userId;
    console.log(userId);
    this.setData({
      "socketObj":socketObj,
      "matchUser":matchUser
    })
  },
  getMessageArray:function(e){
    var that = this;
    var msgobj = e.detail.val;
    if(msgobj.from==userId){
      msgobj.judge = true;
    }else{
      msgobj.judeg = false;
    }
   this.data.messagequeue.push(e.detail.val)
   this.setData({
     'messagequeue': that.data.messagequeue
   })
      console.log(this.data.messagequeue);
  },

  gotoOther:function(){
    console.log(topicuserId)
    wx.navigateTo({
      url:"/pages/common/myinfofromothers/myinfofromothers?topicuserId="+topicuserId
    })
  }
})