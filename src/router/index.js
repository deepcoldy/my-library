import Vue from 'vue'
import Router from 'vue-router'
import Search from '@/page/Search'

import { Field, Header, Button, Cell } from 'mint-ui'

Vue.component(Field.name, Field)
Vue.component(Header.name, Header)
Vue.component(Button.name, Button)
Vue.component(Cell.name, Cell)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/search',
      name: 'search',
      component: Search
    }
  ]
})
