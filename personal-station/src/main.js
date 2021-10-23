/*
 * @Author: your name
 * @Date: 2021-10-19 10:40:11
 * @LastEditTime: 2021-10-19 14:15:50
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \personal-station\src\main.js
 */
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/font/font.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
