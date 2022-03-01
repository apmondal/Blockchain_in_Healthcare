const hre = require('hardhat');

async function main() {
  const Hospitals = await hre.ethers.getContractFactory('Hospitals');
  const hospitals = await Hospitals.deploy();

  await hospitals.deployed();

  console.log('Hospitals deployed to:', hospitals.address);
}

// main()
//   .then(() => process.exit(0))
//   .catch((error) => {
//     console.error(error);
//     process.exit(1);
//   });

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
