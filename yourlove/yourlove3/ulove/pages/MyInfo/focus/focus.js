var userId,userToken,totalPages;
var allLists = [];
var page = 1;
function loadMore(that) {
  that.setData({
    hidden: false
  })
  if(page<=totalPages){
    wx.request({
      url: 'http://120.78.165.40:9090/follow/getFollowList',
      header: {
        "Content-Type": "applciation/json",
        "userToken": userToken,
        "userId": userId
      },
      method: "GET",
      data: {
        userId: userId,
        page: page
      },
      success: function (res) {
        if (res.data.data.followList) {
          var list = that.data.focusLists;
          for (var i = 0; i < res.data.data.followList.length; i++) {
            list.push(res.data.data.followList[i]);
          }
          that.setData({
            "focusLists": list
          })
          page++;
          that.setData({
            hidden: true
          })
        }
    },
    fail: function (err) {
      console.log(err);
    },
  })
  }
}
Page({
  data: {
    focusLists: [],
    scrollTop:0,
    scrollHeight:0,
    hidden:true
  },
  onLoad: function (options) {
      userToken = getApp().globalData.userToken;
      userId = getApp().globalData.userId;
      totalPages = options.totalPages;
      var that = this;
      wx.getSystemInfo({
        success: function(res) {
          that.setData({
            'scrollHeight':res.windowHeight,
            'focusLists':[]
          })
        }
      })
    page = 1;
    loadMore(that)
  },
  scroll:function(event){
    this.setData({
      scrollTop:event.detail.scrollTop
    })
  },
  showDetail:function(){
    wx.navigateTo({
      url:'/pages/common/myinfofromothers/myinfofromothers',
    })
  },
  lower: function (event) {
    var that = this;
    loadMore(that);
  }
})