Page({
	data:{
		title: "寻找艺设一班陈同学",
		icon: "/images/HotSearch/searchBarIcon1.png",
		abstract: "打击好我是来自艺设三班的陈美屹，请问同学门有认识土木三班的XXX吗？",
		numcomment: "666",
		numzan: "777",

		MyReleaseLists:[]
	},
	onLoad:function(options){
		this.getData()
	},
	getData:function(){
    var that = this;
    wx.request({
      	url: 'http://rap2api.taobao.org/app/mock/16053/commentLists',
      	header: {
        	"Content-Type": "applciation/json"
      	},
      	method: "GET",
      	success: function (res) {
        	that.setData({
          		commentLists: res.data.commentLists
        		})
     		},
      	fail: function (err) { },//请求失败
      	complete: function () { }//请求完成后执行的函数
      	})
   	},


	onReady:function(){
		
	},
	onShow:function(){
		
	},
	onHide:function(){
		
	},
	onUnload:function(){
		
	},
	onPullDownRefresh:function(){
		
	},
	onReachBottom:function(){
		
	}
})		