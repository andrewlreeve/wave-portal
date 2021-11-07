import { ethers } from "hardhat";

async function main() {
  // Compiles the contract
  const waveContractFactory = await ethers.getContractFactory("WavePortal");
  // Deploys the contract
  const waveContract = await waveContractFactory.deploy();
  // Waits for the contract to be deployed
  await waveContract.deployed();
  console.log("Contract deployed to:", waveContract.address);
}

async function runMain() {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

runMain();
