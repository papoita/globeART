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
    [deployer, addr1] = await ethers.getSigners();
    const Contract = await ethers.getContractFactory("GlobeArtNFT");
    contract = await Contract.deploy();
    await contract.deployed();
  })
  it("should allow the contract deployer to mint an NFT", async function () {
    await contract.connect(deployer).createGlobeArtNFT("Test URI")
    expect(await contract.tokenCount()).to.equal(1);
    expect(await contract.balanceOf(deployer.address)).to.equal(1);
  });
  it("should fail if address other than deployer attempts to mint an NFT", async function () {
    await expect(contract.connect(addr1).createGlobeArtNFT("Test URI")).to.be.revertedWith("Ownable: caller is not the owner")
    expect(await contract.tokenCount()).to.equal(0);
    
  });
  it("should track each minted NFT's URI", async function () {
    //owner mints NFT
    await contract.connect(deployer).createGlobeArtNFT("Test URI")
    expect(await contract.tokenURI(1)).to.equal("Test URI");
  });
});