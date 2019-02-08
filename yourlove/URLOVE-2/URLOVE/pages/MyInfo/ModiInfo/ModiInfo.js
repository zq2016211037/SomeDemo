var userToken;
var userId;
Page({
	data:{
		nickName:'',
		signature: '',
		grade: '',
		major: '',
		email: '',
		date: '',
	},
    chooseImageUpload: function() {
    	var that = this;
    	var token = '';
    	var filename;
    	var d = new Date();
    	var year = d.getFullYear();
    	var month = d.getMonth() + 1;
    	var day = d.getDate();
    	var hour = d.getHours();
    	var minute = d.getMinutes();
    	var second = d.getSeconds();
    	var ms = d.getMilliseconds();
    	var filename = String(Date.UTC(year,month,day,hour,minute,second,ms));
    	wx.request({
			url: "https://api.lengren.com.cn/upload/getUploadToken",
			data:{
				filename: filename,
				type: 1
			},
			header: {
		    	"Content-Type": "application/x-www-form-urlencoded",
		    	"userId": userId,
		    	"userToken": userToken
		    },
		    method: "GET",
		    success: function(res){
		    	token = res.data.data,
		    	console.log(res)
		    },
		});
	    wx.chooseImage({
	    	count: 1, 
  			sizeType: ['compressed'],
  			sourceType: ['album', 'camera'],
  			success: function (res) {
    			var tempFilePaths = res.tempFilePaths;
    			wx.uploadFile({
    				url: 'https://upload-z2.qiniup.com',
    				name: 'file',
    				filePath: tempFilePaths[0],
    				save_key: false,
    				header:{
    					"content-type": "multipart/form-data",
    				},
    				formData:{
    					token: token,
    					key: filename
    				},   			
    				success: function(res){
    					console.log(res);
    					console.log(filename);
    					wx.request({
    						url: "https://api.lengren.com.cn/user/setUserAvatarUrl",
    						data:{
								userId: userId,
								avatarName: filename
							},
							header: {
						    	"content-type": "application/x-www-form-urlencoded",
						    	"userId": userId,
						    	"userToken": userToken
						    },
						    method: "POST",
						    success: function(res){
						    	console.log(res)
						    }
    					})
    				}
    			})
  			}
		})	
    },
	onLoad:function(options){
		userId = getApp().globalData.userId;
		userToken = getApp().globalData.userToken;
		var that = this;
		wx.request({
			url: "https://api.lengren.com.cn/user/getDetailUserInfo",
			header: {
		    	"content-type": "application/x-www-form-urlencoded",
		    	"userId": userId,
		    	"userToken": userToken
		    },
		    method: "GET",
		    data:{
		    	userId:userId
		    },
		    success: function(res){
          console.log(res)
		    	that.setData({
		    		nickName: res.data.data.nickName,
		    		signature: res.data.data.signature,
		    		grade: res.data.data.grade,
		    		major: res.data.data.majorName,
		    		email: res.data.data.mail,
		    		date: res.data.data.birthday
		    	});
		    }
		});		
	},
	changename: function(e){
		this.setData({
			nickName: e.detail.value
		})
	},
	changesignature: function(e){
		this.setData({
			signature: e.detail.value
		})
	},
	bindDateChange: function (e) {
	    this.setData({
	        date: e.detail.value
	    });
	    console.log(e.detail.value)
	    var that = this;
		wx.request({
			url: "https://api.lengren.com.cn/user/setUserBirthday",
			method: "POST",
			data:{
		    	userId:userId,
		    	birthday: that.data.date
		    },
			header: {
		    	"content-type": "application/x-www-form-urlencoded",
		    	"userId": userId,
		    	"userToken": userToken
		    },	    
		    success: function(res){
		    }
		});	
  	},
  	changeemail: function(e){
		this.setData({
			email: e.detail.value
		});
	},
	submitname: function(options){
		var that = this;
		wx.request({
			url: "https://api.lengren.com.cn/user/setUserNickName",
			method: "POST",
			data:{
		    	userId:userId,
		    	nickName: that.data.nickName
		    },
			header: {
		    	"content-type": "application/x-www-form-urlencoded",
		    	"userId": userId,
		    	"userToken": userToken
		    },	    
		    success: function(res){
		    }
		});	
	},
	submitsignature: function(options){
		var that = this;
		wx.request({
			url: "https://api.lengren.com.cn/user/setUserSignature",
			method: "POST",
			data:{
		    	userId:userId,
		    	signature: that.data.signature
		    },
			header: {
		    	"content-type": "application/x-www-form-urlencoded",
		    	"userId": userId,
          "userToken":userToken
		    },	    
		    success: function(res){
		    }
		});	
	},
	submitemail: function(options){
		var that = this;
		wx.request({
			url: "https://api.lengren.com.cn/user/setUserMail",
			method: "POST",
			data:{
		    	userId:userId,
		    	mail: that.data.email
		    },
			header: {
		    	"content-type": "application/x-www-form-urlencoded",
		    	"userId": userId,
		    	"userToken": userToken
		    },	    
		    success: function(res){

		    }
		});	
	}
	
})		