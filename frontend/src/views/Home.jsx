import { useState, useEffect, useRef } from "react";
import "../App.css";
import Globe from "../components/globe";
import Modal from "../components/Modal";

import useLoading from "../hooks/useLoading";
import useGeolocation from "../hooks/useGeolocation";
import { getMarkers } from "../helpers/getMarkers";

function Home() {
  const globeEl = useRef();
  const { location } = useGeolocation();
  const [showModal, setShowModal] = useState(false);
  const [nft, setNft] = useState({});

  const { isLoaded, setIsLoaded } = useLoading();
  const markers = useRef(null);

  useEffect(() => {
    (async function asyncHandler() {
      try {
        markers.current = await getMarkers();
        if (markers && location?.coordinates?.lat) setIsLoaded(true);
      } catch (error) {
        console.log(error);
        setIsLoaded(false);
      }
    })();
  }, [isLoaded, location]);

  const handleShowModal = (d) => {
    setShowModal(true);
    setNft(d);
  };

  const handleHideModal = () => {
    const { lat, lng } = globeEl.current.pointOfView();
    const ROTATION_SPEED = 250;
    setShowModal(false);
    globeEl.current.pointOfView({ lat, lng, altitude: 2.5 }, ROTATION_SPEED);
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
        <Globe
          globeEl={globeEl}
          handleShowModal={handleShowModal}
          markers={markers.current}
          userLocation={location}
        />
      )}

      {showModal && (
        <Modal
          handleHideModal={handleHideModal}
          nft={nft}
          userLocation={location.city}
        />
      )}
    </>
  );
}

export default Home;
