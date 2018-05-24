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
        title: '登录'
      }
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
      meta: {
        title: '注册'
      }
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      meta: {
        title: '个人信息'
      }
    },
    {
      path: '/borrowed',
      name: 'Borrowed',
      component: Borrowed,
      meta: {
        title: '借书历史'
      }
    },
    {
      path: '/search',
      name: 'Search',
      component: Search,
      meta: {
        title: '搜索书籍'
      }
    },
    {
      path: '/BookDetail',
      name: 'BookDetail',
      component: BookDetail,
      meta: {
        title: '书籍详情'
      }
    },
    {
      path: '/latest',
      name: 'LatestBook',
      component: LatestBook,
      meta: {
        title: '最新上架'
      }
    },
    {
      path: '/BorrowRank',
      name: 'BorrowRank',
      component: BorrowRank,
      meta: {
        title: '借书排行'
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
