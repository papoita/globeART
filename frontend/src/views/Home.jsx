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
      <Globe  />
  );
}

export default Home;
