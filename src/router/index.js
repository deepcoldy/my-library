import Vue from 'vue'
import Router from 'vue-router'
import Search from '@/page/Search'
import BookDetail from '@/page/BookDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/BookDetail',
      name: 'BookDetail',
      component: BookDetail
    }
  ]
})
