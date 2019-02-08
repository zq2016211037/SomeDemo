var userId,userToken;
Page({
	data:{
    loveContentDetails:{},
    imgLen:'',
    index:'',
    userId:'',
    userToken:'',
    psgId:'',     //文章id
    showBig:'',
    touchImg:false,
    Pnum1: false,
    Pnum2: false,
    Pnum9: false,
	},
	onLoad:function(options){
     userToken= getApp().globalData.userToken;
     userId = getApp().globalData.userId;

    var psgIdValue = options.psgId;
    console.log(options);
    this.setData({
     psgId: psgIdValue
    })
   this.setLoveDetailsData();
	},
  
  //表白详情
  setLoveDetailsData:function(){
    var that = this;
    wx.request({
      url: 'http://120.78.165.40:9090/love/getDetailLove',
      method:'GET',
      data:{
        userId :userId,
        loveId:that.data.psgId
      },
      header: {
        "content-type": "application/x-www-form-urlencoded",
        'userId': userId,
        'userToken': userToken
      },
      success:function(res){
        console.log(res);
        console.log(res.data.data);
        that.setData({
          loveContentDetails: res.data.data,
          loveId: that.data.psgId
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
      error:function(){

      }
    })
  },
  
  showDetail:function(event){
    var i = event.currentTarget.dataset.index+1;
    this.setData({
      showBig: this.data.loveContentDetails.img[i],
      touchImg:!(this.data.touchImg)
    })
  },
	gourl:function(){
		wx.navigateTo({
			url:"/pages/myinfofromothers/myinfofromothers"
		})
	}
})	