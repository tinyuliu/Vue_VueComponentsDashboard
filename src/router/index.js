import Vue from 'vue'
import Router from 'vue-router'

import index from '../pages/index.vue'
import pageQuiButton from '../pages/pageQuiButton.vue'
import pageQuiNav from '../pages/pageQuiNav.vue'
import pageQuiList from '../pages/pageQuiList.vue'
import pageQuiForm from '../pages/pageQuiForm.vue'
import pageTest from '../pages/pageTest.vue'
import pageTask from '../pages/pageTask.vue'
// import pageCalendar from '../pages/pageCalendar.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/btn',
      name: 'btn',
      component: pageQuiButton
    },
    {
      path: '/list',
      name: 'list',
      component: pageQuiList
    },
    {
      path: '/nav',
      name: 'nav',
      component: pageQuiNav
    },
    {
      path: '/form',
      name: 'form',
      component: pageQuiForm
    },
    {
      path: '/test',
      name: 'test',
      component: pageTest
    },
    {
      path: '/task',
      name: 'task',
      component: pageTask
    }
    // {
    //   path: '/calendar',
    //   name: 'calendar',
    //   component: pageCalendar
    // }
  ]
})
