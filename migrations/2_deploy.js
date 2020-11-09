const EtherGame = artifacts.require("EtherGame")

module.exports = async function(deployer) {
  await deployer.deploy(EtherGame)
}