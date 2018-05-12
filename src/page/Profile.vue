<template>
  <div class="">
    <van-nav-bar
      title="个人信息"
    />
    <van-cell-group v-if="profile.name">
      <van-cell title="姓名" :value="profile.name" />
      <van-cell title="学号" :value="profile.student_number" />
      <van-cell title="总借书次数" :value="profile.borrow_times" />
    </van-cell-group>
    <van-loading color="white" v-if="!profile.name"/>
  </div>
</template>
<script>
import { Cell, CellGroup, Loading, Dialog } from 'vant'
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
    Cell, CellGroup, Loading
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
                params: {
                  openid: data.open_id
                }
              })
            })
            return
          }
          this.profile = {
            name: data.name,
            student_number: data.student_number,
            borrow_times: data.borrow_times.toString()
          }
        })
    }
  },
  created () {
    this.init()
  }
}
</script>
