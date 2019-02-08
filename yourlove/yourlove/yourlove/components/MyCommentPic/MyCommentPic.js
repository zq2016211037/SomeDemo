
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
    ifreply: 'ifreply'
  },
  /**
   * 组件的方法列表
   */
  methods: {
    reply:function(){
      this.setData({
        ifreply: ''
      })
    }
  }
})
