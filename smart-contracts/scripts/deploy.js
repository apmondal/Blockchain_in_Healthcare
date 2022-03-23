const hardHat = require("hardhat");

async function deployContract(contract) {
  const Contract = await hardHat.ethers.getContractFactory(contract);
  const c = await Contract.deploy();

  await c.deployed();

  console.log(`${contract} deployed to:`, c.address);
}

async function deployAllContracts(contracts) {
  contracts.forEach(async (contract) => {
    await deployContract(contract);
  });
}
const contracts = ["Hospitals", "Doctors", "Patient"];
async function main() {
  await deployAllContracts(contracts);
}

async function run() {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}
run();
