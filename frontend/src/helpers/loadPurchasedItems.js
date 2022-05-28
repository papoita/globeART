import { ethers } from "ethers";
import axios  from "axios";
import loadContracts from "./loadContracts";

export default async function loadPurchasedItems(account) {

  const { marketplace, nft } = await loadContracts();

  try {
    // Fetch purchased items from marketplace by quering Bought events with the buyer set as the user acct
    const filter = marketplace.filters.Bought(
      null,
      null,
      null,
      null,
      null,
      account
    );
    const results = await marketplace.queryFilter(filter);
    //Fetch metadata of each nft and add that to purchasedItems object.
    const purchasedItems = await Promise.all(
      results.map(async (i) => {
        // fetch arguments from each result
        i = i.args;
        // get uri url from nft contract
        const uri = await nft.tokenURI(i.tokenId);
        // use uri to fetch the nft metadata stored on ipfs
        const response = await axios.get(uri);
        const metadata = await response.data;

        let purchasedItem = {
          price: ethers.utils.formatEther(i.price),
          itemId: i.itemId,
          name: metadata.name,
          description: metadata.description,
          image: metadata.image,
        };
        return purchasedItem;
      })
    );
    return purchasedItems;
  } catch (error) {
    console.log("Error", error);
  }
};