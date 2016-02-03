var Web3 = require('web3')
var web3 = new Web3()

web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'))
// var coinbase = web3.eth.coinbase;
var version = web3.version.api
console.log(version)

module.exports = Web3
