<template>
  <div class="">
    <van-nav-bar
      title="个人信息"
    />
    <van-cell-group>
      <van-cell title="姓名" :value="profile.name" />
      <van-cell title="学号" :value="profile.student_number" />
      <van-cell title="总借书次数" :value="profile.borrow_times" />
    </van-cell-group>
  </div>
</template>
<script>
import { Cell, CellGroup } from 'vant'
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
    Cell, CellGroup
  },
  methods: {
    init () {
      axios.get(`http://${location.hostname}:7001/profile`)
        .then(({ data }) => {
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
