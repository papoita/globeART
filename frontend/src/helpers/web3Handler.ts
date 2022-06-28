import { ethers } from "ethers";

export default async function web3Handler() {
  // Get provider from Metamask
  const provider = new ethers.providers.Web3Provider(window.ethereum as any);
  // Set signer
  const signer = provider.getSigner();

  return signer;
};