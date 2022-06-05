import { useState } from "react";
import buyShopItem from "../helpers/buyShopItem";
import TransactionProgress from "./TransactionProgress";

export default function Modal({ handleHideModal, nft, userLocation }) {
  const [transactionInProgress, setTransactionInProgress] = useState(false);

  const toggleTransactioninProgress = () => {
    setTransactionInProgress(!transactionInProgress);
  };

  return (
    <>
      <div className="card card-compact w-96 bg-white rounded-sm shadow-custom-lg transition ease-in-out duration-360 hover:scale-10003 hover:-translate-y-1 z-50">
        {transactionInProgress && <TransactionProgress />}
        <figure className="p-5">
          <img
            className="brightness-75 shadow-inner"
            src={`./images/thumbnails/${nft.name}.jpg`}
            alt={nft.name}
          />
        </figure>
        <div className="card-body flex-row justify-between bg-white">
          <div className="flex-column">
            <h2 className="card-title font-urbanist text-black text-3xl">
              {nft.name}
              {nft.sold && (
                <div className="badge badge-secondary">SOLD OUT</div>
              )}
            </h2>
            <p>Trotter {nft.collection} Collection</p>
          </div>
          {!nft.sold && userLocation === nft.name && (
            <div className="card-actions flex flex-col items-center">
              <p className="text-lg">Price</p>
              <div className="flex flex-row items-center">
                <img
                  className="mr-2"
                  src="./eth-diamond-glyph.png"
                  alt="eth-icon"
                ></img>
                <p className="text-xl text-black">{nft.price}</p>
              </div>
              <button
                className="btn btn-primary"
                onClick={async () => {
                  toggleTransactioninProgress();
                  const result = await buyShopItem(nft);
                  if (result) {
                    toggleTransactioninProgress();
                    handleHideModal();
                  }
                }}
              >
                Buy Now
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
