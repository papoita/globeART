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

  const centerOnLocation = () => {
    const MAP_CENTER = {
      lat: location?.coordinates?.lat,
      lng: location?.coordinates?.lon,
      altitude: 2.5,
    };
    const ROTATION_SPEED = 500;
    globeEl.current.pointOfView(MAP_CENTER, ROTATION_SPEED);
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
        <>
          <Globe
            globeEl={globeEl}
            handleShowModal={handleShowModal}
            markers={markers.current}
            userLocation={location}
          />
          <button
            class="btn btn-round absolute bottom-0 right-0 m-3"
            onClick={centerOnLocation}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </button>
        </>
      )}
      <Transition show={showModal}>
        <Transition.Child
          enter="transform transition duration-[600ms]"
          enterFrom="scale-0"
          enterTo="scale-100"
          leave="ease-in duration-[300ms]"
          leaveFrom="scale-100"
          leaveTo="scale-0"
          className="fixed inset-0 h-screen z-50 flex justify-center items-center"
          onClick={() => {
            handleHideModal();
          }}
        >
          <div className="flex flex-col justify-center items-center">
            <button
              className="btn btn-sm btn-circle self-end"
              onClick={handleHideModal}
            >
              x
            </button>

            <div
              className="modal-content"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <Modal
                handleHideModal={handleHideModal}
                nft={nft}
                userLocation={location.city}
              />
            </div>
          </div>
        </Transition.Child>
        <Transition.Child
          enter="transition-opacity ease-linear duration-[200ms]"
          enterFrom="opacity-0"
          enterTo="opacity-50"
          leave="transition-opacity ease-linear duration-[200ms]"
          leaveFrom="opacity-50"
          leaveTo="opacity-0"
          className="fixed top-0 right-0 bottom-0 left-0 z-40 bg-black"
        ></Transition.Child>
      </Transition>
    </>
  );
}

export default Home;
