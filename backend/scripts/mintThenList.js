const hre = require("hardhat");
const ethers = hre.ethers;

const nftAddress = require("../../frontend/src/contractsData/GlobeArtNFT-address.json");
const NFT = require("../../frontend/src/contractsData/GlobeArtNFT.json");
const marketplaceAddress = require("../../frontend/src/contractsData/Marketplace-address.json");
const Marketplace = require("../../frontend/src/contractsData/Marketplace.json");

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
  const marketplace = new ethers.Contract(marketplaceAddress.address, Marketplace.abi, deployer);

  const price = 1;
  // mint nft
  await (await nft.connect(deployer).createGlobeArtNFT(uri)).wait();
  // get tokenId of new nft
  const id = await nft.tokenCount();
  // approve marketplace to spend nft
  await (
    await nft.connect(deployer).setApprovalForAll(marketplace.address, true)
  ).wait();
  // add nft to marketplace
  await (
    await marketplace
      .connect(deployer)
      .makeItem(nft.address, id, collection, toWei(price))
  ).wait();
  const countAfter = await nft.tokenCount();
  const itemId = await marketplace.itemCount();
  const items = await marketplace.items(itemId);
  const owner = await nft.ownerOf(id);
  const newItem = await marketplace.items(itemId);
  console.log("New Item:", newItem.collection);
  console.log("Marketplace item count:", itemId);
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
