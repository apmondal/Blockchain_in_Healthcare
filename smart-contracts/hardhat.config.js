//https://eth-ropsten.alchemyapi.io/v2/A5l8NyNc0vuKZ9eCoHj5AaxE77KLXFqR
require('@nomiclabs/hardhat-waffle');

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task('accounts', 'Prints the list of accounts', async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/A5l8NyNc0vuKZ9eCoHj5AaxE77KLXFqR',
      accounts: [
        '1385f17573947f77aa5a0012e1bc170e0a6285f776ede2bd06c183d7d4ae1c3e',
      ],
    },
  },
};
