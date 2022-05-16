import React from "react";

export default function Modal({ handleHideModal, nft}) {

  console.log(nft)

  return (
    <>
      <div className="fixed inset-0 h-full z-40 flex justify-center items-center">
        <div className="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img src={`./images/${nft.name}.png`} alt={nft.name} />
          </figure>
          <div className="card-body flex flex-col justify-between">
            <h2 className="card-title">{nft.name}</h2>
          <button
            className="btn btn-sm btn-circle absolute right-2 top-2"
            onClick={() => handleHideModal()}
          >
            ✕
          </button>
            <div className="card-actions align-self-end justify-end">
              <button
                className="btn btn-primary"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
