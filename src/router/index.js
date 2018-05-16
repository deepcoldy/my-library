import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/page/Login'
import Register from '@/page/Register'
import Profile from '@/page/Profile'
import Borrowed from '@/page/Borrowed'
import Search from '@/page/Search'
import BookDetail from '@/page/BookDetail'
import LatestBook from '@/page/LatestBook'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/borrowed',
      name: 'Borrowed',
      component: Borrowed
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/BookDetail',
      name: 'BookDetail',
      component: BookDetail
    },
    {
      path: '/latest',
      name: 'LatestBook',
      component: LatestBook
    }
  ]
})
