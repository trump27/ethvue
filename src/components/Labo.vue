<template>
  <div>
    <h2>Labo</h2>
    <div>
      <a href="build/browser-solidity/index.html" target="sol">Solidity compiler</a>
    </div>
    <div class="well">
    personal.unlockAccount("{{coinbase}}")
    </div>
    <button @click.prevent="addE" class="btn btn-primary">Addel</button>
    <pre>
    contract SingleNumRegister {
        uint storedData;
        function set(uint x) {
            storedData = x;
        }
        function get() constant returns (uint retVal) {
        return storedData;
        }
    }
    </pre>
    <pre>{{receipt | json}}</pre>
  </div>
</template>

<script>
// import { config } from '../config.js'
import Web3 from '../web3api.js'

var web3 = Web3.web3()

export default {
  data () {
    return {
      coinbase: '',
      receipt: ''
    }
  },
  created () {
    console.log('start labo')
    this.coinbase = web3.eth.coinbase

    console.log('log')
    // var filter = web3.eth.filter('pending')
    // filter.watch(function (error, log) {
    //   if (error) {
    //     console.log(log)
    //   } else {
    //     console.log(log)
    //   }
    // })
    this.receipt = web3.eth.getTransactionReceipt('0x5917c91ffda8bc9bb14edc376615b2263ff0546d272cf30fb4386ab23e935048')
  },

  methods: {
    addE () {
      this.$appendTo('<p>added</p>')
    }
  }
}
</script>
