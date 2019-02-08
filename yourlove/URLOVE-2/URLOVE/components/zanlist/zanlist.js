Component({
  /**
   * 组件的属性列表
   */
  properties: {
    
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
    gourl1:function(){
      wx.navigateTo({
        url:"/pages/ContentDetail/ContentDetail"
      })
    },
    gourl2:function(){
      wx.navigateTo({
        url:"/pages/myinfofromothers/myinfofromothers"
      })
    }
  }
})
