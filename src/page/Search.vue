<template>
<div>
    <mt-header fixed title="搜索"></mt-header>
    <div class="blank"></div>
  <div>
    <mt-field label="书名" placeholder="请输入用户名" v-model="search"></mt-field>
    <mt-field label="作者" placeholder="请输入邮箱" type="email" v-model="search"></mt-field>
  </div>
  <mt-button class="button" type="primary" size="large" @click="searchBooks">搜索</mt-button>

  <Cell
    v-for="(item, index) in result"
    :title="item.name" :label="item.writer" :key="`cell${index}`" is-link></Cell>
</div>
</template>
<script>
import { Field, Header, Button, Cell, Indicator } from 'mint-ui'
import axios from 'axios'

export default {
  data () {
    return {
      search: '',
      type: 'bookname',
      result: [{
        name: '默认标题',
        author: '默认作者'
      }]
    }
  },
  components: {
    Field, Header, Button, Cell, Indicator
  },
  methods: {
    searchBooks () {
      Indicator.open()
      axios.get('http://1.elroitas.applinzi.com/cha.php', {
        params: {
          search: this.search,
          type: this.type
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
    }
  }
}
</script>
<style scoped>
.blank{
  height: 40.3px;
}
.button{
  width: calc(100% - 20px);
  margin: 10px auto;
}
</style>
