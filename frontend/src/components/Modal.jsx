import React from "react";
import buyMarketplaceItem from "../helpers/buyMarketplaceItem";

export default function Modal({ handleHideModal, nft }) {
  return (
    <>
      <div className="fixed inset-0 h-full z-40 flex justify-center items-center">
        <div className="card card-compact w-96 bg-base-100 shadow-xl transition ease-in-out duration-300 hover:scale-10003">
          <figure>
            <img
              className="brightness-75"
              src={`./images/thumbnails/${nft.name}.jpg`}
              alt={nft.name}
            />
          </figure>
          <div className="card-body flex-row justify-between bg-white">
            <div className="flex-column">
              <h2 className="card-title font-urbanist text-black text-3xl">
                {nft.name}
                {nft.sold && <div class="badge badge-secondary">SOLD OUT</div>}
              </h2>
              <p>Trotter {nft.collection}</p>
            </div>

            <button
              className="btn btn-sm btn-circle absolute right-2 top-2"
              onClick={() => handleHideModal()}
            >
              ✕
            </button>
            {!nft.sold && (
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
                    const result = await buyMarketplaceItem(nft);
                    if(result === "success") handleHideModal();
                  }}
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
