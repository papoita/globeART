// import { Link } from "react-router-dom";
import Jdenticon from "react-jdenticon";
import useWeb3 from "../hooks/useWeb3";

export default function Navbar() {
  const { account, connectWallet, disconnectWallet } = useWeb3();

  return (
    <>
      <div className="navbar bg-transparent flex justify-between">
        <div className="ml-3">
          <a href="/" className="transition ease-in-out duration-300 hover:scale-105 normal-case text-xl
          flex justify-start items-center">
            <img className="m-2" src="pig-logo.png"></img>
            <p className="font-shrikhand text-3xl text-slate-100">Trotter</p>
          </a>
        </div>

        {!account && (
          <div className="flex-none m-4 ">
            <button className="btn" onClick={() => connectWallet()}>
              Connect Wallet
            </button>
          </div>
        )}

        {account && (
          <div className="flex-none m-4">
            <div className="dropdown dropdown-end">
              
              <button className="flex justify-center mr-3 transition ease-in-out duration-300 hover:scale-110">
                <Jdenticon size="56" value={account} /> 
              </button>        
              <ul
                tabIndex="0"
                className="menu mt-3 dropdown-content p-2 rounded-box w-52 menu-normal bg-gradient-to-r from-white  to-blue-500"
              >
                <li>
                  <a
                    href={`https://etherscan.io/address/${account}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="justify-between inline-block text-black"
                  >
                    Connected: <strong>{account.slice(0, 5) + "..." + account.slice(38, 42)}</strong>
                  </a>
                </li>
                <li>
                  <a href="/mycollection" className="justify-between text-black">My Collection</a>
                </li>
                <li>
                  <button className="text-black" onClick={() => disconnectWallet()}>
                    Disconnect Wallet
                  </button>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
