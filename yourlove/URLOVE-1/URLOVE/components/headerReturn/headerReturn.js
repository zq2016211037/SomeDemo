//components/headerReturn/headerReturn.js
Component({
  properties:{
    url:{
      type:String,
      value:"/pages/HomePage/HomePage"
    }
  },
  methods: {
    prev: function () {
      wx.navigateBack({
        url:this.properties.url
      })
    }
  },
})
