// components/chatInput/chatInput.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    emoji: [
      "😀", "😃", "😄", "😁", "😆", "😅", "😂", "🤣", "☺️", "😊", "😇", "🙂", "🙃", "😉", "😌", "😍", "😘", "😗", "😙", "😚", "😋", "😜", "😝",
      "🤑", "🤗", "🤓", "😎", "🤡", "🤠", "😏", "😒", "😞", "😔", "😟", "😕", "🙁", "☹️", "😣", "😖", "😫", "😩", "😤", "😠", "😡", "😶", "😐",
      "😑", "😯", "😦", "😧", "😮", "😲", "😵", "😳", "😱", "😨", "😰", "😢", "😥", "🤤", "😭", "😓", "😪", "😴", "🙄", "🤔",
      "😬", "🤥", "🤐",
      "🤢", "🤧", "😷", "🤒", "🤕", "👻", "😈", "👿", "💩", "👏", "✌️", "🤘", "👌", , "👎", "👊", "✊", "🙏", "💪", "🌚", "🌝", "❤️", "💔", "🌹", "🌷", "🐷", "🙈", "🙉", "🙊", "🐔", "🐤"
    ],
    content: "",
    emojiShow: false
  },
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
  }
})