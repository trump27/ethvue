<template>
<h2>hello!</h2>
</template>

<script>
import Web3 from './web3api.js'
var web3 = new Web3()
web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'))

export default {
  data () {
    return {
      item: false,
      web3: null
    }
  },
  created: () => {
    console.log('start')

    var coinbase = web3.eth.coinbase
    console.log(coinbase)
  }
}
</script>
