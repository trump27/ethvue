var Vue = require('vue')
// import VueRouter from 'vue-router'
// import VueResource from 'vue-resource'
// Vue.use(VueResource)
// Vue.use(VueRouter)
// var router = new VueRouter();

// var Web3 = require('web3')
// var web3 = new Web3()

// router.start(App, '#app')

var App = require('./app.vue')
var V = new Vue({
  el: '#app',
  components: {
    'app': App
  }
})

module.exports = V
