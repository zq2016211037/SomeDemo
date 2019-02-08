// pages/hotSearch/hotSearch.js
var userToken = '';
var userId = '';
Page({
  data: {
    navBarShow: false,
    newsChosed: null,
    searchChosed: "chose",
    hotSearchData: [],
    newsData: [],
    linelchosed: "line_chosed",
    linerchosed: "",
    sign:false,
    urlurl:'',
    iconsrc:''
  },
  showSearch: function () {
    this.setData({
      navBarShow: false,
      newsChosed: null,
      searchChosed: "chose",
      linelchosed: "line_chosed",
      linerchosed: ""
    })
  },
  showNews: function () {
    this.setData({
      navBarShow: true,
      newsChosed: "chose",
      searchChosed: null,
      linelchosed: "",
      linerchosed: "line_chosed"
    })
  },
  onLoad: function () {
    userId = getApp().globalData.userId;
    userToken = getApp().globalData.userToken;
    var that = this;
    wx.request({
      url: "http://120.78.165.40:9090/mix/getTopSearch",
      data:{
        userId: userId
      },
      header: {
          "content-type": "application/x-www-form-urlencoded",
          "userId": userId,
          "userToken": userToken
        },
      method: "GET",
      success:function(res){
      console.log(res) 
        that.setData({
          hotSearchData: res.data.data
        });
        for(var i = 0; i<that.data.hotSearchData.length;i++){
          if(that.data.hotSearchData[i].sign == 2){
              that.data.hotSearchData[i].urlurl='/pages/common/loveDetail/ContentDetail?psgId='+that.data.hotSearchData[i].loveId;
              that.data.hotSearchData[i].iconsrc= '/images/HotSearch/searchBarIcon2.png'
          }else{

              that.data.hotSearchData[i].urlurl='/pages/common/ContentDetail/ContentDetail?psgId='+that.data.hotSearchData[i].topicId+'&topicType=3';
              that.data.hotSearchData[i].iconsrc= '/images/HotSearch/searchBarIcon.png'
          }
        }
        console.log(that.data.hotSearchData);
        that.setData({
          hotSearchData:that.data.hotSearchData
        })
      }
    });
    wx.request({
      url: "http://120.78.165.40:9090/topic/getNewEvent?userId=1&page=1",
      data:{
        userId: userId
      },
      header: {
          "content-type": "application/x-www-form-urlencoded",
          "userId": userId,
          "userToken": userToken
        },
      method: "GET",
      success:function(res){ 
        console.log(res); 
        that.setData({
           newsData: res.data.data
        });
      }
    });
  }
  
})