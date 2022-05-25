import { ethers } from "ethers";

export default async function web3Handler() {
  // Get provider from Metamask
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  // Set signer
  const signer = provider.getSigner();

  window.ethereum.on("chainChanged", (chainId) => {
    window.location.reload();
  });

  return signer;
};