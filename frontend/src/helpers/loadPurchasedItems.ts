import { ethers } from "ethers";
import axios  from "axios";
import loadContracts from "./loadContracts";

export default async function loadPurchasedItems(account: string | undefined) {

  const { shop, token } = await loadContracts();

  try {
    // Fetch purchased items from shop by quering Bought events with the buyer set as the user acct
    const filter = shop.filters.Bought(
      null,
      null,
      null,
      null,
      null,
      account
    );
    const results = await shop.queryFilter(filter);
    //Fetch metadata of each token and add that to purchasedItems object.
    const purchasedItems = await Promise.all(
      results.map(async (d) => {
        // fetch arguments from each result
        const i = d.args;
        // get uri url from token contract
        const uri = await token.uri(i?.tokenId);
        // use uri to fetch the token metadata stored on ipfs
        const response = await axios.get(uri);
        const metadata = await response.data;

        let purchasedItem = {
          price: ethers.utils.formatEther(i?.price),
          itemId: i?.itemId,
          name: metadata?.name,
          description: metadata?.description,
          image: metadata?.image,
        };
        return purchasedItem;
      })
    );
    return purchasedItems;
  } catch (error) {
    console.log("Error", error);
  }
};