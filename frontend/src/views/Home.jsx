import { useState, useEffect, useRef } from "react";

import "../App.css";
import Globe from "../components/globe";
import Modal from "../components/Modal";

import useLoading from "../hooks/useLoading";
import useGeolocation from "../hooks/useGeolocation";
import { getMarkers } from "../helpers/getMarkers";
import { renderMatches } from "react-router-dom";

function Home() {
  const { location } = useGeolocation();
  const [showModal, setShowModal] = useState(false);
  const [nft, setNft] = useState({});

  const { isLoaded, setIsLoaded } = useLoading();

  const markers = useRef(null);

  useEffect(() => {
    (async function asyncHandler() {
      try {
        markers.current = await getMarkers();
        if (markers) setIsLoaded(true);
      } catch (error) {
        console.log(error);
        setIsLoaded(false);
      }
    })();
  }, [setIsLoaded]);

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
          <img
            src="pig-spinner.png"
            className="animate-spin-slow"
            alt="Trotter-logo-spinner"
          ></img>
        </div>
      )}

      {isLoaded && (
        <Globe handleShowModal={handleShowModal} markers={markers.current} userLocation={location} />
      )}
      {showModal && <Modal handleHideModal={handleHideModal} nft={nft} userLocation={location.city} />}
    </>
  );
}

export default Home;
