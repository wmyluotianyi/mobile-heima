import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vant from 'vant'
// import 'vant/lib/index.css'
import 'vant/lib/index.less'
// 导入动态设置html文字大小的插件
import 'amfe-flexible'

Vue.use(vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
