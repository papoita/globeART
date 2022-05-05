import { useState } from "react"
import { ethers } from "ethers"

import StoreAddress from "../contractsData/Store-address.json"
import StoreAbi from "../contractsData/Store.json"
import NFTAddress from "../contractsData/GlobeArtNFT-address.json"
import NFTAbi from "../contractsData/GlobeArtNFT.json"

export default function useWeb3() {
  const [loading, setLoading] = useState(true)
  const [account, setAccount] = useState(null)
  const [nft, setNFT] = useState({})
  const [store, setStore] = useState({})

  const web3Handler = async () => {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    setAccount(accounts[0])
    // Get provider from Metamask
    const provider = new ethers.providers.Web3Provider(window.ethereum)

    // Set signer
    const signer = provider.getSigner()

    window.ethereum.on('chainChanged', (chainId) => {
      window.location.reload();
    })

    window.ethereum.on('accountsChanged', async function (accounts) {
      setAccount(accounts[0])
      await web3Handler()
    })
    loadContracts(signer)
  }
  const loadContracts = async (signer) => {
    // Get deployed copies of contracts
    const store = new ethers.Contract(StoreAddress.address, StoreAbi.abi, signer)
    setStore(store)
    const nft = new ethers.Contract(NFTAddress.address, NFTAbi.abi, signer)
    setNFT(nft)
    setLoading(false)
  }
  return {
    account, 
    store, 
    nft,
    web3Handler
  }
}