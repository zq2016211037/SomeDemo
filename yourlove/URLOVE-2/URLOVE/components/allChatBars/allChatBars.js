// components/allChatBars/allChatBars.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    "judge":{
        type:Boolean,
        value:true
    },
    "chatWords":{
      type:String,
      value:" "
    },
    "headerImg":{
      type:String,
      value:"/images/HomePage/ulove.png"
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

  },
  ready:function(){
    //console.log(this.data.chatWords);
  }
})
