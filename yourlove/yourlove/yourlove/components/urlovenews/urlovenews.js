
Component({
  properties: {
    img: {
      type: String,
      value: ''
    },
    isLike: {
      type: String,
      value: ''
    },
    avatarUrl: {
      type: String,
      value: ''
    },
    likeVerdict: {
      type: String,
      value: ''
    },
    createTime: {
      type: String,
      value: ""
    },
    nickName: {
      type: String,
      value: ''
    },
    isLikeNum: {
      type: String,
      value: ''
    },
    title: {
      type: String,
      value: ''
    },
    userId: {
      type: String,
      value: ''
    },
    content: {
      type: String,
      value: ''
    },
    pageViewNum: {
      type: String,
      value: ''
    },
    psgId:{
      type:String,
      value:''
    }
  },
   methods: {
    mifo:function(){
      wx.navigateTo({
        url:'/pages/myinfofromothers/myinfofromothers?loveId=76'
      })
    },
  }
})
