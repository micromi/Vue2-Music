// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'; // 转换新的JavaScript新的API
import Vue from 'vue';
import fastClick from 'fastclick';
import 'common/stylus/index.styl';
import App from './App';
import router from './router';

fastClick.attach(document.body);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
