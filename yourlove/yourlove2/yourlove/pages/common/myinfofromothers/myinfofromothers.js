var userId,userToken;
Page({
	data:{
		userhead: "/images/HotSearch/head.jpg",
		username: "Mch",
		userlevel: "Lv9",
		usersignature: "这个人很懒，什么都没留下",
		releasenum: "123",
		focusnum: "456",
		fansnum: "789",
	},
	onLoad:function(){
        userToken = getApp().globalData.userToken;
	    userId = getApp().globalData.userId;
	  },
    follow:function(){
    var that = this;
    wx.request({
      url: 'http://120.78.165.40:9090/follow/addFollow',
      method: "POST",
      data:{
        otherUserId: 48,
        myUserId: this.data.userId
      },
      header: {
        "content-type": "application/x-www-form-urlencoded",
        'userId': this.data.userId,
        'userToken': this.data.userToken
      },
      success: function (res) {
        console.log(res);
      },
      fail: function (err) { },//请求失败
      complete: function () { }//请求完成后执行的函数
    })
  }
})		