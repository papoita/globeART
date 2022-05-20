import Navbar from "../components/Navbar";

export default function UserCollection({ purchases }) {
  return (
    <>
        <div className="flex flex-col justify-center items-center">
          <div>
            <h2 className="text-4xl my-5">Trotter Collection</h2>
          </div>

          {purchases.length > 0 ? (
            purchases.map((item) => (
              <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure>
                  <img src={item.image} alt={item.collection} />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{item.name}</h2>
                  <p>Purchased for: 1 ETH </p>
                </div>
              </div>
            ))
          ) : (
            <div className="flex flex-col my-3">
              <p className="text-2xl"> You don't have any items in your collection 😱 </p>
              <a href="/" className="btn btn-primary mt-5 self-center">
                Back
              </a>
            </div>
          )}
        </div>
    </>
  );
}
