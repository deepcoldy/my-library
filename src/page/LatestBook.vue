<template>
  <div class="">
    <van-nav-bar
      title="新书推荐"
    />
    <van-cell-group>
      <van-cell v-for="(item, index) in books" :key="`books${index}`" is-link @click="goDetail(item.id)">
        <template slot="title">
          <span class="van-cell-text">{{item.name}}</span>
          <div class="van-cell__label">上架日期：{{item.date}}</div>
          <div class="van-cell__label">馆藏总数：{{item.total_number}}本</div>
          <div class="van-cell__label">在馆个数：{{item.available_number}}本</div>
        </template>
      </van-cell>
    </van-cell-group>
    <div class="no-result" v-show="!books.length"> 暂无新书推荐 </div>
  </div>
</template>
<script>
import { Cell, CellGroup, Dialog, Toast, Tag } from 'vant'
import axios from 'axios'
import { Indicator } from 'mint-ui'

export default {
  data () {
    return {
      books: []
    }
  },
  components: {
    Cell, CellGroup, Dialog, Toast, Tag
  },
  methods: {
    init () {
      Indicator.open()
      axios.get(`api/book/latest`)
        .then(({ data }) => {
          Indicator.close()
          this.books = data
        })
        .catch((error) => {
          Indicator.close()
          console.log(error)
        })
    },
    goDetail (id) {
      this.$router.push({
        path: '/BookDetail?id=' + id
      })
    }
  },
  created () {
    this.init()
  }
}
</script>
<style>
  @import "../assets/common.css"
</style>
