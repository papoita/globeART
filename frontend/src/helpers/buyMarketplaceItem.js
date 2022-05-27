import { ethers } from 'ethers';
import loadContracts from './loadContracts';

export default async function buyMarketplaceItem(item) {
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const price = ethers.utils.parseEther(item.price);

    const contracts = await loadContracts(signer);
    const marketplace = contracts.marketplace
    await (await marketplace.purchaseItem(item.itemId, { value: price })).wait();
  } catch (error) {
    console.log("Error", error);
  }
};