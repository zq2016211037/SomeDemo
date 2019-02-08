var userId,userToken;
Page({
  data: {
    navshow: false,
    lovechosed: "chosed",
    topicchosed: "",
    linelchosed: "line_chosed",
    linerchosed: "",
    helpList:[],
    tradeList:[],
  },
  onLoad:function(){
    userToken = getApp().globalData.userToken;
    userId = getApp().globalData.userId;
    this.getHelpData();
  },
  help:function(){
    this.setData({
      navshow: false,
      lovechosed: "chosed",
      topicchosed: "",
      linelchosed: "line_chosed",
      linerchosed: ""
    });
    this.getHelpData();
  },

  trade:function(){
    this.setData({
      navshow: true,
      lovechosed: "",
      topicchosed: "chosed",
      linelchosed: "",
      linerchosed: "line_chosed"
    });
    this.getTradeData();
  },
  getHelpData:function(){
    var that = this;
    wx.request({
      url: 'https://api.lengren.com.cn/topic/getHomeTopicByTopic',
      data: {
        userId:userId,
        topicType:1,
        page:1
      },
      header: {
        "content-type": "application/x-www-form-urlencoded",
        'userId': userId,
        'userToken': userToken
      },
      method: 'GET',
      success: function(res) {
        that.setData({
          helpList:res.data.data,
          topicType:1
        })
        console.log(res);
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  getTradeData: function() {
      var that = this;
      wx.request({
        url: 'https://api.lengren.com.cn/topic/getHomeTopicByTopic',
        data: {
          userId: userId,
          topicType: 5,
          page: 1
        },
        header: {
          "content-type": "application/x-www-form-urlencoded",
          'userId': userId,
          'userToken': userToken
        },
        method: 'GET',
        success: function (res) {
          that.setData({
            tradeList:res.data.data,
            topicType:5
          })
          console.log(res);
         },
        fail: function (res) { },
        complete: function (res) { },
      })
  }
})