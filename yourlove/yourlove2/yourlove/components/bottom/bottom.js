// components/bottom/bottom.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    choseId:{
      type:String,
      value:"0"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    chose:[false,false,false,false],
    ifpublish:false,
    // publishStyle:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeStyle: function (event) {
      var id = event.currentTarget.id;
    //   var item = "chose[" + id + "]";
    //   var bollen = this.data.chose[id];
      if(id==0){
        wx.navigateTo({
          url: '/pages/HomePage/HomePage',
        })
      }else if(id==1){
        wx.navigateTo({
        url:"/pages/hotSearch/hotSearch"
        }) 
      }else if(id==3){
        wx.navigateTo({
          url: '/pages/message/message',
        })
      }else if(id==4){
        wx.navigateTo({
          url:"/pages/MyInfo/MyInfo"
        })
      }
    },
    showFb:function(){
      this.setData({
        ifpublish:true
      })
    }
  },
  ready:function(){
    var id = this.data.choseId;
    var item = "chose[" + id + "]";
    this.setData({
      [item]: !this.data.ifpublish

    })
  }
})
