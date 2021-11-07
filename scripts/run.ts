// Typescript requires the explicit import of HRE
import { ethers } from "hardhat";

async function main() {
  const [owner, randomPerson] = await ethers.getSigners();
  // Compiles the contract
  const waveContractFactory = await ethers.getContractFactory("WavePortal");
  // Deploys the contract
  const waveContract = await waveContractFactory.deploy();
  // Waits for the contract to be deployed
  await waveContract.deployed();

  console.log("Contract deployed to:", waveContract.address);
  console.log("Contract deployed by:", owner.address);

  let waveCount;
  let shakaCount;
  waveCount = await waveContract.getTotalWaves();

  let waveTxn = await waveContract.wave();
  await waveTxn.wait();

  waveCount = await waveContract.getTotalWaves();

  waveTxn = await waveContract.connect(randomPerson).wave();
  await waveTxn.wait();

  waveCount = await waveContract.getTotalWaves();

  let shakaTxn = await waveContract.connect(randomPerson).shaka();
  waveCount = await waveContract.getTotalWaves();
  shakaCount = await waveContract.getTotalShakas();
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
