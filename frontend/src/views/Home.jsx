import "../App.css";
import Globe from "../components/Globe";
import Navbar from "../components/Navbar";

function Home({
  account,
  web3Handler,
  location,
  connect,
  disconnect,
  isActive,
}) {
  // console.log(location);
  return (
    <>
    <div className="bg-black">
      < Navbar />
      < Globe  />
    </div>
    </>

  );
}

export default Home;
