// components/publish/publish.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isShow:{
      type:Boolean,
      value:false
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
    close:function(){
      this.setData({
        isShow:false
      })
    },
    sendlove: function(){
      wx.navigateTo({
        url: '/pages/publish/release/release'
      })
    },
    sendothers: function(e){
      var statusId = e.target.id;
      wx.navigateTo({
       url: '/pages/publish/releaseothers/releaseothers?statusId='+statusId
      });
      
    }
  }
})
