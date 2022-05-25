import { ethers } from 'ethers';
import loadContracts from './loadContracts';

export default async function buyStoreItem(item) {
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const price = ethers.utils.parseEther(item.price);

    const store = await loadContracts(signer);
    await (await store.purchaseItem(item.itemId, { value: price })).wait();
  } catch (error) {
    console.log("Error", error);
  }
};