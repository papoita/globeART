import { useState, useEffect, useRef } from "react";

import "../App.css";
import Globe from "../components/globe";
import Modal from "../components/Modal";

import { getMarkers } from "../helpers/getMarkers";


function Home() {
  
  const [showModal, setShowModal] = useState(false);
  const [nft, setNft] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  const markers = useRef(null);

  useEffect(() => {
    (async function asyncHandler() {
      try {
        markers.current = await getMarkers();
        console.log("HOME - MARKERS", markers);
        if (markers) setIsLoaded(true);
      } catch (error) {
        console.log(error);
        setIsLoaded(false);
      }
    })();
  }, []);


  const handleShowModal = (d) => {
    setShowModal(true);
    setNft(d);
  };
  const handleHideModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {!isLoaded && (
        <div className="flex justify-center items-center h-screen">
          <img src="pig-spinner.png" className="animate-spin-slow"></img>
        </div>
      )}
  
      {isLoaded &&
        <Globe handleShowModal={handleShowModal} markers={markers.current}/>
      }
      {showModal && <Modal handleHideModal={handleHideModal} nft={nft} />}
    </>
  );
}

export default Home;
