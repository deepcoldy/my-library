<template>
  <div class="">
    <van-nav-bar
      title="个人信息"
    />
    <van-cell-group v-if="profile.name">
      <van-cell title="姓名" :value="profile.name" />
      <van-cell title="学号" :value="profile.student_number" />
      <van-cell title="总借书次数" :value="profile.borrow_times" />
      <van-cell title="微信" icon="wechat"
        :value="profile.bind_weixin ? '点击解绑' : '点击绑定'" @click="bindWechat">
        <template slot="title">
          <span class="van-cell-text">微信</span>
          <van-tag :type="profile.bind_weixin ? 'primary' : 'danger'">{{ profile.bind_weixin ? '已绑定' : '未绑定' }}</van-tag>
        </template>
      </van-cell>
    </van-cell-group>
    <van-loading color="white" v-if="!profile.name"/>
  </div>
</template>
<script>
import { Cell, CellGroup, Loading, Dialog, Toast, Tag } from 'vant'
import axios from 'axios'

export default {
  data () {
    return {
      profile: {
        name: '',
        student_number: '',
        borrow_times: ''
      }
    }
  },
  components: {
    Cell, CellGroup, Loading, Dialog, Toast, Tag
  },
  methods: {
    init () {
      axios.get(`api/profile`)
        .then(({ data }) => {
          if (data.status === 'unbind') {
            Dialog.alert({
              message: '微信登陆成功！您还未绑定账号，请前去绑定。'
            }).then(() => {
              this.$router.push({
                name: 'Login',
                query: {
                  openid: data.open_id
                }
              })
            })
            return
          }
          this.profile = {
            name: data.name,
            student_number: data.student_number,
            borrow_times: data.borrow_times.toString(),
            bind_weixin: !!data.open_id
          }
        })
        .catch(() => {
          Toast.fail('未登陆')
          this.$router.push({
            name: 'Login'
          })
        })
    },
    bindWechat () {
      if (this.profile.bind_weixin) {
        axios.get(`api/unbind`).then(() => {
          this.profile.bind_weixin = ''
        })
      } else {
        location.href = 'http://library.iscode.cn/api/auth/weixin'
      }
    }
  },
  created () {
    this.init()
  }
}
</script>
