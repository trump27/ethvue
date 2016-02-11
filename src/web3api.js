var Web3 = require('web3')

// module.exports = Web3

exports.web3 = function () {
  var web3 = new Web3()
  web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'))
  if (!web3.isConnected()) {
    alert('ノードに接続できません')
  }
  return web3
}
