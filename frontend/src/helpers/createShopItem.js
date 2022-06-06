import { ethers } from "ethers";
import loadContracts from "./loadContracts";

const toWei = (num) => ethers.utils.parseEther(num.toString());

export default async function createShopItem(id, collection, signer) {
  const { token, shop } = await loadContracts();
  const price = 0.002;
  const [deployer] = await ethers.getDefaultProvider

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
