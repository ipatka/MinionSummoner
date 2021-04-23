
require("hardhat/config");
require("@nomiclabs/hardhat-ganache");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");
require("solidity-coverage");


module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.7.5"
      },
      {
        version: "0.5.3",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000
          }
        }
      }
    ]
  }, 
  paths: {
    artifacts: "./build",
  },
  networks: {
    ganache: {
      url: "http://127.0.0.1:8555",
      defaultBalanceEther: 1000,
    },
  },
};
