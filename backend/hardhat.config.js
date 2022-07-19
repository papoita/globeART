require('dotenv').config();
require('@nomiclabs/hardhat-waffle');
require("@nomiclabs/hardhat-etherscan");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: "matic",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    matic: {
      url: process.env.INFURA_MUMBAI_API_URL,
      accounts: [process.env.PRIVATE_KEY]
    },
    rinkeby: {
      url: process.env.INFURA_RINKEBY_API_URL,
      accounts: [process.env.PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: {
      polygonMumbai: `${process.env.POLYGONSCAN_API_KEY}`
    }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
};
