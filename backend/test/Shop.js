const { assert, expect } = require("chai");
const { accepts } = require("express/lib/request");
const { ethers } = require("hardhat");

const toWei = (num) => ethers.utils.parseEther(num.toString())
const fromWei = (num) => ethers.utils.formatEther(num)

describe("Shop", function () {
  let nft;
  let Shop;
  let shop;
  const URI = "Test URI";
  const collection = "Test Collection"

  beforeEach(async function () {
    // Get the ContractFactories and Signers here.
    const NFT = await ethers.getContractFactory("GlobeArtNFT");
    Shop = await ethers.getContractFactory("Shop");
    [deployer, addr1, addr2, ...addrs] = await ethers.getSigners();
    

    // To deploy contracts
    nft = await NFT.deploy();
    await nft.deployed();
    shop = await Shop.deploy();
    await shop.deployed();
  });

  describe("Making shop items", function () {
    let price = 1;
    beforeEach(async function () {
      // deployer mints an nft
      await nft.connect(deployer).createGlobeArtNFT(URI)
      // deployer approves shop to spend nft
      await nft.connect(deployer).setApprovalForAll(shop.address, true)
    })
    it("should track newly created item, transfer NFT from seller to shop and emit Offered event", async function () {
      // deployer offers their nft at a price of 1 ether
      await expect(shop.connect(deployer).makeItem(nft.address, 1 , collection, toWei(price)))
        .to.emit(shop, "Offered")
        .withArgs(
          1,
          nft.address,
          1,
          toWei(price),
          deployer.address
        )
      // Owner of NFT should now be the shop
      expect(await nft.ownerOf(1)).to.equal(shop.address);
      // Item count should now equal 1
      expect(await shop.itemCount()).to.equal(1)
      // Get item from items mapping then check fields to ensure they are correct
      const item = await shop.items(1)
      expect(item.itemId).to.equal(1)
      expect(item.nft).to.equal(nft.address)
      expect(item.tokenId).to.equal(1)
      expect(item.collection).to.equal(collection)
      expect(item.price).to.equal(toWei(price))
      expect(item.sold).to.equal(false)
    })
    it("should fail if called by account that is not the deployer", async function () {
      await expect(
        shop.connect(addr1).makeItem(nft.address, 1, collection, price )).to.be.revertedWith("Ownable: caller is not the owner");
    });
    it("should fail if price is set to zero", async function () {
      await expect(
        shop.connect(deployer).makeItem(nft.address, 1, collection, 0 )).to.be.revertedWith("Price must be greater than zero");
    });
  });

  describe("Purchasing shop items", function () {
    let price = 2;
    let priceInWei;
    beforeEach(async function () {
      // deployer mints an nft
      await nft.connect(deployer).createGlobeArtNFT(URI)
      // deployer approves shop to spend tokens
      await nft.connect(deployer).setApprovalForAll(shop.address, true)
      // deployer makes their nft a shop item.
      await shop.connect(deployer).makeItem(nft.address, 1 , collection, toWei(price))
    })
    it("Should update item as sold, pay seller, transfer NFT to buyer, charge fees and emit a Bought event", async function () {
      const sellerInitalEthBal = await deployer.getBalance()
      priceInWei = await shop.getPrice(1);
      // addr 2 purchases item.
      await expect(shop.connect(addr1).purchaseItem(1, {value: priceInWei}))
      .to.emit(shop, "Bought")
        .withArgs(
          1,
          nft.address,
          1,
          toWei(price),
          deployer.address,
          addr1.address
        )
      const sellerFinalEthBal = await deployer.getBalance()
      // Item should be marked as sold
      expect((await shop.items(1)).sold).to.equal(true)
      // Seller should receive payment for the price of the NFT sold.
      expect(+fromWei(sellerFinalEthBal)).to.equal(+price + +fromWei(sellerInitalEthBal))
      // The buyer should now own the nft
      expect(await nft.ownerOf(1)).to.equal(addr1.address);
    })
    it("Should fail for invalid item ids, sold items and when not enough ether is paid", async function () {
      // fails for invalid item ids
      await expect(
        shop.connect(addr1).purchaseItem(2, {value: priceInWei})
      ).to.be.revertedWith("item doesn't exist");
      await expect(
        shop.connect(addr1).purchaseItem(0, {value: priceInWei})
      ).to.be.revertedWith("item doesn't exist");
      // Fails when not enough ether is paid with the transaction. 
      await expect(
        shop.connect(addr1).purchaseItem(1, {value: toWei(1)})
      ).to.be.revertedWith("not enough ether to cover item price"); 
      // addr1 purchases item 1
      await shop.connect(addr1).purchaseItem(1, {value: priceInWei})
      // addr3 tries purchasing item 1 after its been sold 
      const addr2 = addrs[0]
      await expect(
        shop.connect(addr2).purchaseItem(1, {value: priceInWei})
      ).to.be.revertedWith("item already sold");
    });
  })
});