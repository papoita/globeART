import { useState, useEffect } from 'react';

import "../App.css";
import Globe from "../components/Globe";
import Navbar from "../components/Navbar";
import Modal from "../components/Modal";

import { getMarkers } from '../helpers/getMarkers';

function Home() {

  const [showModal, setShowModal] = useState(false);
  // const [nft, setNft] = useState({});
  const [isLoaded, setIsLoaded ] = useState(false)
  
  let markers;

  useEffect(() => {
    (async function asyncHandler() {
      try {
        markers = await getMarkers();
        console.log("HOME- MARKERS", markers)
        if(markers)setIsLoaded(true)
      } catch(error) {
        console.log(error);
        setIsLoaded(false);
      }
    })();
  }, []);

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
      {<Globe handleShowModal={ handleShowModal } markers={ markers }/>}
      {showModal && < Modal handleHideModal={ handleHideModal }/>}
    </div>
    </>

  );
}

export default Home;
