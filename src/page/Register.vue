<template>
<div>
  <van-nav-bar
    title="注册"
    left-text="返回"
    left-arrow
    @click-left="backLogin"
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
      v-model="name"
      label="姓名"
      icon="clear"
      placeholder="请输入姓名"
      required
      @click-icon="name = ''"
    />
    <van-field
      v-model="number"
      label="学号"
      icon="clear"
      placeholder="请输入学号"
      required
      @click-icon="number = ''"
    />
    <van-field
      v-model="password"
      type="password"
      label="密码"
      placeholder="请输入密码"
      required
    />
  </van-cell-group>
  <van-button type="primary" class="button" @click="register">注册</van-button>
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
      name: '',
      password: '',
      number: ''
    }
  },
  components: {
    Indicator, Field, Cell, CellGroup, Button, NavBar, Toast, Dialog
  },
  methods: {
    backLogin () {
      this.$router.push({ name: 'Login' })
    },
    register () {
      if (!this.account || !this.name || !this.password || !this.number) {
        Toast.fail('请填写完整')
        return
      }
      axios.post(`api/register`, {
        account: this.account,
        name: this.name,
        password: this.password,
        number: this.number
      }).then((resp) => {
        Toast.success('注册成功，请登录')
        this.$router.push({ name: 'Login' })
      }).catch(() => {
        Dialog.alert({
          title: '注册失败'
        })
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
