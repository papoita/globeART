import { ethers } from "ethers";
import loadContracts from "./loadContracts";

export default async function buyMarketplaceItem(item) {
  let receipt = null;

  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const price = ethers.utils.parseEther(item.price);

    const contracts = await loadContracts(signer);
    const marketplace = contracts.marketplace;
    const purchaseTx = await marketplace.purchaseItem(item.itemId, {
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
