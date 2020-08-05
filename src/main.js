import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import  'bootstrap/dist/css/bootstrap.css' 
import  'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/custom.css'

Vue.config.productionTip = false
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 2
  },
  mutations: {
    increment(state) {
      state.count++
    }
  }
})

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
