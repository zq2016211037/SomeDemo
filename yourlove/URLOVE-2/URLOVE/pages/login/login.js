var code;
var app = getApp();
Page({
  data: {
    helpShow:false,
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    showForm:false,
    userInfo:{},
    stuNum:"",
    stuPass:"",
    code:""
  },
  noShow:function(){
    this.setData({
      helpShow:false
    })
  },
  helpShow:function(){
    this.setData({
      helpShow:true
    })
  },
  enter:function(){
    var _this = this;
    console.log(code);
  wx.request({
    url:'https://api.lengren.com.cn/login/userLogin',
      method:'POST',
      data:{
        stuNum: _this.data.stuNum,
        stuPass: _this.data.stuPass,
        nickName: _this.data.userInfo.nickName,
        avatarUrl: _this.data.userInfo.avatarUrl,
        code:code
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success:function(res){
       if(res.data.code==1){
         app.globalData.userId =  res.data.data.userId;
         app.globalData.userToken = res.data.data.userToken;
         wx.setStorage({
           key: 'olduserToken',
           data: res.data.data.userToken
         })
         wx.setStorage({
           key: 'olduserId',
           data: res.data.data.userId,
         })
         console.log(res.data.data.userToken);
         wx.navigateTo({
           url: '/pages/HomePage/HomePage',
         })
       }else{
         wx.showToast({
           title: '账号密码错误',
           icon:"none",
           duration:2000
         })
       }
      }
    })
  },
  onLoad:function(){
    var that = this;
    wx.login({
      success: function (res) {
        code = res.code;
        console.log(res.code);
        console.log(code);
      }
    })
    var that = this;
    wx.getStorage({
      key: 'olduserToken',
      success: function (res) {
        if (res.data) {
          wx.redirectTo({
            url: '/pages/HomePage/HomePage',
          })
        }
      },
    })
  },
  bindGetUserInfo:function(e){
    if(e.detail.userInfo){
      this.setData({
        'userInfo':e.detail.userInfo
      })
      wx.showToast({
        title:"成功",
        icon:"success",
        duration:2000
      })
      this.setData({
        'showForm':true
      })
    }
  },
  getNum:function(e){
    this.setData({
      'stuNum':e.detail.value
    })
  },
  getPass:function(e){
    this.setData({
      'stuPass':e.detail.value
    })
  }
})