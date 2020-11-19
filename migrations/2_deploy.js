const EtherGame = artifacts.require("EtherGame")
const Attack = artifacts.require("Attack")

module.exports = async function(deployer) {
  await deployer.deploy(EtherGame)
  await deployer.deploy(Attack)
}