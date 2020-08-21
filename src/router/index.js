import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import pageA from '@/components/views/pageA'
import pageB from '@/components/views/pageB'
import pageC from '@/components/views/pageC'
import User from '@/components/views/user'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/pageA',
      name: 'pageA',
      component: pageA
    },
    {
      path: '/pageB',
      name: 'pageB',
      component: pageB
    },
    {
      path: '/pageC',
      name: 'pageC',
      component: pageC
    },
    {
      path: '/user/:id',
      name: 'user',
      component: User
    },
  ]
})
