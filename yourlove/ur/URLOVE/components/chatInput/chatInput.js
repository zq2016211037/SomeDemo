var id;
var socketobj;
Component({
  data: {
    emoji: [
      "😀", "😃", "😄", "😁", "😆", "😅", "😂", "🤣", "☺️", "😊", "😇", "🙂", "🙃", "😉", "😌", "😍", "😘", "😗", "😙", "😚", "😋", "😜", "😝",
      "🤑", "🤗", "🤓", "😎", "🤡", "🤠", "😏", "😒", "😞", "😔", "😟", "😕", "🙁", "☹️", "😣", "😖", "😫", "😩", "😤", "😠", "😡", "😶", "😐",
      "😑", "😯", "😦", "😧", "😮", "😲", "😵", "😳", "😱", "😨", "😰", "😢", "😥", "🤤", "😭", "😓", "😪", "😴", "🙄", "🤔",
      "😬", "🤥", "🤐",
      "🤢", "🤧", "😷", "🤒", "🤕", "👻", "😈", "👿", "💩", "👏", "✌️", "🤘", "👌", "👎", "👊", "✊", "🙏", "💪", "🌚", "🌝", "❤️", "💔", "🌹", "🌷","🌸","🐷", "🙈", "🙉", "🙊", "🐔", "🐤","🐭","🐶","🐷","🍎","🍞","🥓","🍟","🌮","🍗","🍔"
    ],
    content: "",
    emojiShow: false,
    value:null,
  },
  properties: {
    'matchUser':{
      type:Number,
      value:0
    }
  },
  methods:{
    choseEmoji: function (e) {
      var index = e.target.id;
      this.setData({
        content: this.data.content + this.data.emoji[index]
      })
    },
    getcontentValue: function (e) {
      this.setData({
        content: e.detail.value
      })
    },
    showEmoji: function () {
      this.setData({
        emojiShow: !this.data.emojiShow
      })
   },
    sendMsg: function () {
      var that = this;
        var obj = {
        from: id,
        to: that.data.matchUser,
        content:that.data.content
      }
      this.setData({
        content:""
      })
      //console.log(obj);
      socketobj.send("/app/anonymousChat",{},JSON.stringify(obj));
      }
      
  },
  ready:function(){
     var that = this;
     id = getApp().globalData.userId;
     socketobj = getApp().globalData.socketObj;
     socketobj.subscribe('/user/queue/anonymous', function (msg, headers) {
      console.log("1");
      //console.log("get message");
      var obj = JSON.parse(msg.body);
      var val = obj.data;
      var myEventDetail = {
        val: val
      }
      console.log(obj.data);
      that.triggerEvent('myevent', myEventDetail);
    })
  }
})