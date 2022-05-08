import { useEffect, useState } from "react";

import Navigation from "./Navigation";

function Store({account, nft, store, web3Handler}) {
  const [items, setItems] = useState([])

  const loadStoreItems = async () => {
    //load all items
    const itemCount = await store.itemCount();
    let items = [];

    for(let i=0; i <= itemCount; i++) {
      const item = await store.items[i];
      // get uri url from nft contract
      const uri = await nft.tokenURI(item.tokenId);
      // use uri to fetch the nft metadata stored on ipfs 
      const response = await fetch(uri);
      const metadata = await response.json()
      // get item price
      const price = await store.getPrice(item.itemId)

      // Add item to items array
      items.push({
        price,
        itemId: item.itemId,
        seller: item.seller,
        collection: item.collection,
        name: metadata.name,
        country: metadata.country,
        image: metadata.image
      })
    }
    setItems(items);
  }
  useEffect(() => {
    loadStoreItems()
  }, [])
  return(
    <>
      <Navigation account={ account } web3Handler={ web3Handler } />
      {items.map((item) => {
        return <p> {item.name}</p>
      })}

    </>
  )
}

export default Store;
