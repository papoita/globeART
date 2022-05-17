import { ethers } from "ethers";

export const web3Handler = async () => {
  // Get provider from Metamask
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  // Set signer
  const signer = provider.getSigner();

  window.ethereum.on("chainChanged", (chainId) => {
    window.location.reload();
  });

  return signer;
};