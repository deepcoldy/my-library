<template>
<div>
  <van-nav-bar
    title="登录"
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
  <van-button type="primary" class="button" @click="login">登录</van-button>
  <van-button type="default" class="button" @click="wechatLogin">微信登录</van-button>
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
      password: ''
    }
  },
  components: {
    Indicator, Field, Cell, CellGroup, Button, NavBar, Toast, Dialog
  },
  methods: {
    goRegister () {
      this.$router.push({ name: 'Register' })
    },
    login () {
      if (!this.account || !this.password) {
        Toast.fail('请填写完整')
        return
      }
      axios({
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        withCredentials: true,
        data: {
          account: this.account,
          password: this.password
        },
        url: `http://${location.hostname}:7001/login`
      }).then(({ data }) => {
        this.$router.push({ name: 'Profile' })
      }).catch(() => {
        Dialog.alert({
          title: '登录失败'
        })
      })
    },
    wechatLogin () {
      location.href = 'http://library-api.iscode.cn/auth/weixin'
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
