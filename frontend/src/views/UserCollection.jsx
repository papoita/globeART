import { useRef, useEffect } from "react";
import useLoading from "../hooks/useLoading";
import loadPurchasedItems from "../helpers/loadPurchasedItems";

export default function UserCollection({ account}) {
  const { isLoaded, setIsLoaded } = useLoading();

  const purchases = useRef(null);

  useEffect(() => {
    (async function asyncHandler() {
      try {
        purchases.current = await loadPurchasedItems(account);
        setIsLoaded(true);
      } catch (error) {
        console.log(error);
        setIsLoaded(false);
      }
    })();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center pt-24 h-screen justify-start">
        <div>
          <h2 className="text-4xl text-white my-5">My Collection</h2>
        </div>

        {!isLoaded && (
          <div className="mt-48">
            <img src="pig-spinner.png" className="animate-spin-slow"></img>
          </div>
        )}

        {isLoaded && (
          <div className="container max-w-l m-auto flex flex-wrap flex-col md:flex-row justify-center items-center">
            {purchases.current.length > 0 ? (
              purchases.current.map((item, idx) => (
                <div key={idx} className="card card-compact bg-base-100 shadow-xl m-5 w-72">
                  <figure>
                    <img src={item.image} alt={item.name} />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{item.name}</h2>
                    <p>Purchased for: {item.price} ETH</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex flex-col my-3">
                <p className="text-2xl">
                  {" "}
                  You don't have any items in your collection 😱{" "}
                </p>
                <a href="/" className="btn btn-primary mt-5 self-center">
                  Go Back
                </a>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
