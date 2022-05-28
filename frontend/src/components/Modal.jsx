import React from "react";
import buyMarketplaceItem from "../helpers/buyMarketplaceItem";

export default function Modal({ handleHideModal, nft }) {
  return (
    <>
      <div className="fixed inset-0 h-full z-40 flex justify-center items-center">
        <div className="card card-compact w-96 bg-base-100 shadow-xl transition ease-in-out duration-300 hover:scale-101">
          <figure>
            <img
              className="brightness-75"
              src={`./images/thumbnails/${nft.name}.jpg`}
              alt={nft.name}
            />
          </figure>
          <div className="card-body bg-white">
            <h2 className="card-title font-urbanist text-black text-2xl">
              {nft.name}
              {nft.sold && <div class="badge badge-secondary">SOLD OUT</div>}
            </h2>
            <button
              className="btn btn-sm btn-circle absolute right-2 top-2"
              onClick={() => handleHideModal()}
            >
              ✕
            </button>
            {!nft.sold && (
              <div className="card-actions align-self-end justify-end">
                <button
                  className="btn btn-primary"
                  onClick={() => buyMarketplaceItem(nft)}
                >
                  Buy Now
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
