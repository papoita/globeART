const { assert } = require("chai");
const { ethers } = require("hardhat");

describe("deployment", function () {
 
  it("deploys successfully ", async function () {
    const NFT = await ethers.getContractFactory("GlobeArtNFT");
    const nft = await NFT.deploy();
    await nft.deployed();
    const address = await nft.address;
      assert.notEqual(address, 0x0);
      assert.notEqual(address, "");
      assert.notEqual(address, null);
      assert.notEqual(address, undefined);
  });
});