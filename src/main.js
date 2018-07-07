import Vue from 'vue';
import App from './App.vue';

// 1 导入路由对象
import router from './routes/router';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../src/assets/css/index.css';

import MyAxios from './plugins/myaxios';
Vue.use(MyAxios);

new Vue({
  el: '#app',
  render: h => h(App),
  // 2 配置路由对象
  router
})
