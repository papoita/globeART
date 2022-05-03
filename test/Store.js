const { assert, expect } = require("chai");
const { ethers } = require("hardhat");

const toWei = (num) => ethers.utils.parseEther(num.toString())
const fromWei = (num) => ethers.utils.formatEther(num)

describe("GlobeArtStore", function () {
  let nft;
  let Store;
  let store;
  let deployer;

  beforeEach(async function () {
    // Get the ContractFactories and Signers here.
    const NFT = await ethers.getContractFactory("GlobeArtNFT");
    Store = await ethers.getContractFactory("Store");
    [deployer, addr1] = await ethers.getSigners();

    // To deploy contracts
    nft = await NFT.deploy();
    await nft.deployed();
    store = await Store.deploy();
    await store.deployed();
  });

  describe("Making store items", function () {
    let price = 1
    beforeEach(async function () {
      // addr1 mints an nft
      await nft.connect(deployer).createGlobeArtNFT("Test URI")
      // addr1 approves store to spend nft
      await nft.connect(deployer).setApprovalForAll(store.address, true)
    })
    it("Should track newly created item, transfer NFT from seller to store and emit Offered event", async function () {
      // addr1 offers their nft at a price of 1 ether
      await expect(store.connect(deployer).makeItem(nft.address, 1 , "Test Collection", toWei(price)))
        .to.emit(store, "Offered")
        .withArgs(
          1,
          nft.address,
          1,
          toWei(price),
          deployer.address
        )
      // Owner of NFT should now be the store
      expect(await nft.ownerOf(1)).to.equal(store.address);
      // Item count should now equal 1
      expect(await store.itemCount()).to.equal(1)
      // Get item from items mapping then check fields to ensure they are correct
      const item = await store.items(1)
      expect(item.itemId).to.equal(1)
      expect(item.nft).to.equal(nft.address)
      expect(item.tokenId).to.equal(1)
      expect(item.collection).to.equal("Test Collection")
      expect(item.price).to.equal(toWei(price))
      expect(item.sold).to.equal(false)
    })
  });
});