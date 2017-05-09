import Vue from 'vue'
import App from './app.vue'
import {AppVuePlugin} from './app-vue-plugin'

Vue.use(AppVuePlugin);

new Vue({
  el: '#app',
  render: h => h(App)
})
