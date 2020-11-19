# unexpected-ether
Trying to understand Unexpected Ether attack, taken from Mastering Ethereum by Andreas Antonopoulos.

`EtherGame.sol` is the vulnerable contract and `Attack.sol` is the malicious contract.

Using Ganache for local blockchain and Truffle for testing.

To spin up a local blockchain use `npx ganache-cli --deterministic`

Deploy the contracts to local blockchain with `npx ganache-cli --deterministic`

`scripts/index.js` performs the attack by interacting with both contracts, to run the script run `npx truffle exec --network development ./scripts/index.js`
