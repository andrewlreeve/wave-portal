import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  const accountBalance = await deployer.getBalance();

  console.log("deploying contracts with account: ", deployer.address);
  console.log("Account balance", accountBalance.toString());

  const Token = await ethers.getContractFactory("WavePortal");
  const portal = await Token.deploy({
    value: ethers.utils.parseEther("0.001"),
  });

  await portal.deployed();

  console.log("WavePortal address", portal.address);
}

async function runMain() {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

runMain();
