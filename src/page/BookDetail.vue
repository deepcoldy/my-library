<template>
  <van-panel :title="book.name" :desc="book.writer" :status="book.available_number ? `可借，剩余${book.available_number}本` : '已借空'">
    <div class="content">
      <div>出版社：{{ book.publisher }}</div>
      <div>馆藏：{{ book.total_number }}本</div>
      <div>价格：{{ book.price }}</div>
      <van-rate v-model="book.score" />
    </div>
    <div class="footer" slot="footer">
      <van-button size="small" type="primary" @click="borrow" :disabled="!book.available_number">我要借阅</van-button>
    </div>
  </van-panel>
</template>
<script>
import { Indicator } from 'mint-ui'
import axios from 'axios'
import { Panel, Button, Dialog, Toast } from 'vant'

export default {
  data () {
    return {
      id: 1,
      book: {}
    }
  },
  components: {
    Panel, Button, Dialog, Toast
  },
  methods: {
    borrow () {
      if (this.book.status === 2) {
        Dialog.confirm({
          title: '未登录，前往登录？'
        }).then(() => {
          this.$router.push({ name: 'Login' })
        })
        return
      }
      if (this.book.status === 0) {
        Dialog.alert({
          title: '您已经借了此书，请还书后再借'
        })
        return
      }
      Dialog.confirm({
        title: '确定借阅？将开始计入借书时间。'
      }).then(() => {
        Indicator.open()
        axios.get(`api/book/borrow`, {
          params: {
            book_id: this.id
          }
        })
          .then(({ data }) => {
            Indicator.close()
            Toast.success('借书成功')
            this.book.available_number--
            this.book.status = 0
          })
          .catch((error) => {
            Indicator.close()
            Dialog.alert({
              title: '借书失败，请重试'
            }).then(() => {
              location.reload()
            })
            console.log(error)
          })
      })
    },
    init () {
      Indicator.open()
      axios.get(`api/search/detail`, {
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
            total_number: data.total_number,
            status: data.status // 0: 未还书，不可再借，1: 可借， 2: 未登录
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
