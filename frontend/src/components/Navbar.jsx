// import { Link } from "react-router-dom";

import useWeb3 from "../hooks/useWeb3";

export default function Navbar() {
  const { account, connectWallet, disconnectWallet } = useWeb3();

  return (
    <>
      <div className="navbar bg-transparent">
        <div className="flex-1">
          <a href="/" className="btn btn-ghost normal-case text-xl">
            <img className="m-2" src="pig-logo.png"></img>
            <p className="font-shrikhand text-3xl text-slate-100">Trotter</p>
          </a>
        </div>

        <div className="flex-none m-4 ">
          <label htmlFor="my-modal-4" className="btn modal-button">
            Open Modal
          </label>
        </div>

        {!account && (
          <div className="flex-none m-4 ">
            <button className="btn" onClick={() => connectWallet()}>
              Connect Wallet
            </button>
          </div>
        )}

        {account && (
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <label
                tabIndex="0"
                className="btn btn-ghost btn-circle avatar mr-3"
              >
                <div className="w-20 rounded-full">
                  <img src="https://doodleipsum.com/500/avatar-2" />
                </div>
              </label>
              <ul
                tabIndex="0"
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a
                    href={`https://etherscan.io/address/${account}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="justify-between inline-block"
                  >
                    Connected as:
                    <div>{account.slice(0, 5) + "..." + account.slice(38, 42)}</div>
                  </a>
                </li>
                <li>
                  <a href="/mycollection" className="justify-between">My Collection</a>
                </li>
                <li>
                  <button onClick={() => disconnectWallet()}>
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
