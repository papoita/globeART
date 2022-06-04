import { useState, useEffect, useRef } from "react";
import "../App.css";
import { Transition } from "@headlessui/react";
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
    const ROTATION_SPEED = 280;
    setTimeout(() => {
      setShowModal(false);
      globeEl.current.pointOfView({ lat, lng, altitude: 2.5 }, ROTATION_SPEED);
    }, 200);
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
      <Transition
        show={showModal}
        enter="transform transition duration-[600ms]"
        enterFrom="scale-0"
        enterTo="scale-100"
        leave="ease-in duration-[300ms]"
        leaveFrom="scale-100"
        leaveTo="scale-0"
        className="fixed inset-0 h-screen z-40 flex justify-center items-center"
      >
        <Modal
          handleHideModal={handleHideModal}
          nft={nft}
          userLocation={location.city}
        />
      </Transition>
    </>
  );
}

export default Home;
