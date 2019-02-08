var userToken;
var userId;
var topicId;
Page({
	data:{
		MyReleaseLists:[]
	},
	onLoad:function(options){
		userId = getApp().globalData.userId;
		userToken = getApp().globalData.userToken;
		this.getData()
	},
	getData:function(){
    var that = this;
    console.log(userId)
		wx.request({
			url: "http://120.78.165.40:9090/mix/getPublishList",
			data:{
				userId: userId
			},
			header: {
		    	"content-type": "application/x-www-form-urlencoded",
		    	"userId": userId,
		    	"userToken": userToken
		    },
		    method: "GET",
		    success: function(res){
		    	console.log(res)
		    	that.setData({
		    		MyReleaseLists: res.data.data,
		    	});
		    },
		});
   	},

   	// gotoTopic: function(res){
   	// 	console.log(res)
   	// 	wx.navigateTo({
   	// 		url: '/pages/common/ContentDetail/ContentDetail'
   	// 	})
   	// }
})		