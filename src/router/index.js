import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/home/home.vue'
import User from 'components/user/user'
import Regist from 'components/regist/regist'
import Login from 'components/login/login'
import Travel from 'components/travel/travel'
import Sport from 'components/sport/sport'
import travelDetail from 'components/travelDetail/travelDetail'

Vue.use(Router)
export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: ':id',
          component:travelDetail
        }
      ]
    },
    {
      path: '/sport',
      component: Sport,
      children: [
        {
          path:':id',
          component:travelDetail
        }
      ]
    },
    {
      path:'/travel',
      component: Travel,
      children: [
        {
          path:':id',
          component:travelDetail
        }
      ]
    },
    {
      path: '/user',
      component: User,
      children:[
        {
          path:'/user/regist',
          component: Regist
        },
        {
          path:'/user/login',
          component: Login
        }
      ]
    }
  ]
})
