const { assert, expect } = require("chai");
const { ethers } = require("hardhat");

describe("contract deployment", function () {
  let contract;
  beforeEach(async function () {
    const Contract = await ethers.getContractFactory("Token");
    contract = await Contract.deploy();
    await contract.deployed();
  });
  it("deploys with defined address", async function () {
    const address = await contract.address;
    assert.notEqual(address, 0x0);
    assert.notEqual(address, "");
    assert.notEqual(address, null);
    assert.notEqual(address, undefined);
  });
  it("deploys with correct uri", async function () {
    const uri = await contract.uri(1);
    assert.equal(uri, "http://URI/{id}.com");
  });
  it("deploys with correct name", async function () {
    const name = await contract.name();
    assert.equal(name, "Trotter");
  });
  it("deploys with correct symbol", async function () {
    const symbol = await contract.symbol();
    assert.equal(symbol, "TRTR");
  });
});
describe("Updating contract URI", function () {
  let contract;
  beforeEach(async function () {
    const Contract = await ethers.getContractFactory("Token");
    contract = await Contract.deploy();
    await contract.deployed();
  });
  it("allows contract deployer to update URI", async function () {
    const setURI = await contract.setURI("http://newURI.com");
    const newURI = await contract.uri(1);
    assert.equal(newURI, "http://newURI.com");
  });
});

describe("Minting NFTs", function () {
  let contract
  beforeEach(async function () {
    [deployer, addr1] = await ethers.getSigners();
    const Contract = await ethers.getContractFactory("Token");
    contract = await Contract.deploy();
    await contract.deployed();
  })
  it("should allow the contract deployer to mint a single token", async function () {
    await contract.connect(deployer).mint(deployer.address, 1, 1)
    expect(await contract.balanceOf(deployer.address, 1)).to.equal(1);
  });
  it("should allow the contract deployer to mint multiple (10) copies of a single token", async function () {
    await contract.connect(deployer).mint(deployer.address, 1, 10)
    expect(await contract.balanceOf(deployer.address, 1)).to.equal(10);
  });
  it("should allow the contract deployer to bach mint multiple tokens", async function () {
    await contract.connect(deployer).mintBatch(deployer.address, [1, 2, 3], [10, 5, 1])
    expect(await contract.balanceOf(deployer.address, 1)).to.equal(10);
    expect(await contract.balanceOf(deployer.address, 2)).to.equal(5);
    expect(await contract.balanceOf(deployer.address, 3)).to.equal(1);
  });
  it("should fail if address other than deployer attempts to mint a token", async function () {
    await expect(contract.connect(addr1).mint(addr1.address, 1, 1)).to.be.revertedWith("Ownable: caller is not the owner")
    expect(await contract.balanceOf(addr1.address, 1)).to.equal(0);
  });
});
