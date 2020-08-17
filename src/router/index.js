import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index/Index'
import Cate from '@/components/Index/Cate'
import News from '@/components/Index/News'
import Search from '@/components/Index/Search'
import Full from '@/components/Index/Full'
import One from '@/components/Index/One'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Index',
      name: 'Index',
      component: Index
    },{
      path: '/Cate' ,
      name: 'Cate',
      component: Cate
    },{
      path: '/News' ,
      name: 'News',
      component: News
    },{
      path: '/Search' ,
      name: 'Search',
      component: Search
    },{
      path: '/Full' ,
      name: 'Full',
      component: Full
    },{
      path: '/One' ,
      name: 'One',
      component: One
    }
  ]
})
