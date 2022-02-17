require("@nomiclabs/hardhat-waffle");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/x_8yTxci_ZgxGTG2xTsOXG8LTWkF6Tg4',
      accounts: [
        'ec16036408bd691462090646f00313b09f1c31a88a28da9ac50ceb97af5cce3d'
      ]
    }
  }
};
