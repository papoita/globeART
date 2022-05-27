const { assert, expect } = require("chai");
const { accepts } = require("express/lib/request");
const { ethers } = require("hardhat");

const toWei = (num) => ethers.utils.parseEther(num.toString())
const fromWei = (num) => ethers.utils.formatEther(num)

describe("Marketplace", function () {
  let nft;
  let Marketplace;
  let marketplace;
  const URI = "Test URI";
  const collection = "Test Collection"

  beforeEach(async function () {
    // Get the ContractFactories and Signers here.
    const NFT = await ethers.getContractFactory("GlobeArtNFT");
    Marketplace = await ethers.getContractFactory("Marketplace");
    [deployer, addr1, addr2, ...addrs] = await ethers.getSigners();
    

    // To deploy contracts
    nft = await NFT.deploy();
    await nft.deployed();
    marketplace = await Marketplace.deploy();
    await marketplace.deployed();
  });

  describe("Making marketplace items", function () {
    let price = 1;
    beforeEach(async function () {
      // deployer mints an nft
      await nft.connect(deployer).createGlobeArtNFT(URI)
      // deployer approves marketplace to spend nft
      await nft.connect(deployer).setApprovalForAll(marketplace.address, true)
    })
    it("should track newly created item, transfer NFT from seller to marketplace and emit Offered event", async function () {
      // deployer offers their nft at a price of 1 ether
      await expect(marketplace.connect(deployer).makeItem(nft.address, 1 , collection, toWei(price)))
        .to.emit(marketplace, "Offered")
        .withArgs(
          1,
          nft.address,
          1,
          toWei(price),
          deployer.address
        )
      // Owner of NFT should now be the marketplace
      expect(await nft.ownerOf(1)).to.equal(marketplace.address);
      // Item count should now equal 1
      expect(await marketplace.itemCount()).to.equal(1)
      // Get item from items mapping then check fields to ensure they are correct
      const item = await marketplace.items(1)
      expect(item.itemId).to.equal(1)
      expect(item.nft).to.equal(nft.address)
      expect(item.tokenId).to.equal(1)
      expect(item.collection).to.equal(collection)
      expect(item.price).to.equal(toWei(price))
      expect(item.sold).to.equal(false)
    })
    it("should fail if called by account that is not the deployer", async function () {
      await expect(
        marketplace.connect(addr1).makeItem(nft.address, 1, collection, price )).to.be.revertedWith("Ownable: caller is not the owner");
    });
    it("should fail if price is set to zero", async function () {
      await expect(
        marketplace.connect(deployer).makeItem(nft.address, 1, collection, 0 )).to.be.revertedWith("Price must be greater than zero");
    });
  });

  describe("Purchasing marketplace items", function () {
    let price = 2;
    let priceInWei;
    beforeEach(async function () {
      // deployer mints an nft
      await nft.connect(deployer).createGlobeArtNFT(URI)
      // deployer approves marketplace to spend tokens
      await nft.connect(deployer).setApprovalForAll(marketplace.address, true)
      // deployer makes their nft a marketplace item.
      await marketplace.connect(deployer).makeItem(nft.address, 1 , collection, toWei(price))
    })
    it("Should update item as sold, pay seller, transfer NFT to buyer, charge fees and emit a Bought event", async function () {
      const sellerInitalEthBal = await deployer.getBalance()
      // fetch items total price (market fees + item price)
      priceInWei = await marketplace.getPrice(1);
      // addr 2 purchases item.
      await expect(marketplace.connect(addr1).purchaseItem(1, {value: priceInWei}))
      .to.emit(marketplace, "Bought")
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
      expect((await marketplace.items(1)).sold).to.equal(true)
      // Seller should receive payment for the price of the NFT sold.
      expect(+fromWei(sellerFinalEthBal)).to.equal(+price + +fromWei(sellerInitalEthBal))
      // The buyer should now own the nft
      expect(await nft.ownerOf(1)).to.equal(addr1.address);
    })
    it("Should fail for invalid item ids, sold items and when not enough ether is paid", async function () {
      // fails for invalid item ids
      await expect(
        marketplace.connect(addr1).purchaseItem(2, {value: priceInWei})
      ).to.be.revertedWith("item doesn't exist");
      await expect(
        marketplace.connect(addr1).purchaseItem(0, {value: priceInWei})
      ).to.be.revertedWith("item doesn't exist");
      // Fails when not enough ether is paid with the transaction. 
      await expect(
        marketplace.connect(addr1).purchaseItem(1, {value: toWei(1)})
      ).to.be.revertedWith("not enough ether to cover item price"); 
      // addr1 purchases item 1
      await marketplace.connect(addr1).purchaseItem(1, {value: priceInWei})
      // addr3 tries purchasing item 1 after its been sold 
      const addr2 = addrs[0]
      await expect(
        marketplace.connect(addr2).purchaseItem(1, {value: priceInWei})
      ).to.be.revertedWith("item already sold");
    });
  })
});