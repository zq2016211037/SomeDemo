var userId, userToken, totalPages;
var page=1;
function loadMore(that) {
  that.setData({
    hidden: false
  })
  if (page <= totalPages) {
    wx.request({
      url: 'https://api.lengren.com.cn/follow/getFansList',
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
        if (res.data.data.fansList) {
          var list = that.data.fansList;
          for (var i = 0; i < res.data.data.fansList.length; i++) {
            list.push(res.data.data.fansList[i]);
          }
          that.setData({
            "fansList": list
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
	data:{
		fansList:null,
    scrollTop: 0,
    scrollHeight: 0,
    hidden: true
	},
	onLoad:function(options){
    userToken = getApp().globalData.userToken;
    userId = getApp().globalData.userId;
    totalPages = options.totalPages;
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          'scrollHeight': res.windowHeight,
          'fansList': []
        })
      }
    })
    page = 1;
    loadMore(this);
  },
  scroll: function (event) {
    this.setData({
      scrollTop: event.detail.scrollTop
    })
  },
  showDetail: function () {
    wx.navigateTo({
      url: '/pages/common/myinfofromothers/myinfofromothers',
    })
  },
  lower: function (event) {
    var that = this;
    loadMore(that);
  }
})		