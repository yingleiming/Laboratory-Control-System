import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import MainPanel from '@/components/MainPanel'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'MainPanel',
      component: MainPanel
    }
  ],
  mode:"history"
})
