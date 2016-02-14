<template>
  <div>
    <h2>Contract</h2>
    It wotks with eth client.
    <div>
      <a href="build/browser-solidity/index.html" target="sol">Solidity compiler</a>
    </div>
    <div class="well">
    personal.unlockAccount("{{coinbase}}")
    </div>

    <div id="editor"></div>

    <button @click.prevent="checkSrc" class="btn btn-primary">Check</button>
    <pre>{{source}}</pre>
    <pre>{{compileMsg | json}}</pre>
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
  </div>
</template>

<script>
// import { config } from '../config.js'
import Web3 from '../web3api.js'
var web3 = Web3.web3()

var editor, ace
if (typeof editor === 'undefined') {
  ace = require('brace')
  require('brace/mode/javascript')
  require('brace/theme/monokai')
  console.log('load brace')
}

export default {
  data () {
    return {
      coinbase: '',
      receipt: '',
      source: '',
      compileMsg: ''
    }
  },
  created () {
    console.log('start labo')
    this.coinbase = web3.eth.coinbase

    console.log('log')

    this.receipt = web3.eth.getTransactionReceipt('0x5917c91ffda8bc9bb14edc376615b2263ff0546d272cf30fb4386ab23e935048')
  },
  ready: () => {
    editor = ace.edit('editor')
    editor.getSession().setTabSize(2)
    editor.setFontSize(16)
    editor.getSession().setMode('ace/mode/javascript')
    editor.setTheme('ace/theme/monokai')
  },
  methods: {
    checkSrc () {
      var src = editor.getValue().replace(/\r?\n/g, ' ').replace(/\s+/g, ' ')
      this.source = src

      var compiled = web3.eth.compile.solidity(src, (error, result) => {
        if (error) {
          this.compileMsg = error
        } else {
          this.compileMsg = JSON.stringify(result)
          // console.log(obj)
          // if (result.length > 1) {
          // var func = result[0][0]
          // var abi = result[0][0]['info']
          // console.log(func)
          // console.log(abi)
          // this.compileMsg = func
          // } else {
            // this.compileMsg = 'compile error!!'
          // }
        }
      })
      console.log(compiled)
    }
  }
}
</script>

<style lang="stylus" acoped>
#editor
  // width 500px
  height 400px
</style>