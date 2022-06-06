import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";

export default function Navbar() {
  const { data } = useAccount();
  const pathName = window.location.pathname;

  return (
    <>
      <div className="navbar bg-transparent flex justify-end absolute items-center h-28 p-5 z-40 flex-wrap">
        <div className="justify-self-start mr-auto">
          <a
            href="/"
            className="transition ease-in-out duration-300 hover:scale-102 normal-case text-xl
          flex justify-start items-center"
          >
            <img className="mr-2" src="pig-logo.png" alt="Trotter-logo"></img>
            <p className="font-shrikhand text-4xl text-slate-100">Trotter</p>
          </a>
        </div>

        <div className="tabs flex items-center justify-self-end mb-2">
          <div className="tabs">
            {pathName === "/" && (
              <>
                {data && (
                  <a href="/mycollection" className="tab tab-bordered text-white">
                    My Collection
                  </a>
                )}
              </>
            )}
            {pathName === "/mycollection" && (
              <>
                {data && (
                  <a
                    href="/mycollection"
                    className="tab tab-bordered tab-active"
                  >
                    My Collection
                  </a>
                )}
              </>
            )}
          </div>
        </div>
        <div className="flex flex-col justify-between items-end ml-3">
          <ConnectButton
            accountStatus={{
              smallScreen: "avatar",
              largeScreen: "full",
            }}
            chainStatus="none"
            showBalance={false}
          />
        </div>
      </div>
    </>
  );
}
