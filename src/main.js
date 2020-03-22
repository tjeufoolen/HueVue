import Vue from 'vue'
import App from './App.vue'
import { HueService } from './services/HueService'

// Register services
Vue.prototype.$hueService = new HueService();

// Initial setup
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')