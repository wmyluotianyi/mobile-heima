import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   redirect: '/list'
  // },
  // {
  //   path: '/list',
  //   component: Hot
  // }, // 新闻列表
  // {
  //   path: '/detail/:id',
  //   component: Detail
  // } // 新闻详情
]

const router = new VueRouter({
  routes
})

export default router
