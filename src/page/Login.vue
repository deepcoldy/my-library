<template>
<div>
  <van-nav-bar
    :title="openid ? '绑定账号' : '登录'"
    right-text="注册"
    @click-right="goRegister"
  />
  <van-cell-group>
    <van-field
      v-model="account"
      label="账号"
      icon="clear"
      placeholder="请输入用户名"
      required
      @click-icon="account = ''"
    />
    <van-field
      v-model="password"
      type="password"
      label="密码"
      placeholder="请输入密码"
      required
    />
  </van-cell-group>
  <van-button type="primary" class="button" @click="login">{{ openid ? '绑定微信' : '登录' }}</van-button>
  <van-button type="default" class="button" @click="wechatLogin" v-if="!openid">微信登录</van-button>
</div>
</template>
<script>
import { Cell, CellGroup, Field, Button, NavBar, Toast, Dialog } from 'vant'
import { Indicator } from 'mint-ui'
import axios from 'axios'

export default {
  data () {
    return {
      account: '',
      password: '',
      openid: ''
    }
  },
  created () {
    console.log(this.$route)
    if (this.$route.query && this.$route.query.openid) {
      this.openid = this.$route.query.openid // 有openid，则为绑定微信界面
    }
    this.init()
  },
  components: {
    Indicator, Field, Cell, CellGroup, Button, NavBar, Toast, Dialog
  },
  methods: {
    goRegister () {
      this.$router.push({ name: 'Register',
        query: {
          openid: this.openid
        }})
    },
    login () {
      if (!this.account || !this.password) {
        Toast.fail('请填写完整')
        return
      }
      axios({
        url: `api/login`,
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        data: {
          account: this.account,
          password: this.password,
          open_id: this.openid
        }
      }).then(({ data }) => {
        this.$router.push({ name: 'Profile' })
      }).catch(() => {
        Dialog.alert({
          title: this.openid ? '账号或密码错误，绑定失败' : '账号或密码错误，登录失败'
        })
      })
    },
    wechatLogin () {
      location.href = 'http://library.iscode.cn/api/auth/weixin'
    },
    init () { // 检查是否可以自动登录
      axios.get(`api/profile`)
        .then(({ data }) => {
          if (data.status !== 'unbind') {
            this.$router.push({
              name: 'Profile'
            })
          }
        })
    }
  }
}
</script>
<style scoped>
.button{
  width: 90%;
  display: block;
  margin: 10px auto;
}
</style>
