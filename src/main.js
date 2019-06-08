// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import axios from "axios"; // 模块化请求头
// import store from "./store"; // 状态你管理组件
Vue.prototype.$axios = axios; // 全局实例配置

// 也可以引入样式
import './assets/styles/reset.css'
// 一像素边框问题
import 'styles/border.css'
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
// fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
