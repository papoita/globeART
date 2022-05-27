import { useRef, useEffect } from "react";
import { useAccount } from "wagmi";
import useLoading from "../hooks/useLoading";
import loadPurchasedItems from "../helpers/loadPurchasedItems";

export default function UserCollection() {
  const { isLoaded, setIsLoaded } = useLoading();
  const { data } = useAccount();

  const purchases = useRef(null);

  useEffect(() => {
    (async function asyncHandler() {
      try {
        purchases.current = await loadPurchasedItems(data?.address);
        setIsLoaded(true);
      } catch (error) {
        console.log(error);
        setIsLoaded(false);
      }
    })();
  }, [data, setIsLoaded]);

  return (
    <>
      <div className="flex flex-col items-center pt-24 min-h-screen justify-start">
        <div>
          <h2 className="font-urbanist text-4xl text-white my-5">My Collection</h2>
        </div>

        {!isLoaded && (
          <div className="mt-48">
            <img src="pig-spinner.png" className="animate-spin-slow" alt="Trotter-logo-spinner"></img>
          </div>
        )}

        {isLoaded && (
          <div className="container max-w-l mx-auto mt-6 flex flex-wrap flex-col md:flex-row justify-center">
            {purchases?.current.length > 0 ? (
              purchases?.current.map((item, idx) => (
                <div key={idx} className="card card-compact bg-base-100 shadow-xl m-5 w-72 transition ease-in-out duration-300 hover:scale-101">
                  <figure>
                    <img src={`./images/thumbnails/${item.name}.jpg`} alt={item.name} />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title font-urbanist text-white">{item.name}</h2>
                    <p>Purchased for: {item.price} ETH</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex flex-col my-3 align-top">
                <p className="text-2xl">
                  {" "}
                  You don't have any items in your collection 😱{" "}
                </p>
              </div>
            )}
          </div>
        )}
        <a role="button" href="/" className="btn btn-primary mt-10 self-center">
          Home
        </a>
      </div>
    </>
  );
}
