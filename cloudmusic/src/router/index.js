import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/pages/index'
import Mymusic from '@/components/pages/mymusic'
import Count from '@/components/pages/count'
// import 

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/mymusic',
      name: 'Mymusic',
      component: Mymusic
    },    
    {
      path: '/count',
      name: 'Count',
      component: Count
    }
  ]
})
