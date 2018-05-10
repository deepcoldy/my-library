<template>
  <van-panel :title="book.name" :desc="book.writer" :status="book.status">
    <div class="content">
      <div>出版社：{{ book.publisher }}</div>
      <div>价格：{{ book.price }}</div>
      <van-rate v-model="book.score" />
    </div>
  </van-panel>
</template>
<script>
import { Indicator } from 'mint-ui'
import axios from 'axios'
import { Panel } from 'vant'

export default {
  data () {
    return {
      id: 1,
      book: {}
    }
  },
  components: {
    Panel
  },
  methods: {
    init () {
      Indicator.open()
      axios.get('http://127.0.0.1:7001/search/detail', {
        params: {
          id: this.id
        }
      })
        .then(({ data }) => {
          Indicator.close()
          this.book = {
            name: data.name,
            writer: data.writer,
            score: Number(data.score),
            publisher: data.publisher,
            price: Number(data.price).toFixed(2) + '元',
            status: this.status(data.status)
          }
        })
        .catch((error) => {
          Indicator.close()
          console.log(error)
        })
    },
    status (status) {
      switch (status) {
        case 1:
          return '在馆'
        case 0:
          return '已借出'
      }
    }
  },
  created () {
    this.id = this.$route.query.id
    this.init()
  }
}
</script>
<style scoped>
.content{
  padding: 15px;
}
</style>
