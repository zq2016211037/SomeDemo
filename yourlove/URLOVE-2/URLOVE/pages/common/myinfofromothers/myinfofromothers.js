var userId,userToken;
var othersId;
Page({
	data:{
		userhead: "",
		username: "",
		userlevel: "Lv9",
		usersignature: "",
		releasenum: "",
		focusnum: "",
		fansnum: "",
		otherUrl:"",
	    code:false,
	    publishList:[],
	    loveList:[],
	    topicType:'',
	    focustext:'关注'
	},
	onLoad:function(options){
		var arrLists = [];
		userToken = getApp().globalData.userToken;
    	userId = getApp().globalData.userId;
		othersId = options.topicuserId;
		this.setData({
			otherUrl:'/pages/common/moreinfo/moreinfo?otherId='+othersId
		})
		this.getOthersInfo();
		this.getPublishData();
	},
	getOthersInfo: function(){
		var that = this;
	    wx.request({
	      url: 'https://api.lengren.com.cn/user/getUserInfo',
	      header: {
	        "Content-Type": "applciation/json",
	        "userToken": userToken,
	        "userId": userId
	      },
	      method: "GET",
	      data: {
	        userId: othersId,
	      },
	      success: function (res) {
	        console.log(res);
	        that.setData({
	        	userhead:res.data.data.avatarUrl,
	        	username:res.data.data.nickName,
	        	usersignature:res.data.data.signature,
	        	releasenum:res.data.data.publishedNum,
	        	focusnum:res.data.data.followNum,
	        	fansnum:res.data.data.fansNum
	        })
	      }

	    })
	},
    hasfollow: function () {
      var that = this;
      wx.request({
        url: 'https://api.lengren.com.cn/follow/hasFollow',
        method: "GET",
        data: {
          otherUserId: othersId,
          myUserId: userId
        },
        header: {
          "content-type": "application/x-www-form-urlencoded",
          'userId': userId,
          'userToken': userToken
        },
        success: function (res) {
          console.log(res);
          if(res.data.code == 102){
            that.setData({
              code:true
            })
          }else{
            that.setData({
              code:false
            })
          }
        },
        fail: function (err) { },//请求失败
        complete: function () { }//请求完成后执行的函数
      })
    },
    follow:function() {
      var that = this;
      that.hasfollow();
      var requestUrl;
      var focustextvalue;
      if(that.data.code){
        requestUrl = 'https://api.lengren.com.cn/follow/deleteFollow';
        focustextvalue = '关注✔'
      }else{
        requestUrl = 'https://api.lengren.com.cn/follow/addFollow';
        focustextvalue = '关注'
      }
      wx.request({
        url: requestUrl,
        method: "POST",
        data: {
          otherUserId: othersId,
          myUserId: userId
        },
        header: {
          "content-type": "application/x-www-form-urlencoded",
          'userId': userId,
          'userToken': userToken
        },
        success: function (res) {
          console.log(res);
          that.setData({
            focustext:focustextvalue
          })
        },
        fail: function (err) { },//请求失败
        complete: function () { }//请求完成后执行的函数
      })
    },
	// getLoveListData:function(){
	// 	//表白
	//     var that = this;
	//     wx.request({
	//       url: 'http://120.78.165.40:9090/love/getLoveList',
	//       data:{
	//         userId:othersId,
	//         page:'1'
	//       },
	//       header: {
	//         "content-type": "applciation/json",
	//         'userId': userId,
	//         'userToken': userToken
	//       },
	//       method: "GET",
	//       success: function (res) {
	//       	console.log(res);
	//         if(res.data.data == null ){
	//           that.setData({
	//             loveList: [],
	//           });
	//         }else{
	//           that.setData({
	//             loveList: res.data.data.loveList,
	//           });
	//         }
	//         for (var i = 0; i < res.data.data.loveList.length;i++){
	//           // var imgLoveLenValue;
	//           if(res.data.data.loveList[i].img == null){
	//             // imgLoveLenValue = 0;
	//             that.data.loveList[i].imgLoveLen = 0;
	//           }else{
	//             // imgLoveLenValue = res.data.data.loveList[i].img.length
	//             that.data.loveList[i].imgLoveLen = res.data.data.loveList[i].img.length;
	//           }
	//           that.setData({
	//             imgLoveLen :imgLoveLenValue
	//           })
	//         }

	//         // that.setData({
	//         //   userId:userId,
	//         //   userToken:userToken
	//         // })
	//       },
	//       fail: function (err) { },//请求失败
	//       complete: function () { }//请求完成后执行的函数
	//     })
	// },
	getPublishData:function(){
		  var that = this;
	    wx.request({
	      url:"https://api.lengren.com.cn/mix/getPublishList",
	      data: {
	        userId: othersId,
	        // page: 1,
	        // topicType:topicType
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
	          publishList: res.data.data,
	          userId:userId,
	          userToken:userToken,
	          // topicType:topicType,
	        })
	        // for (var i = 0; i < res.data.data.length; i++) {
	        //  if(res.data.data[i].img == null ){
	        //    that.data.publishList[i].imgLen = 0;
	        //   }else{
	        //    that.data.publishList[i].imgLen = 1;
	        //   }        

	        // }
	        // console.log(that.data.publishList);
	      },

	      fail: function (err) {},//请求失败
	      complete: function () { }//请求完成后执行的函数
	    })
	}
})		