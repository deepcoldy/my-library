<template>
  <div class="">
    <van-nav-bar
      title="借书历史"
    />
    <van-cell-group>
      <van-cell v-for="(item, index) in history" :key="`history${index}`">
        <template slot="title">
          <span class="van-cell-text">{{item.name}}</span>
          <van-tag :type="!item.returned ? 'danger' : 'primary'">{{ !item.returned ? '未还' : '已还'}}</van-tag>
          <div class="van-cell__label">借书日期：{{item.borrow_date}}</div>
          <div class="van-cell__label">还书日期：{{item.return_date}}</div>
          <div class="van-cell__label">续借次数：{{item.renew}}次</div>
        </template>
        <template slot="right-icon" v-if="!item.returned">
          <div class="button-group">
            <van-button :type="item.due ? 'disabled' : 'default'" @click="renewBook(item.record_id)">{{ item.due ? '已逾期' : '续借' }}</van-button>
            <div style="width:10px;"></div>
            <van-button type="primary" @click="returnBook(item.record_id)">还书</van-button>
          </div>
        </template>
      </van-cell>
    </van-cell-group>
  </div>
</template>
<script>
import { Cell, CellGroup, Dialog, Toast, Tag } from 'vant'
import axios from 'axios'
import { Indicator } from 'mint-ui'

export default {
  data () {
    return {
      history: []
    }
  },
  components: {
    Cell, CellGroup, Dialog, Toast, Tag
  },
  methods: {
    init () {
      Indicator.open()
      axios.get(`api/book/borrowed`)
        .then(({ data }) => {
          Indicator.close()
          console.log(data)
          this.history = data
        })
        .catch(() => {
          Indicator.close()
          Toast.fail('未登陆')
          this.$router.push({
            name: 'Login'
          })
        })
    },
    returnBook (id) {
      Indicator.open()
      axios.get(`api/book/return`, {
        params: {id}
      })
        .then(() => {
          Indicator.close()
          this.init()
        })
        .catch(() => {
          Indicator.close()
          Toast.fail('还书失败')
        })
    },
    renewBook (id) {
      Indicator.open()
      axios.get(`api/book/renew`, {
        params: {id}
      })
        .then(() => {
          Indicator.close()
          this.init()
        })
        .catch(() => {
          Indicator.close()
          Toast.fail('续借超限')
        })
    }
  },
  created () {
    this.init()
  }
}
</script>
<style>
.button-group{
  display: flex;
  align-items: center;
}
</style>
