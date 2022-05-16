import Navbar from "../components/Navbar";

export default function UserCollection({ purchases }) {
  return (
    <>
      <div className="bg-black">
        <Navbar />
        <h2>Trotter Collection</h2>
        {purchases.length > 0 &&
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
          ))}
      </div>
    </>
  );
}
