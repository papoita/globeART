import React from "react";



import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import NftItem from "../components/NftItem";


function Details({web3Handler,
  items,
  buyStoreItem,
  account,
  loading,}) {
  
  console.log( items);
  return (
    <>
      <Navigation   />
      <NftItem />


 
      <Footer />
    </>
  );
}


 

  

  

export default Details;
