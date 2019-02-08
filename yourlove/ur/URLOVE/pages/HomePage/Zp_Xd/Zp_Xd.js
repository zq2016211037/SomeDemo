var userId,userToken;
Page({
  data: {
    currentTab: 0,
    isShow: true,
    feelingDataList:[],
    recruitmentDataList:[],
    navshow: false,
    topicId:'',
    lovechosed: "chosed",
    topicchosed: "",
    linelchosed: "line_chosed",
    linerchosed: ""
  },
  feeling:function(){
    this.setData({
      navshow: false,
      lovechosed: "chosed",
      topicchosed: "",
      linelchosed: "line_chosed",
      linerchosed: ""
    });
    this.getFeelingData();
  },

  recruitment:function(){
    this.setData({
      navshow: true,
      lovechosed: "",
      topicchosed: "chosed",
      linelchosed: "",
      linerchosed: "line_chosed"
    });
    this.getRecruitmentData();
  },
  onLoad:function(e){
    userToken = getApp().globalData.userToken;
    userId = getApp().globalData.userId;
    this.getFeelingData();
  },
  getFeelingData:function(e){
    var that = this;
    wx.request({
      method:'GET',
      url:'http://120.78.165.40:9090/topic/getHomeTopicByTopic',
      data:{
        topicType: 2,
        userId: userId,
        page: 1
      },
      header: {
        "content-type": "application/x-www-form-urlencoded",
        'userId': userId,
        'userToken': userToken
      },
      success:function(res){
        that.setData({
          feelingDataList:res.data.data,
          topicType:2
        })
        console.log(res);
      }
    })
  },
  getRecruitmentData: function (e) {
    var that = this;
    wx.request({
      method: 'GET',
      url: 'http://120.78.165.40:9090/topic/getHomeTopicByTopic',
      data:{
        topicType:4,
        userId:userId,
        page:1
      },
      header: {
        "content-type": "application/x-www-form-urlencoded",
        'userId': userId,
        'userToken':userToken
      },
      success: function (res) {
        that.setData({
          recruitmentDataList: res.data.data,
          topicType:4
        })
      }
    })
  },
  switch: function (e) {
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      var showMode = e.target.dataset.current == 0;
      this.setData({
        currentTab: e.target.dataset.current,
        isShow: showMode
      })
    }
  },
})