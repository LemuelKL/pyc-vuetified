import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'
Vue.use(VueRouter)

Vue.config.productionTip = false

import SchoolInformation from './views/SchoolInformation'
import Home from './views/Home'
const routes = [
  { path: '/', component: Home },
  { path: '/Home', component: Home },
  { path: '/SchoolInformation', component: SchoolInformation },
]
const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
