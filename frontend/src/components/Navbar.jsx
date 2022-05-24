import Jdenticon from "react-jdenticon";

export default function Navbar({account, setAccount}) {

  async function connectWallet() {
    const results = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    setAccount(results[0]);
    
    window.ethereum.on("accountsChanged", async function (accounts) {
      await connectWallet();
    });
  };

  function disconnectWallet() {
    setAccount(null);
  };

  return (
    <>
      <div className="navbar bg-transparent flex justify-between absolute">
        <div className="ml-3">
          <a
            href="/"
            className="transition ease-in-out duration-300 hover:scale-105 normal-case text-xl
          flex justify-start items-center"
          >
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
              <button className="btn btn-circle btn-lg bg-transparent outline-none flex justify-center mr-3">
                <div className="brightness-200 saturate-50">
                  <Jdenticon size="50" value={account} />
                </div>
              </button>
              <ul
                tabIndex="0"
                className="menu mt-3 dropdown-content p-2 rounded-box w-52 menu-normal bg-gradient-to-r from-cyan-500 to-blue-200"
              >
                <li>
                  <a
                    href={`https://etherscan.io/address/${account}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="justify-between inline-block text-black hover:bg-white hover:bg-opacity-20"
                  >
                    Connected:{" "}
                    <strong>
                      {account.slice(0, 5) + "..." + account.slice(38, 42)}
                    </strong>
                  </a>
                </li>
                <li>
                  <a
                    href="/mycollection"
                    className="justify-between text-black hover:bg-white hover:bg-opacity-20"
                  >
                    My Collection
                  </a>
                </li>
                <li>
                  <button
                    className="text-black hover:bg-white hover:bg-opacity-20"
                    onClick={() => disconnectWallet()}
                  >
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
