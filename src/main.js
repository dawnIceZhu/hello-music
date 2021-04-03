import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/stylus/index.styl'
import fastclick from 'fastclick'
import VueLazyload from "vue-lazyload"

Vue.config.productionTip = false

// 取消移动端点击300ms延迟
fastclick.attach(document.body)

// or with options
Vue.use(VueLazyload, {
  loading: require('@/assets/image/logo.png')
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
