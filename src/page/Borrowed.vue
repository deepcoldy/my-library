<template>
  k
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

</style>
