const { expect } = require("chai");
const { ethers, waffle } = require("hardhat");
const IERC20 = require("../build/contracts/interfaces/IERC20.sol/IERC20.json");

const { deployMockContract } = waffle;