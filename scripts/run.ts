// Typescript requires the explicit import of HRE
import { ethers } from "hardhat";

async function main() {
  // Compiles the contract
  const waveContractFactory = await ethers.getContractFactory("WavePortal");
  // Deploys the contract
  const waveContract = await waveContractFactory.deploy();
  // Waits for the contract to be deployed
  await waveContract.deployed();

  console.log("Contract deployed to:", waveContract.address);

  const waveCount = await waveContract.getTotalWaves();
  console.log("Wave count: ", waveCount.toNumber());

  // Sending a few waves
  let waveTxn = await waveContract.wave("A message!");
  await waveTxn.wait(); // Wait for the transaction to be mined

  const [_, randomPerson] = await ethers.getSigners();
  waveTxn = await waveContract.connect(randomPerson).wave("Anothor Message");
  await waveTxn.wait(); // Wait for the transaction to be mined

  const allWaves = await waveContract.getAllWaves();
  console.log(allWaves);
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
