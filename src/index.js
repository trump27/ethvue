import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.use(VueRouter)
var router = new VueRouter()

import App from './App.vue'
import Node from './components/Node.vue'
import Block from './components/Block.vue'
import Tx from './components/Tx.vue'
import Account from './components/Account.vue'
router.map({
  '/': { component: Node },
  '/node': { component: Node },
  '/block': { component: Block },
  '/tx': { component: Tx },
  '/tx/:hash': { component: Tx },
  '/account/': { component: Account },
  '/account/:hash': { component: Account },
  '*': { component: Node }
})

router.start(App, '#app')
