const hre = require("hardhat");
const ethers = hre.ethers;

const nftAddress = require("../../frontend/src/contractsData/GlobeArtNFT-address.json");
const NFT = require("../../frontend/src/contractsData/GlobeArtNFT.json");
const shopAddress = require("../../frontend/src/contractsData/Shop-address.json");
const Shop = require("../../frontend/src/contractsData/Shop.json");

const data = [
  {
    URI: "athens.json",
    collection: "Athens",
  },
  {
    URI: "berlin.json",
    collection: "Berlin",
  },
  {
    URI: "cairo.json",
    collection: "Cairo",
  },
  {
    URI: "honolulu.json",
    collection: "Honolulu",
  },
  {
    URI: "lisbon.json",
    collection: "Lisbon",
  },
  {
    URI: "new_york.json",
    collection: "New York",
  },
  {
    URI: "ottawa.json",
    collection: "Ottawa",
  },
  {
    URI: "paris.json",
    collection: "Paris",
  },
  {
    URI: "toronto.json",
    collection: "Toronto",
  },
  {
    URI: "tokyo.json",
    collection: "Tokyo",
  },
  {
    URI: "vancouver.json",
    collection: "Vancouver",
  },
];

async function mintThenList(URI, collection) {
  const uri = `https://gateway.pinata.cloud/ipfs/QmRE7CyTgX7WNgMY6ZiouyecoadTQNwXw5HV7ePggTBCyW/${URI}`;
  const toWei = (num) => ethers.utils.parseEther(num.toString());

  [deployer] = await ethers.getSigners();

  const nft = new ethers.Contract(nftAddress.address, NFT.abi, deployer);
  const shop = new ethers.Contract(shopAddress.address, Shop.abi, deployer);

  const price = 0.002;

  // mint nft
  await (await nft.connect(deployer).createGlobeArtNFT(uri)).wait();
  // get tokenId of new nft
  const id = await nft.tokenCount();
  // approve shop to spend nft
  await (
    await nft.connect(deployer).setApprovalForAll(shop.address, true)
  ).wait();
  // add nft to shop
  await (
    await shop
      .connect(deployer)
      .makeItem(nft.address, id, collection, toWei(price))
  ).wait();
  const countAfter = await nft.tokenCount();
  const itemId = await shop.itemCount();
  const items = await shop.items(itemId);
  const owner = await nft.ownerOf(id);
  const newItem = await shop.items(itemId);
  console.log("New Item:", newItem.collection);
  console.log("Shop item count:", itemId);
}

async function main(data) {
  for (const d of data) {
    await mintThenList(d.URI, d.collection);
  }
}

main(data)
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
