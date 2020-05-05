import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import Sortable from 'vue-sortable'
import './styles/styles.css'

Vue.config.productionTip = false
Vue.use(Sortable)
Vue.use(Vuetify, {
  theme: {
    dark: '#141414',
    error: '#E50914'
  },
  iconfont: 'fa'
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
