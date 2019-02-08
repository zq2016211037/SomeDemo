var userId,userToken,otherId;
Page({
	data:{
		name:'',
		signature:'',
		grade:'',
		major:'',
		birthday:'',
		mail:'',
		headsrc:''
	},
	onLoad:function(options){
		userId = getApp().globalData.userId;
		userToken = getApp().globalData.userToken;
		otherId = options.otherId;
		var that = this;
		wx.request({
			url: "http://120.78.165.40:9090/user/getDetailUserInfo",
			header: {
		    	"content-type": "application/x-www-form-urlencoded",
		    	"userId": userId,
		    	"userToken": userToken
		    },
		    method: "GET",
		    data:{
		    	userId:otherId
		    },
		    success: function(res){
          		console.log(res)
          		console.log(typeof(res.data.data.birthday))
          		console.log(res.data.data.birthday)
		    	that.setData({
		    		name: res.data.data.nickName,
		    		signature: res.data.data.signature,
		    		grade: res.data.data.grade,
		    		major: res.data.data.majorName,
		    		mail: res.data.data.mail,
		    		birthday: res.data.data.birthday,
		    		headsrc: res.data.data.avatarUrl
		    	});
		    	if(that.data.birthday == null){
		    		that.setData({
		    			birthday:''
		    		})
		    	};
		    	if(that.data.mail == null){
		    		that.setData({
		    			mail:''
		    		})
		    	}
		    }
		});		
	},
	headdetail: function(){
		var that = this;
		wx.previewImage({
			urls: [that.data.headsrc]

		})
	}
	
})		