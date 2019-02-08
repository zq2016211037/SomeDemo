var userId;
var userToken;
Page({
	data:{
		name:"Mrianda",
		brief:"暂无介绍",
		release:"0",
		follow:"0",
		fans:"0",
		XP:"50",
    followtotalPages:0,
    fanstotalPages:0,
    level:"0",
    experience: "",
    userhead:""
	},
	gotolog: function(){
		wx.navigateTo({
			url: '/pages/login/login'
		})
	},
  onShow:function(options){
    this.onLoad();
    this.onReady();
  },
	onLoad:function(options){
    userToken = getApp().globalData.userToken;
    userId = getApp().globalData.userId;
    this.getUserInfo();
	},
	onReady:function(){
    var that = this;
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
        page: 1
      },
      success: function (res) {
        console.log(res.data);
        if(res.data.data.followList){
          that.setData({
            "follow":res.data.data.listSize,
            "followtotalPages":res.data.data.totalPages
          })
        }
      },
      fail: function (err) { },//请求失败
      complete: function () { }//请求完成后执行的函数
    }),
      wx.request({
      url: 'http://120.78.165.40:9090//follow/getFansList',
        header: {
          "Content-Type": "applciation/json",
          "userToken": userToken,
          "userId": userId
        },
        method: "GET",
        data: {
          userId: userId,
          page: 1
        },
        success: function (res) {
          if (res.data.data.fansList) {
            that.setData({
              "fans": res.data.data.listSize,
              "fanstotalPages":res.data.data.totalPages
            })
          }
        },
        fail: function (err) { },//请求失败
        complete: function () { }//请求完成后执行的函数
      })		
	},
    tofocus:function(){
      var that = this;
      wx.navigateTo({
        url: '/pages/MyInfo/focus/focus?totalPages='+this.data.followtotalPages
      })
    },
    tofans:function(){
      var that = this;
      wx.navigateTo({
        url: '/pages/MyInfo/myfans/myfans?totalPages='+this.data.fanstotalPages
      })
    },
    getUserInfo: function(){
      var that = this;
      wx.request({
        url: "http://120.78.165.40:9090/user/getUserInfo",
        data:{
          userId: userId
        },
        header: {
            "content-type": "application/x-www-form-urlencoded",
            "userId": userId,
            "userToken": userToken
          },
          method: "GET",
          success: function(res){
            that.setData({
            name: res.data.data.nickName,
            brief: res.data.data.signature,
            release: res.data.data.publishedNum,
            follow: res.data.data.followNum,
            fans: res.data.data.fansNum,
            userhead: res.data.data.avatarUrl,
            level: res.data.data.level,
            experience: res.data.data.experience
            });
          },
      });
    }
})
