import React from 'react';

import "../App.css";
import Globe from "../components/globe";
import Navbar from "../components/Navbar";
import Modal from "../components/Modal";

function Home({
  account,
  web3Handler,
  location,
  connect,
  disconnect,
  isActive,
}) {

  // console.log(location);

  // const [showModal, setShowModal] = useState(false);
  // const [nft, setNft] = useState({});

  // const handleShowModal = (d) => {
  //   setShowModal(true);
  //   setNft(d)
  // };

    
  return (
    <>
    <div className="bg-black">
      < Navbar />
      < Globe className=""/>
      < Modal />
    </div>
    </>

  );
}

export default Home;
