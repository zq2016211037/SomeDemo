// components/HTarchives/HTarchives.js
Component({
  properties: {
    title: {
      type: String,
      value: ''
    },
    userLogo: {
      type: String,
      value: ''
    },
    userName: {
      type: String,
      value: ''
    },
    img: {
      // type: Array,
      // value: ""
      type:String,
      value:''
    },
    isLikeNum: {
      type: String,
      value: ''
    },
    repliesNum: {
      type: String,
      value: ''
    },
    psgId:{
      type:String,
      value:''
    },
    topicType:{
      type:String,
      value:''
    },
  },
  methods: {
    mifo:function(){
      wx.navigateTo({
        url:'/pages/common/myinfofromothers/myinfofromothers'
      })
    },
  }
})
