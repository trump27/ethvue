import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.use(VueRouter)
var router = new VueRouter()

import App from './App.vue'
import Node from './components/Node.vue'
router.map({
  '/': { component: Node },
  '/base': { component: Node },
  '*': { component: Node }
})

router.start(App, '#app')
