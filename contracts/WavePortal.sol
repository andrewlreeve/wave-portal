// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract WavePortal {
  uint256 totalWaves;
  uint256 totalShakas;

  constructor() {
    console.log("Yo yo, I'm a smartish contract");
  }

  function wave() public {
    totalWaves += 1;
    console.log("%s waved!", msg.sender);
  }

  function shaka() public {
    totalWaves += 1;
    totalShakas += 1;
    console.log("%s shaka bruh!", msg.sender);
  }

  function getTotalWaves() public view returns (uint256) {
    console.log("We have %d total waves!", totalWaves);
    return totalWaves;
  }

  function getTotalShakas() public view returns (uint256) {
    console.log("We have %d total shakas!", totalShakas);
    return totalShakas;
  }
}