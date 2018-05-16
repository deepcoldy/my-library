<template>
  <div class="">
    <van-nav-bar
      title="新书推荐"
    />
    <van-cell-group>
      <van-cell v-for="(item, index) in books" :key="`books${index}`">
        <template slot="title">

        </template>
        <template slot="right-icon" v-if="!item.returned">

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
      axios.get(`api/books/latest`)
        .then(({ data }) => {
          Indicator.close()
          this.book = data
        })
        .catch((error) => {
          Indicator.close()
          console.log(error)
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
