var userId,userToken;
Page({
	data:{
    userId:'',
    userToken:'',
    psgId:'',
    topicType:'',
    contentDetails:{},
		Pnum1:false,
		Pnum2:false,
		Pnum9:false,
		flag:1,	
		userInfo:null,
		bbid:0,
		ctalist:[{
				headImg: "/images/HotSearch/head.png",
				userName: "wzs",
				time: "3小时前",
				contents: "自己~家的同学们要注意安全照顾好自己~家的同学们要注意安全照顾好自己~家的同学们要注意安全照顾好自己~家的同学们要注意安全照顾好自己己~",
				applaudNum: 128,
				commentNum: 4,
				imgSrc: "/images/HotSearch/head.png",
		},
		{
				headImg: "/images/HotSearch/head.png",
				userName: "wzs",
				time: "3小时前",
				contents: "家的同学们要注意安全照家的同学们要注意安全照顾好自己~家的同学们要注意安全照顾好自己~家的同学们要注意安全照顾好自己~家的同学们要注意安全照顾好自己~家的同学们要注意安全照顾好自己~家的同学们要注意安全照顾好自己~家的同学们要注意安全照顾好自己~家的同学们要注意安全照顾好自己~家的同学们要注意安全照顾好自己~家的同学们要注意安全照顾好自己~家的同学们要注意安全照顾好自己~家的同学们要注意安全照顾好自己~家的同学们要注意安全照顾好自己~",
				applaudNum: 128,
				commentNum: 4,
				imgSrc: "/images/HotSearch/head.png",
		},
		{
				headImg: "/images/HotSearch/head.png",
				userName: "wzs",
				time: "3小时前",
				contents: "家的同学们要注意安全照家的同学们要注意安全照顾好自己~家的同学们要注意安全照顾好自己~家的同学们要注意安全照顾好自己~家的同学们要注意安全照顾好自己~家的同学们要注意安全照顾好自己~家的同学们要注意安全照顾好自己~家的同学们要注意安全照顾好自己~家的同学们要注意安全照顾好自己~家的同学们要注意安全照顾好自己~家的同学们要注意安全照顾好自己~家的同学们要注意安全照顾好自己~家的同学们要注意安全照顾好自己~家的同学们要注意安全照顾好自己~",
				applaudNum: 128,
				commentNum: 4,
				imgSrc: "/images/HotSearch/head.png",
		}],
		flag:1,
		content:{
				headImg: "../../image/head1.png",
				userName: "32111",
				time: "3小时前",
				contents: "照顾好自己~",
				applaudNum: 128,
				commentNum: 4,
				imgSrc: "../../image/head1.png",
    			isReview:false,
    			support:[], 
		},
		bbqdin:null,
	},
	onLoad:function(options){
    userToken = getApp().globalData.userToken;
    userId = getApp().globalData.userId;
    var psgIdValue = options.psgId;
    var topicTypeValue = options.topicType;
    console.log(options);
    this.setData({
      psgId: psgIdValue,
      topicType: topicTypeValue
    })
    if(this.data.topicType == '1'){
      console.log('jaoyi');
      this.setTradeDetailsData();
    }
    if(this.data.topicType == '5'){
      this.setHelpDetailsData();
      console.log('help');
    }
    // 心得
    if (this.data.topicType == '2') {
      this.setFeelDetailsData();
      console.log('xinde');
    }
    // 招聘
    if (this.data.topicType == '4') {
      this.setRecruitDetailsData();
      console.log('zhaopin');
    }
    //话题
    if(this.data.topicType == '3'){
      this.setTopicDetailsData();
      console.log('topicType');
    }
	},
  //获取交易详情信息
  setTradeDetailsData: function () {
    var that = this;
    wx.request({
      url: 'http://120.78.165.40:9090/topic/getTopicDetails',
      method: 'GET',
      data: {
        userId: userId,
        topicId: that.data.psgId
      },
      header: {
        "content-type": "application/x-www-form-urlencoded",
        'userId': userId,
        'userToken': userToken
      },
      success: function (res) {
        console.log(res);
        console.log(res.data.data);
        that.setData({
          contentDetails: res.data.data,
        })
        if (res.data.data.img == null) {
          that.setData({
            imgLen: 0
          })
        } else {
          that.setData({
            imgLen: res.data.data.img.length
          })
        }
        if (that.data.imgLen== 1) {
          that.setData({
            Pnum1: true
          })
        } else if (that.data.imgLen % 3 == 0) {
          that.setData({
            Pnum3: true
          })
        } else if (that.data.imgLen % 2 == 0) {
          that.setData({
            Pnum2: true
          })
        }
      },
      error: function () {

      }
    })
  },
  //获取帮忙详情信息
  setHelpDetailsData: function () {
    var that = this;
    wx.request({
      url: 'http://120.78.165.40:9090/topic/getTopicDetails',
      method: 'GET',
      data: {
        userId: userId,
        topicId: that.data.psgId
      },
      header: {
        "content-type": "application/x-www-form-urlencoded",
        'userId': userId,
        'userToken': userToken
      },
      success: function (res) {
        that.setData({
          contentDetails: res.data.data,
        })
        if ( res.data.data.img == null){
          that.setData({
            imgLen: 0
          })
        }else{
          that.setData({
            imgLen: res.data.data.img.length
          })
        }
        
        console.log(that.data.contentDetails);
        if (that.data.imgLen == 1) {
          that.setData({
            Pnum1: true
          })
        } else if (that.data.imgLen % 3 == 0) {
          that.setData({
            Pnum3: true
          })
        } else if (that.data.imgLen% 2 == 0) {
          that.setData({
            Pnum2: true
          })
        }
      },
      error: function () {

      }
    })
  },

  //招聘详情信息
  setRecruitDetailsData: function () {
    var that = this;
    wx.request({
      url: 'http://120.78.165.40:9090/topic/getTopicDetails',
      method: 'GET',
      data: {
        userId: userId,
        topicId: that.data.psgId
      },
      header: {
        "content-type": "application/x-www-form-urlencoded",
        'userId': userId,
        'userToken': userToken
      },
      success: function (res) {
        console.log(res);
        console.log(res.data.data);
        that.setData({
          contentDetails: res.data.data,
        })
        if (res.data.data.img == null) {
          that.setData({
            imgLen: 0
          })
        } else {
          that.setData({
            imgLen: res.data.data.img.length
          })
        }
        if (that.data.imgLen == 1) {
          that.setData({
            Pnum1: true
          })
        } else if (that.data.imgLen % 3 == 0) {
          that.setData({
            Pnum3: true
          })
        } else if (that.data.imgLen % 2 == 0) {
          that.setData({
            Pnum2: true
          })
        }
      },
      error: function () {

      }
    })
  },

  //心得详情
  setFeelDetailsData: function () {
    var that = this;
    wx.request({
      url: 'http://120.78.165.40:9090/topic/getTopicDetails',
      method: 'GET',
      data: {
        userId: userId,
        topicId: that.data.psgId
      },
      header: {
        "content-type": "application/x-www-form-urlencoded",
        'userId': userId,
        'userToken': userToken
      },
      success: function (res) {
        console.log(res);
        console.log(res.data.data);
        that.setData({
          contentDetails: res.data.data,
        })
        if (res.data.data.img == null) {
          that.setData({
            imgLen: 0
          })
        } else {
          that.setData({
            imgLen: res.data.data.img.length
          })
        }

        console.log(that.data.contentDetails);
        if (that.data.imgLen == 1) {
          that.setData({
            Pnum1: true
          })
        } else if (that.data.imgLen % 3 == 0) {
          that.setData({
            Pnum3: true
          })
        } else if (that.data.imgLen % 2 == 0) {
          that.setData({
            Pnum2: true
          })
        }
      },
      error: function () {

      }
    })
  },

  //话题详情
  setTopicDetailsData: function () {
    var that = this;
    wx.request({
      url: 'http://120.78.165.40:9090/topic/getTopicDetails',
      method: 'GET',
      data: {
        userId: userId,
        topicId: that.data.psgId
      },
      header: {
        "content-type": "application/x-www-form-urlencoded",
        'userId': userId,
        'userToken': userToken
      },
      success: function (res) {
        console.log(res);
        console.log(res.data.data);
        that.setData({
          contentDetails: res.data.data,
        })
        if (res.data.data.img == null) {
          that.setData({
            imgLen: 0
          })
        } else {
          that.setData({
            imgLen: res.data.data.img.length
          })
        }

        console.log(that.data.contentDetails);
        if (that.data.imgLen == 1) {
          that.setData({
            Pnum1: true
          })
        } else if (that.data.imgLen % 3 == 0) {
          that.setData({
            Pnum3: true
          })
        } else if (that.data.imgLen % 2 == 0) {
          that.setData({
            Pnum2: true
          })
        }
      },
      error: function () {

      }
    })
  },
	gourl:function(){
		wx.navigateTo({
			url:"/pages/myinfofromothers/myinfofromothers"
		})
	}
})	