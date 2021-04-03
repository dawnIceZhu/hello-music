import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/stylus/index.styl'
import fastclick from 'fastclick'

Vue.config.productionTip = false

// 取消移动端点击300ms延迟
fastclick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
