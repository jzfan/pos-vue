import Vue from 'vue'
import Router from 'vue-router'
// import FoodsPage from '@/components/FoodsPage'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: require('@/components/Index').default
    },
    // { name:'FoodsPage', path: '/foods-page', component:  FoodsPage},
    {
      path: '*',
      redirect: '/'
    }
  ]
})
