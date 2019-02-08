// pages/hotSearch/hotSearch.js
Page({
  data: {
    navBarShow: false,
    newsChosed: null,
    searchChosed: "chose",
    hotSearchData: null,
    newsData: null,
    linelchosed: "line_chosed",
    linerchosed: ""
  },
  onLoad: function () {
    var that = this;
    wx.request({
      url: "http://rapapi.org/mockjsdata/35273/hotSearch",
      method: "post",
      header: {
        'content-type': 'application/json'
      },
      success: function (result) {
        that.setData({
          hotSearchData: result.data.searchBarData
        })
      }
    });
    wx.request({
      url: "http://rapapi.org/mockjsdata/35273/news",
      method: "post",
      header: {
        'content-type': "application/json"
      },
      success: function (result) {
        that.setData({
          newsData: result.data.searchBarData
        })
      }
    })
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
  }
})