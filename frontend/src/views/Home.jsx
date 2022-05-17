import { useState, useEffect } from 'react';

import "../App.css";
import Globe from "../components/Globe";
import Navbar from "../components/Navbar";
import Modal from "../components/Modal";

import { getMarkers } from '../helpers/getMarkers';

function Home({
}) {

  let markers;

  useEffect(() => {
    (async function asyncHandler() {
      markers = await getMarkers();
      console.log(markers);
    })();
  }, []);

  const [showModal, setShowModal] = useState(false);
  // const [nft, setNft] = useState({});

  const handleShowModal = (d) => {
    setShowModal(true);
  //   setNft(d)
  };
  const handleHideModal = () => {
    setShowModal(false);
  };
    
  return (
    <>
    <div className="bg-black w-full">
      <Navbar handleShowModal={ handleShowModal } />
      {markers && <Globe handleShowModal={ handleShowModal }/>}
      {showModal && < Modal handleHideModal={ handleHideModal }/>}
    </div>
    </>

  );
}

export default Home;
