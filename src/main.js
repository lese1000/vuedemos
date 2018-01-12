// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引用API文件
import api from './api/index'
// 将API方法绑定到全局
Vue.prototype.$api = api

// 引用工具文件
import utils from './utils/index.js'
// 将工具方法绑定到全局
Vue.prototype.$utils = utils

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})


/*

new Vue({

  router,
  store,
  //components: { App }  vue1.0的写法
  render: h => h(App)    vue2.0的写法
}).$mount('#app')



{
    render: h => h(App);
}
等价于

{
    render: h => {
        return h(App);
    }
}
等价于

{
    render: function(h) {
        return h(App);
    }
}
即：

{
    render: function(createElement) {
        return createElement(App);
    }
}

[官方文档][1]：

 render: function (createElement) {
    return createElement(
      'h' + this.level,   // tag name 标签名称
       this.$slots.default // 子组件中的阵列
     )
   }

*/
