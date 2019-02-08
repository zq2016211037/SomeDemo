// components/hotSearchBar/hotSearchBar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    "url":{
      type: String,
      value: ''
    },
    "index":{
      type:Number,
      value:0
    },
    // "searchItem":{
    //   type:Object,
    //   value:{
    //     "title":"重邮冷刃，匠人精神",
    //     "sign":null,
    //     "url":''
    //   }
    // },
    "title":{
      type: String,
      value: ''
    },
    "image":{
      type:String,
      value:''
    }
    // "changeUrl":{
    //   type:String,
    //   value:'/pages/common/ContentDetail/ContentDetail'
    // }
  },
  data: {
    numberColor:true,
    image:null
  },
  ready:function(){
    if(this.data.index<=3){
      this.setData({
        numberColor:true
      })
    }else{
      this.setData({
        numberColor:false
      })
    }
    // var image;
    // var type = this.data.sign;
    // console.log(this.data)
    // if(type==2){
    //     image="/images/yousuozhi/hotsearch.png";
    //   }else if(type==4){
    //     image="/images/HotSearch/searchBarIcon3.png";
    //   }else if(type==3){
    //     image="/images/HotSearch/searchBarIcon.png";
    //   }else{
    //     image="/images/HotSearch/searchBarIcon2.png";
    //   }
    //   this.setData({
    //     image:image
    //   })
  },
  /**
   * 组件的方法列表
   */
  // methods: {
  //   showDetail:function(){
  //     wx.navigateTo({
  //       url: this.properties.changeUrl,
  //     })
  //     //console.log(this.properties.changeUrl);
  //   }
  // }
})
