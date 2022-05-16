import React from "react";

export default function Modal({ showModal }) {
  
  if(showModal) 
  return (
    <>
        <div className="card w-96 bg-base-100 shadow-xl image-full z-50">
          <figure>
            <img
              src="./images/vancouver.png"
              alt="Vancouver"
            />
          </figure>
          <div className="card-body flex flex-col justify-between">
            <h2 className="card-title">Vancouver</h2>
            <div className="card-actions align-self-end justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
    </>
  )
}
