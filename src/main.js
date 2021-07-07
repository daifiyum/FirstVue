import Vue from 'vue'
import App from './App.vue'
import echarts from 'echarts'
import axios from 'axios'
import '../node_modules/animate.css' //导入css库
Vue.prototype.$axios = axios;
Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#root')
