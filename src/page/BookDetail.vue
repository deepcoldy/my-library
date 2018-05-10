<template>
  <van-panel :title="book.name" :desc="book.writer" :status="book.available_number ? `可借，剩余${book.available_number}本` : '已借空'">
    <div class="content">
      <div>出版社：{{ book.publisher }}</div>
      <div>馆藏：{{ book.total_number }}本</div>
      <div>价格：{{ book.price }}</div>
      <van-rate v-model="book.score" />
    </div>
    <div class="footer" slot="footer">
      <van-button size="small" type="primary">预约借阅</van-button>
    </div>
  </van-panel>
</template>
<script>
import { Indicator } from 'mint-ui'
import axios from 'axios'
import { Panel, Button } from 'vant'

export default {
  data () {
    return {
      id: 1,
      book: {}
    }
  },
  components: {
    Panel, Button
  },
  methods: {
    init () {
      Indicator.open()
      axios.get(`http://${location.hostname}:7001/search/detail`, {
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
            available_number: data.available_number,
            total_number: data.total_number
          }
        })
        .catch((error) => {
          Indicator.close()
          console.log(error)
        })
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
.footer{
  display: flex;
  flex-direction: row-reverse;
}
</style>
