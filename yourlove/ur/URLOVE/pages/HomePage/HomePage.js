var userId,userToken,socketObj;
var socketMsgQueue = [];
var socketOpen = false;
var stompClient = null;
function sendSocketMessage(msg) {
  if (socketOpen) {
    wx.sendSocketMessage({
      data: msg,
    })
  } else {
    socketMsgQueue.push(msg)
  }
}
var ws = {
  send: sendSocketMessage,
  onmessage: null,
  onopen: null
}
Page({
  data: {
    bannerList:[],
  },
  changeback1: function () {
    this.setData({
      bg1: "bg",
      bg2: "",
      bg3: ""
    });
    if (!this.pageLoading) {
      this.pageLoading = !0;
      wx.navigateTo({
        url: '/pages/HomePage/urlove/urlove'
      })
    }
  },
  changeback2: function () {
    this.setData({
      bg1: "",
      bg2: "bg",
      bg3: ""
    });
    if (!this.pageLoading) {
      this.pageLoading = !0;
      wx.navigateTo({
        url: '/pages/HomePage/Zp_Xd/Zp_Xd'
      })
    }
  },
  changeback3: function () {
    this.setData({
      bg1: "",
      bg2: "",
      bg3: "bg"
    });
    if (!this.pageLoading) {
      this.pageLoading = !0;
      wx.navigateTo({
        url: '/pages/HomePage/help_trade/help_trade'
      })
    }
  },
  onShow: function () {
    var bgco = wx.getStorageSync('')
    this.setData({
      bg3: '',
      bg2: '',
      bg1: ''
    })
    this.pageLoading = !1;
  },
   onLoad: function (options) {
     userToken = wx.getStorageSync('olduserToken');
    getApp().globalData.userToken = userToken;
    console.log(userToken);
    console.log(getApp().globalData.userToken);
    userId = wx.getStorageSync('olduserId');
    getApp().globalData.userId= userId;
     console.log(getApp().globalData.userId);
     var ws = {
       send: sendSocketMessage,
       onmessage: null,
       onopen: null
     }
     wx.connectSocket({
       url: 'wss://120.78.165.40/chat',
       header: {
       }
     })
     wx.onSocketOpen(function (res) {
       socketOpen = true;
       console.log("链接打开");
       ws.onopen && ws.onopen()
     })
     wx.onSocketMessage(function (res) {
       ws.onmessage(res) && ws.onmessage
     })
     var Stomp = require('../../utils/stomp.js').Stomp;
     Stomp.setInterval = function () { }
     Stomp.clearInterval = function () { }
     stompClient = Stomp.over(ws);
     var headers = { ack: 'client', 'selector': "location = 'Europe'" };
     stompClient.connect({ "userId": userId }, function (sessionId) {
     getApp().globalData.socketObj = stompClient;
     })
  },
  onReady:function(){
    this.getBannerData();
  },
  getBannerData: function () {
    var that = this;
    wx.request({
      url:'http://120.78.165.40:9090/banner/getBannerList',
      data:{
        type:'1'
      },
      header: {
        "content-type": "applciation/json",
        'userId': userId,
        'userToken': userToken
      },
      method: "GET",
      success: function (res) {
        that.setData({
          bannerList: res.data.data.bannerList
        })
      },
      fail: function (err) { },//请求失败
      complete: function () { }//请求完成后执行的函数
    })
  },
  // 是否点击过banner图
  hasTouchBanner:function(){
    wx.request({
      url: 'http://120.78.165.40:9090/banner/addTouchBannerInfo',
      data: {
        userId:userId,
        bannerId:1
      },
      header: {
        "content-type": "application/json",
        'userId': userId,
        'userToken':userToken
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        console.log(res);
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  // banner图点击事件
  touchBanner:function(){
    wx.request({
      url: 'http://120.78.165.40:9090/banner/addTouchBannerInfo',
      data: {
        userId:userId,
        bannerId:1
      },
      header: {
        "content-type": "application/x-www-form-urlencoded",
        'userId': userId,
        'userToken': userToken
      },
      method: 'POST',
      success: function(res) {
        console.log(res);
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  }
})		