import { ethers } from "ethers";
import { web3Handler } from "./web3Handler";

import StoreAddress from "../contractsData/Store-address.json";
import StoreAbi from "../contractsData/Store.json";
import NFTAddress from "../contractsData/GlobeArtNFT-address.json";
import NFTAbi from "../contractsData/GlobeArtNFT.json";

export const loadContracts = async () => {
  let store;
  let nft;

  const signer = await web3Handler();
  // Get deployed copies of contracts
  const storeContract = new ethers.Contract(
    StoreAddress.address,
    StoreAbi.abi,
    signer
  );
  store = storeContract;
  const nftContract = new ethers.Contract(
    NFTAddress.address,
    NFTAbi.abi,
    signer
  );
  nft = nftContract;

  return { nft, store };
};
