var userId,userToken;
Page({
	data:{
    bannerList:[],
    loveList:[],
    topicList:[],
    navShow:true,
    lovechosed: "chosed",
    topicchosed: "",
    linelchosed: "line_chosed",
    linerchosed: "",
    imgLoveLen:'',
    imgTopicLen:'',
    index:'',  
	},
  showlove: function () {
    this.setData({
      navshow: false,
      lovechosed: "chosed",
      topicchosed: "",
      linelchosed: "line_chosed",
      linerchosed: ""
    });
    this.getLoveData();
  },
  weektopic: function () {
    this.setData({
      navshow: true,
      lovechosed: "",
      topicchosed: "chosed",
      linelchosed: "",
      linerchosed: "line_chosed",
    });
    this.getTopicList();
  },
	onLoad:function(options){
    userToken = getApp().globalData.userToken;
    userId = getApp().globalData.userId;
		this.getBannerData();
    this.getLoveData();
    console.log(options);
	},
  getBannerData: function () {
    var that = this;
    wx.request({
      url: 'http://120.78.165.40:9090/banner/getBannerList',
      data: {
        type: '2'
      },
      header: {
        "content-type": "applciation/json",
        'userId': userId,
        'userToken': userToken
      },
      method: "GET",
      success: function (res) {
        console.log(res);
        that.setData({
          bannerList: res.data.data.bannerList
        })
      },
      fail: function (err) { },//请求失败
      complete: function () { }//请求完成后执行的函数
    })
  },
  // 表白
  getLoveData:function(event){
    var that = this;
    wx.request({
      url: 'http://120.78.165.40:9090/love/getLoveList',
      data:{
        userId:userId,
        page:'1'
      },
      header: {
        "content-type": "applciation/json",
        'userId': userId,
        'userToken': userToken
      },
      method: "GET",
      success: function (res) {
        if(res.data.data == null ){
          that.setData({
            loveList: [],
          });
        }else{
          that.setData({
            loveList: res.data.data.loveList,
          });
        }
        console.log(res);
        for (var i = 0; i < res.data.data.loveList.length;i++){
          var imgLoveLenValue;
          if(res.data.data.loveList[i].img == null){
            imgLoveLenValue = 0;
          }else{
            imgLoveLenValue = res.data.data.loveList[i].img.length
          }
          that.setData({
            imgLoveLen :imgLoveLenValue
          })
        }

        that.setData({
          userId:userId,
          userToken:userToken
        })
      },
      fail: function (err) { },//请求失败
      complete: function () { }//请求完成后执行的函数
    })
  },
  // 话题
  getTopicList:function(){
    var that = this;
    wx.request({
      url:'http://120.78.165.40:9090/topic/getHomeTopicByTopic',
      data: {
        userId: userId,
        page: 1,
        topicType:3
      },
      header: {
        "content-type": "applciation/json",
        'userId': userId,
        'userToken': userToken
      },
      method: "GET",
      success: function (res) {
        that.setData({
          topicList: res.data.data,
          userId:userId,
          userToken:userToken,
          topicType:3,
        })
        console.log(res);
        for (var i = 0; i < res.data.data.length; i++) {
          var imgTopicLenValue;
          if(res.data.data[i].img == null ){
            imgTopicLenValue = 0
          }else{
            imgTopicLenValue = 1;
          }        
          that.setData({
            imgTopicLen: imgTopicLenValue
          })
        }
      },
      fail: function (err) {},//请求失败
      complete: function () { }//请求完成后执行的函数
    })
  }
})		