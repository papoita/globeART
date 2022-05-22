export default function UserCollection({ purchases }) {
  return (
    <>
      <div className="flex flex-col justify-center items-center pt-24">
        <div>
          <h2 className="text-4xl my-5">My Collection</h2>
        </div>

        <div className="container container max-w-l m-auto flex flex-wrap flex-col md:flex-row justify-center">
          {purchases.length > 0 ? (
            purchases.map((item) => (
              <div className="card card-compact bg-base-100 shadow-xl m-5 w-72">
                <figure>
                  <img src={`./images/${item.name}.png`} alt={item.name} />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{item.name}</h2>
                  <p>Purchased for: 1 ETH </p>
                  <p>Date purchased:  </p>
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
      </div>
    </>
  );
}
