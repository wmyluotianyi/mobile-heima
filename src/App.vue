<template>
  <div id="app">
    <h3>app组件</h3>
    <p>{{$store.state.name}}</p>
    <button @click="$store.commit('setName',{name:'zhangsan'})">修改用户姓名</button>
    <button @click="$store.dispatch('getUser',{name:'libai'})">获取数据</button>
    <router-view />
  </div>
</template>
<script>
  // import {
  //   mapMutations
  // } from 'store'
  // export default {
  //   methods: {
  //     ...mapMutations(['setName'])
  //   }
  // }

</script>

<style lang="less">
</style>
