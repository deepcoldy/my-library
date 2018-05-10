// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Field, Header, Button, Cell, Search } from 'mint-ui'
import { Panel, Rate, Button as vanButton } from 'vant'

Vue.use(Rate)
Vue.use(Panel)
Vue.use(vanButton)

Vue.config.productionTip = false

Vue.component(Field.name, Field)
Vue.component(Header.name, Header)
Vue.component(Button.name, Button)
Vue.component(Cell.name, Cell)
Vue.component(Search.name, Search)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
