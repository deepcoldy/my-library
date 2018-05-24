import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/page/Login'
import Register from '@/page/Register'
import Profile from '@/page/Profile'
import Borrowed from '@/page/Borrowed'
import Search from '@/page/Search'
import BookDetail from '@/page/BookDetail'
import LatestBook from '@/page/LatestBook'
import BorrowRank from '@/page/BorrowRank'
import History from '@/page/History'

Vue.use(Router)

export const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
      meta: {
        title: 'Kiko Library'
      }
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
      meta: {
        title: 'Kiko Library'
      }
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      meta: {
        title: 'Kiko Library'
      }
    },
    {
      path: '/borrowed',
      name: 'Borrowed',
      component: Borrowed,
      meta: {
        title: 'Kiko Library'
      }
    },
    {
      path: '/search',
      name: 'Search',
      component: Search,
      meta: {
        title: 'Kiko Library'
      }
    },
    {
      path: '/BookDetail',
      name: 'BookDetail',
      component: BookDetail,
      meta: {
        title: 'Kiko Library'
      }
    },
    {
      path: '/latest',
      name: 'LatestBook',
      component: LatestBook,
      meta: {
        title: 'Kiko Library'
      }
    },
    {
      path: '/BorrowRank',
      name: 'BorrowRank',
      component: BorrowRank,
      meta: {
        title: 'Kiko Library'
      }
    },
    {
      path: '/History',
      name: 'History',
      component: History,
      meta: {
        title: '往期回顾'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})
