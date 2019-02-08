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
    emoji: [
        "😀", "😃", "😄", "😁", "😆", "😅", "😂", "🤣", "☺️", "😊", "😇", "🙂", "🙃", "😉", "😌", "😍", "😘", "😗", "😙", "😚", "😋", "😜", "😝",
        "🤑", "🤗", "🤓", "😎", "🤡", "🤠", "😏", "😒", "😞", "😔", "😟", "😕", "🙁", "☹️", "😣", "😖", "😫", "😩", "😤", "😠", "😡", "😶", "😐",
        "😑", "😯", "😦", "😧", "😮", "😲", "😵", "😳", "😱", "😨", "😰", "😢", "😥", "🤤", "😭", "😓", "😪", "😴", "🙄", "🤔",
        "😬", "🤥", "🤐",
        "🤢", "🤧", "😷", "🤒", "🤕", "👻", "😈", "👿", "💩", "👏", "✌️", "🤘", "👌", , "👎", "👊", "✊", "🙏", "💪", "🌚", "🌝", "❤️", "💔", "🌹", "🌷", "🐷", "🙈", "🙉", "🙊", "🐔", "🐤"
      ],
      content: "",
      emojiShow: false,
      _num:1
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
   this.getComment();
	},
  getComment: function(){
    var that = this;
    wx.request({
      url:"http://120.78.165.40:9090/comment/getCommentByTopicId",
      method:"GET",
      data:{
        userId: userId,
        loveId: that.data.psgId,
        page: 1
      },
      header: {
          "content-type": "application/x-www-form-urlencoded",
          "userId": userId,
          "userToken": userToken
        },
        success:function(res){
          console.log(res);
          that.setData({
            commentlists: res.data.data
          });         
        }
    });
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
          loveId: that.data.psgId,
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
  choseEmoji: function (e) {
      var index = e.target.id;
      var that = this;
      that.setData({
        content: that.data.content + that.data.emoji[index]
      })
      console.log(that.data.content)
    },
    getcontentValue: function (e) {
      var that = this;
      that.setData({
        content: e.detail.value
      });
    //  console.log(that.data.content)
    },
    showEmoji: function () {
      var that = this;
      that.setData({
        emojiShow: !that.data.emojiShow
      })
      
    },

  sendComment:function(){
      var that = this;
      console.log('aaa');
      console.log("111111111"+that.data.content);
      wx.request({
        url:"http://120.78.165.40:9090/comment/addComment",
        method:"POST",
        data:{
          topicId: that.data.psgId,
          topicStatus: 1,
          content: that.data.content,
          formUId: userId,
          formUName: 'Mch',
          toUId:"",
      toUName:"",
      toContent:""
        },
        header: {
            "content-type": "application/json",
            "userId": userId,
            "userToken": userToken
          },
          success:function(res){
            console.log(res);
          }
      });
      that.getComment();
  },

  showLeavemessege: function(e){
    var that = this;
    that.setData({
      _num: 0
    })
  },
  hideLeavemessege: function(e){
    var that = this;
    if(e.target.id != 'lm' && e.target.id != 'input'){
      that.setData({
        _num: 1
      })
    };
  },
	gourl:function(){
		wx.navigateTo({
			url:"/pages/myinfofromothers/myinfofromothers"
		})
	}
})	