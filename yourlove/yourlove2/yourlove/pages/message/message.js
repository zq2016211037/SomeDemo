Page({
  data: {
    navLists:[{
      "navLogo":"/images/Message/like.png",
      "navName":'赞 ',
      "naviUrl":'/pages/message/myzan/myzan'
    },{
        "navLogo": "/images/Message/msgtitle.png",
      "navName": '评论',
      "naviUrl": '/pages/message/MyComment/MyComment'
    }],
    commentLists:[]
  },
  onLoad:function(options){
    this.getData();
  },
  getData:function(){
    var that = this;
    wx.request({
      url: 'http://rap2api.taobao.org/app/mock/16053/commentLists',
      header: {
        "Content-Type": "applciation/json"
      },
      method: "GET",
      success: function (res) {
        that.setData({
          commentLists: res.data.commentLists
        })
      },
      fail: function (err) { },//请求失败
      complete: function () { }//请求完成后执行的函数
    })
  },
  naviUrl:function(e){
    console.log(e);
    var index = e.currentTarget.dataset.index;
    var nextURL = this.data.navLists[index].naviUrl;
    console.log(typeof nextURL);
    wx.navigateTo({
      url: nextURL,
    })
  },
})