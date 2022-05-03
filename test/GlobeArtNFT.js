const { assert, expect } = require("chai");
const { ethers } = require("hardhat");

describe("contract deployment", function () {
  let contract
  beforeEach(async function () {
    const Contract = await ethers.getContractFactory("GlobeArtNFT");
    contract = await Contract.deploy();
    await contract.deployed();
  })
  it("deploys with defined address", async function () {
    const address = await contract.address;
      assert.notEqual(address, 0x0);
      assert.notEqual(address, "");
      assert.notEqual(address, null);
      assert.notEqual(address, undefined);
    });
  it("deploys with correct name", async function () {
    const name = await contract.name();
      assert.equal(name, "globeArtNFT")
    });
  it("deploys with correct symbol", async function () {
    const symbol = await contract.symbol();
    assert.equal(symbol, "GANFT")
    });
});

describe("Minting NFTs", function () {
  let contract
  beforeEach(async function () {
    [deployer] = await ethers.getSigners();
    const Contract = await ethers.getContractFactory("GlobeArtNFT");
    contract = await Contract.deploy();
    await contract.deployed();
  })
  it("should track each minted NFT", async function () {
    //owner mints NFT
    await contract.connect(deployer).createGlobeArtNFT("Test URI", "Test Collection")
    expect(await contract.tokenCount()).to.equal(1);
    expect(await contract.balanceOf(deployer.address)).to.equal(1);
    expect(await contract.tokenURI(1)).to.equal("Test URI");
    expect(await contract.nftsCollections(1)).to.equal("Test Collection");
  })
})