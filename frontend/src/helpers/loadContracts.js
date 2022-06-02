import { ethers } from "ethers";
import web3Handler from "./web3Handler";

import ShopAddress from "../contractsData/Shop-address.json";
import ShopABI from "../contractsData/Shop.json";
import NFTAddress from "../contractsData/GlobeArtNFT-address.json";
import NFTAbi from "../contractsData/GlobeArtNFT.json";

export default async function loadContracts() {
  let shop;
  let nft;

  const signer = await web3Handler();
  // Get deployed copies of contracts
  const shopContract = new ethers.Contract(
    ShopAddress.address,
    ShopABI.abi,
    signer
  );
  shop = shopContract;
  const nftContract = new ethers.Contract(
    NFTAddress.address,
    NFTAbi.abi,
    signer
  );
  nft = nftContract;

  return { nft, shop };
};
