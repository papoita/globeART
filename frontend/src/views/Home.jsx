import { useState } from 'react';

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

  const [showModal, setShowModal] = useState(false);
  const [nft, setNft] = useState({});

  const handleShowModal = (d) => {
    setShowModal(true);
    setNft(d)
  };
  const handleHideModal = () => {
    setShowModal(false);
  };
    
  return (
    <>
      < Globe handleShowModal={ handleShowModal } />
      {showModal && < Modal handleHideModal={ handleHideModal } nft={ nft }/>}
    </>

  );
}

export default Home;
