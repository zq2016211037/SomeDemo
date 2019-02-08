//app.js
App({
  onLaunch:function(){
    wx.login({
      success: function (res) {
        wx.setStorage({
          key: 'code',
          data: res.code,
        })
      }
    }) 
  },
  globalData:{
    userId:0,
    userToken:null  
  }
})