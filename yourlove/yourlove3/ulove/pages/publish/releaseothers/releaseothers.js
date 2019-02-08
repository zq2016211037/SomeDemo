var title = '';
var content = '';
var filenameall = '';
var ifSave = 0, ifAnonymity = 0;
var tempFilePaths = [];
var userToken = '';
var userId = '';
//新添加
var statusId = '';
var status;
Page({
	data:{
		photosrc:[],
		hide: ''
	},
	onLoad: function(options){
		userId = getApp().globalData.userId;
		userToken = getApp().globalData.userToken;
		this.setData({
			statusId: options.statusId
		});
		if(options.statusId=='trade'){
        status = 5
	    } else if(options.statusId == 'experience'){
	        status = 2
	    }else if(options.statusId == 'topic'){
	        status = 3
	    }else if(options.statusId == 'advertise'){
	        status = 4
	    }else{
	        status = 1
	    };
	    console.log(status)
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
	releaseLove: function(){
		var that = this;
		console.log(status);
		wx.request({
			url: "http://120.78.165.40:9090/topic/addTopic",
			data:{
				userId: userId,
				title: title,
				content: content,
				imgs: filenameall,
				status: status
			},
			header: {
		    	"content-type": "application/json",
		    	"userId": userId,
		    	"userToken": userToken
		    },
		    method: "POST",
		    success: function(res){
		    	console.log(res);
		    	wx.navigateBack()
		    },
		});
	},
})		