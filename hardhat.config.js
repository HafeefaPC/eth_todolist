/**
* @type import('hardhat/config').HardhatUserConfig
*/

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const { API_URL, PRIVATE_KEY } = process.env;
require("@nomiclabs/hardhat-waffle");


module.exports = {
  solidity: "0.8.11",
  defaultNetwork: "volta",
  networks: {
    hardhat: {},
    volta: {
      url: "https://volta-rpc.energyweb.org",
      accounts: [`0x0faa7ff8c8623e46ea6e94e140c79e680e5a7b3e3dbb30877a3a13da12edc0ec`],
      gas: 210000000,
      gasPrice: 700000000000,
    }
  },
}