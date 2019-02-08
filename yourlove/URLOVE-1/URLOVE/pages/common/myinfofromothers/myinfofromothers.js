var userId, userToken,otherUserId;
  Page({
	data: {
		userhead: "/images/HotSearch/head.jpg",
    username: "Mch",
    userlevel: "Lv9",
    usersignature: "这个人很懒，什么都没留下",
    releasenum: "123",
    focusnum: "456",
    focustext:'关注',
    fansnum: "789",
    code:'',
	},
    onLoad:function(options) {
      userToken = getApp().globalData.userToken;
      userId = getApp().globalData.userId;
      otherUserId = options.userId;   
    },
    hasfollow: function () {
      var that = this;
      wx.request({
        url: 'http://120.78.165.40:9090/follow/hasFollow',
        method: "GET",
        data: {
          otherUserId: otherUserId,
          myUserId: userId
        },
        header: {
          "content-type": "application/x-www-form-urlencoded",
          'userId': userId,
          'userToken': userToken
        },
        success: function (res) {
          console.log(res);
          if(res.data.code == 102){
            that.setData({
              code:true
            })
          }else{
            that.setData({
              code:false
            })
          }
        },
        fail: function (err) { },//请求失败
        complete: function () { }//请求完成后执行的函数
      })
    },
    follow:function() {
      var that = this;
      that.hasfollow();
      var requestUrl;
      var focustextvalue;
      if(that.data.code){
        requestUrl = 'http://120.78.165.40:9090/follow/deleteFollow';
        focustextvalue = '取消关注'
      }else{
        requestUrl = 'http://120.78.165.40:9090/follow/addFollow';
        focustextvalue = '关注'
      }
      wx.request({
        url: requestUrl,
        method: "POST",
        data: {
          otherUserId: otherUserId,
          myUserId: userId
        },
        header: {
          "content-type": "application/x-www-form-urlencoded",
          'userId': userId,
          'userToken': userToken
        },
        success: function (res) {
          console.log(res);
          that.setData({
            focustext:focustextvalue
          })
        },
        fail: function (err) { },//请求失败
        complete: function () { }//请求完成后执行的函数
      })
    }
  })