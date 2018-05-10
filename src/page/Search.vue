<template>
<div>
    <!-- <mt-header fixed title="搜索"></mt-header>
    <div class="blank"></div>
  <div>
    <mt-field label="书名" placeholder="请输入用户名" v-model="search"></mt-field>
    <mt-field label="作者" placeholder="请输入邮箱" type="email" v-model="search"></mt-field>
  </div>
  <mt-button class="button" type="primary" size="large" @click="searchBooks">搜索</mt-button> -->
  <mt-search
    v-model="search"
    placeholder="请输入要查询的书名或作者">
    <mt-cell
      v-for="(item, index) in result"
      :to="`/BookDetail?id=${item.id}`"
      :title="item.name" :label="item.writer" :key="`cell${index}`" is-link></mt-cell>
    <div class="no-result" v-if="!result.length">暂无查询结果</div>
  </mt-search>
</div>
</template>
<script>
import { Indicator } from 'mint-ui'
import axios from 'axios'

export default {
  data () {
    return {
      search: '',
      result: []
    }
  },
  components: {
    Indicator
  },
  created () {
    console.log(this.$route)
    this.search = this.$route.query.q
  },
  watch: {
    search (value) {
      this.$router.replace({
        path: '/search',
        query: {
          q: value
        }
      })
      if (value) {
        this.searchBooks()
      }
    }
  },
  methods: {
    searchBooks () {
      Indicator.open()
      axios.get('http://127.0.0.1:7001/search', {
        params: {
          q: this.search
        }
      })
        .then((response) => {
          Indicator.close()
          console.log(response)
          this.result = response.data
        })
        .catch((error) => {
          Indicator.close()
          console.log(error)
        })
    },
    goDetail () {
      console.log(this.router)
      this.router.push('BookDetail')
    }
  }
}
</script>
<style scoped>
.no-result{
  color: #666;
  margin: 20px auto;
  text-align: center;
}
</style>
