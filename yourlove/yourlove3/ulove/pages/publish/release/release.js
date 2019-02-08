var title = '';
var content = '';
var filenameall = '';
var ifSave = 0, ifAnonymity = 0;
var tempFilePaths = [];
var userToken = '';
var userId = '';
Page({
	data:{
		photosrc:[],
		hide: ''
	},
	onLoad: function(){
		userId = getApp().globalData.userId;
		userToken = getApp().globalData.userToken;
	},
	chooseImageUpload: function() {
    	var that = this;
    	var token = '';
    	var filena = '';
       var filename = [];
    	var d = new Date();
    	var year, month, day, hour, minute, second, ms;
    	year = d.getFullYear();
		month = d.getMonth() + 1;
		day = d.getDate();
		hour = d.getHours();
		minute = d.getMinutes();
		second = d.getSeconds();
		ms = d.getMilliseconds();
		filena = Date.UTC(year,month,day,hour,minute,second,ms);
		wx.request({
					url: "http://120.78.165.40:9090/upload/getUploadToken",
					data:{
						type: 2
					},
					header: {
				    	"content-type": "application/x-www-form-urlencoded",
				    	"userId": userId,
				    	"userToken": userToken
				    },
				    method: "GET",
				    success: function(res){
				    	token = res.data.data
				    },
				});
	    wx.chooseImage({
	    	count: 9, 
  			sizeType: ['original','compressed'],
  			sourceType: ['album', 'camera'],
  			success: function (res) {
    			tempFilePaths = tempFilePaths.concat(res.tempFilePaths);
    			if(tempFilePaths.length==9){
    				that.setData({
    					hide: "hide"
    				})
    			};
    			that.setData({
    				photosrc: tempFilePaths
    			});
    			for(var index in tempFilePaths){
    				filename[index] = filena++;
    				filenameall = filenameall + filename[index] + '-';
    			};
    			filenameall = filenameall.slice(0, filenameall.length-1);
    			for(var index in tempFilePaths){
    				wx.uploadFile({
    				url: 'https://upload-z2.qiniup.com',
    				name: 'file',
    				filePath: tempFilePaths[index],
    				save_key: false,
    				header:{
    					"content-type": "multipart/form-data",
    				},
    				formData:{
    					token: token,
    					key: String(filename[index])
    				},   			
    				success: function(res){
    					
    				}
    			})
    			}
  			}
		})	
    },
	gettitle: function(e){
		title = e.detail.value;
	},
	getcontent: function(e){
		content = e.detail.value;
	},
	ifnm: function(e){
		ifSave =  Number(e.detail.value);
		console.log(ifSave);
	},
	ifbl: function(e){
		ifAnonymity = Number(e.detail.value);
	},
	releaseLove: function(){
		var that = this;
		console.log(filenameall)
		wx.request({
			url: "http://120.78.165.40:9090/love/publicLove",
			data:{
				userId: userId,
				title: title,
				content: content,
				isSave: ifSave,
				isAnonymity: ifAnonymity,
				imgs: filenameall
			},
			header: {
		    	"content-type": "application/x-www-form-urlencoded",
		    	"userId": userId,
		    	"userToken": userToken
		    },
		    method: "POST",
		    success: function(res){
		    	wx.navigateBack()
		    },
		});
	},
})		