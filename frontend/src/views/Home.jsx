import "../App.css";
import Globe from "../components/Globe";

function Home({
  account,
  web3Handler,
  location,
  connect,
  disconnect,
  isActive,
}) {
  console.log(location);
  return (
      // <Globe  />
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>

  );
}

export default Home;
