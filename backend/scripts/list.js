const hre = require("hardhat");
const ethers = hre.ethers;

const tokenAddress = require("../../frontend/src/contractsData/Token-address.json");
const Token = require("../../frontend/src/contractsData/Token.json");
const shopAddress = require("../../frontend/src/contractsData/Shop-address.json");
const Shop = require("../../frontend/src/contractsData/Shop.json");

const data = [
  {
    id: 1,
    collection: "Athens",
  },
  {
    id: 2,
    collection: "Berlin",
  },
  {
    id: 3,
    collection: "Cairo",
  },
];

async function list(id, collection) {
  const toWei = (num) => ethers.utils.parseEther(num.toString());

  [deployer] = await ethers.getSigners();

  const token = new ethers.Contract(tokenAddress.address, Token.abi, deployer);
  const shop = new ethers.Contract(shopAddress.address, Shop.abi, deployer);

  const price = 0.002;

  // approve shop to spend nft
  await (
    await token.connect(deployer).setApprovalForAll(shop.address, true)
  ).wait();
  // add nft to shop
  await (
    await shop
      .connect(deployer)
      .makeItem(token.address, id, collection, toWei(price))
  ).wait();
  const itemId = await shop.itemCount();
  const newItem = await shop.items(itemId);
  console.log("New Item:", newItem.collection);
  console.log("Shop item count:", itemId);
}

async function main(data) {
  for (const d of data) {
    await list(d.id, d.collection);
  }
}

main(data)
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
