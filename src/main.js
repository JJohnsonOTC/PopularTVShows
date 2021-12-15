/*
 ===========================================================================
    Developer: Jeff Johnson
    Project:   Popular TV Shows
    Purpose:   Combination of using Vue CLI , axios and TMDB to generate
               a popular TV show site using components created in Vue.
===========================================================================
 */
// Import vue and desired plugins
import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/reset.css'

Vue.config.productionTip = false
// The JS calls the vue instance
new Vue({
  render: h => h(App),
}).$mount('#app')
