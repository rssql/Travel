// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'style/reset.css' /* ./ ————当前目录 */
import 'style/border.css'  /* 解决移动端1px边框问题*/
import 'style/iconfont.css'
/*某些机型浏览器移动端点击(click)延迟300ms的问题   npm install fastclick --save*/
import fastClick from 'fastclick'
Vue.config.productionTip = false
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
