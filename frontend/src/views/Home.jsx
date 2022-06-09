import { useState, useEffect, useRef } from "react";
import "../App.css";
import { Transition } from "@headlessui/react";
import Globe from "../components/globe";
import Modal from "../components/Modal";
import TransactionProgress from "../components/TransactionProgress";

import useLoading from "../hooks/useLoading";
import { getMarkers } from "../helpers/getMarkers";
import buyShopItem from "../helpers/buyShopItem";

function Home({globeEl, location}) {
  const [showModal, setShowModal] = useState(false);
  const [nft, setNft] = useState({});
  const [transactionInProgress, setTransactionInProgress] = useState(false);

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

  const handleTransaction = async () => {
    setTransactionInProgress(true);
    const result = await buyShopItem(nft);
    if (result) {
      setTimeout(() => {
        setTransactionInProgress(false);
      }, 200);
    }
  };

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
        <>
          <Globe
            globeEl={globeEl}
            handleShowModal={handleShowModal}
            markers={markers.current}
            userLocation={location}
          />
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
                handleTransaction={handleTransaction}
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
      <Transition
        show={transactionInProgress}
        enter="transform transition ease-in duration-[300ms]"
        enterFrom="scale-0"
        enterTo="scale-100"
        leave="ease-in duration-[300ms]"
        leaveFrom="scale-100"
        leaveTo="scale-0"
        className="z-40 bg-white w-40 opacity-70 absolute top-24 left-6 flex flex-col justify-center items-center rounded-lg pt-3 shadow-custom-lg"
      >
        <TransactionProgress />
      </Transition>
    </>
  );
}

export default Home;
