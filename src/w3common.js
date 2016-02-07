/**
 * @param {web3} web3 instance
 * @param {account} account hash
 * @return {string} A BigNumber instance
 */
function getBalanceEther (web3, account) {
  return web3.eth.getBalance(account)
}

/**
 * @param {web3} web3 instance
 * @param {wei} A number or BigNumber instance
 * @return {string} A BigNumber instance
 */
function getBalanceEtherFromWei (web3, wei) {
  return web3.fromWei(wei, 'ether')
}

module.export = getBalanceEther
module.export = getBalanceEtherFromWei
