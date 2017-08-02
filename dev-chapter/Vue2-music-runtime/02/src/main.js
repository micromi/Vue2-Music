import Vue from 'vue';
import 'common/stylus/index.styl';
import App from './App';
// import router from './router';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router,
  render: h => h(App),
});
