import { ethers } from "ethers";
import  axios  from "axios";
import loadContracts from "./loadContracts";

export default async function loadMarketplaceItems() {
  const { nft, marketplace } = await loadContracts();
  // load all items
  const items = [];
  try {
    const itemCount = await marketplace.callStatic.itemCount();

    for (let i = 1; i <= Number(itemCount.toString()); i++) {
      const item = await marketplace.callStatic.items(i);
      // get uri url from nft contract
      const uri = await nft.tokenURI(item.tokenId);
      // use uri to fetch the nft metadata stored on ipfs
      const response = await axios.get(uri);
      const metadata = await response.data;

      // Add item to items array
      items.push({
        price: ethers.utils.formatEther(item.price),
        itemId: item.itemId._hex,
        seller: item.seller,
        collection: item.collection,
        name: metadata.name,
        country: metadata.country,
        image: metadata.image,
      });
    };
    return items;

  } catch (error) {
    console.log("Error", error);
  }
};