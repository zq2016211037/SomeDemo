// // components/chatInput/chatInput.js
// var topicId;
// var userToken;
// var userId;
// var content;
// Page({

//   /**
//    * 页面的初始数据
//    */
//   data: {
//     emoji: [
//       "😀", "😃", "😄", "😁", "😆", "😅", "😂", "🤣", "☺️", "😊", "😇", "🙂", "🙃", "😉", "😌", "😍", "😘", "😗", "😙", "😚", "😋", "😜", "😝",
//       "🤑", "🤗", "🤓", "😎", "🤡", "🤠", "😏", "😒", "😞", "😔", "😟", "😕", "🙁", "☹️", "😣", "😖", "😫", "😩", "😤", "😠", "😡", "😶", "😐",
//       "😑", "😯", "😦", "😧", "😮", "😲", "😵", "😳", "😱", "😨", "😰", "😢", "😥", "🤤", "😭", "😓", "😪", "😴", "🙄", "🤔",
//       "😬", "🤥", "🤐",
//       "🤢", "🤧", "😷", "🤒", "🤕", "👻", "😈", "👿", "💩", "👏", "✌️", "🤘", "👌", , "👎", "👊", "✊", "🙏", "💪", "🌚", "🌝", "❤️", "💔", "🌹", "🌷", "🐷", "🙈", "🙉", "🙊", "🐔", "🐤"
//     ],
//     content: "",
//     emojiShow: false, 
//   },
//   choseEmoji: function (e) {
//     var index = e.target.id;
//     var that = this;
//     that.setData({
//       content: that.data.content + that.data.emoji[index]
//     })
    
//   },
//   getcontentValue: function (e) {
//     var that = this;
//     that.setData({
//       content: e.detail.value
//     })
//     content = e.detail.value
//   },
//   showEmoji: function () {
//     var that = this;
//     that.setData({
//       emojiShow: !that.data.emojiShow
//     })
    
//   },
//   sendComment:function(){
//     var that = this;
//     wx.request({
//       url:"http://120.78.165.40:9090/comment/addComment",
//       method:"POST",
//       data:{
//         topicId: topicId,
//         topicStatus: 1,
//         content: content,
//         formUId: userId,
//         formUName: 'Mch'
//       },
//       header: {
//           "content-type": "application/x-www-form-urlencoded",
//           "userId": userId,
//           "userToken": userToken
//         },
//         success:function(res){
//           console.log(res);
//           console.log(content)     
//         }
//     });
//   }
// })


Component({
  properties: {
    content:{
      type:String,
      value:''
    },
    emoji:{
      type:Object,
      value:[
        "😀", "😃", "😄", "😁", "😆", "😅", "😂", "🤣", "☺️", "😊", "😇", "🙂", "🙃", "😉", "😌", "😍", "😘", "😗", "😙", "😚", "😋", "😜", "😝",
        "🤑", "🤗", "🤓", "😎", "🤡", "🤠", "😏", "😒", "😞", "😔", "😟", "😕", "🙁", "☹️", "😣", "😖", "😫", "😩", "😤", "😠", "😡", "😶", "😐",
        "😑", "😯", "😦", "😧", "😮", "😲", "😵", "😳", "😱", "😨", "😰", "😢", "😥", "🤤", "😭", "😓", "😪", "😴", "🙄", "🤔",
        "😬", "🤥", "🤐",
        "🤢", "🤧", "😷", "🤒", "🤕", "👻", "😈", "👿", "💩", "👏", "✌️", "🤘", "👌", , "👎", "👊", "✊", "🙏", "💪", "🌚", "🌝", "❤️", "💔", "🌹", "🌷", "🐷", "🙈", "🙉", "🙊", "🐔", "🐤"
      ]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    choseEmoji: function (e) {
      var index = e.target.id;
      var that = this;
      that.setData({
        content: that.data.content + that.data.emoji[index]
      })      
    },
    getcontentValue: function (e) {
      var that = this;
      that.setData({
        content: e.detail.value
      })
      content = e.detail.value
    },
    showEmoji: function () {
      var that = this;
      that.setData({
        emojiShow: !that.data.emojiShow
      })
      
    },

    sendComment:function(){
    var that = this;
    wx.request({
      url:"http://120.78.165.40:9090/comment/addComment",
      method:"POST",
      data:{
        topicId: topicId,
        topicStatus: 1,
        content: content,
        formUId: userId,
        formUName: 'Mch'
      },
      header: {
          "content-type": "application/x-www-form-urlencoded",
          "userId": userId,
          "userToken": userToken
        },
        success:function(res){
          console.log(res);
          console.log(content)     
        }
    });
  }
  }
})
