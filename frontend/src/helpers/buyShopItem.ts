import { ethers } from "ethers";
import loadContracts from "./loadContracts";

interface Item {
  itemId: number;
  tokenId: number;
  collection: string;
  price: string;
  seller: string;
  sold: boolean;
}

export default async function buyShopItem(item: Item) {
  let receipt = null;

  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum as any);
    const price = ethers.utils.parseEther(item.price);

    const contracts = await loadContracts();
    const shop = contracts.shop;
    const purchaseTx = await shop.purchaseItem(item.itemId, {
      value: price,
    });
    
    const tx = await provider.waitForTransaction(purchaseTx.hash);

    while (receipt === null) {
      receipt = await provider.getTransactionReceipt(
        tx.transactionHash
      );
      
      if (receipt === null) {
        continue;
      }

      console.log('success', receipt);
    }
  } catch (error) {
    console.log("Error", error);
    return error;
  }
  return receipt;
}
