// We require the Hardhat Runtime Environment explicitly here. This is optional 
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile 
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const Minion = await hre.ethers.getContractFactory("Minion");
  const minionTemplate = await Minion.deploy();
  await minionTemplate.deployed();
  console.log("Template", minion.address);

  const MinionFactory = await hre.ethers.getContractFactory("MinionFactory");
  const minionFactory = await MinionFactory.deploy(minion.address);
  await minionFactory.deployed();
  console.log("Factory", minionFactory.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
