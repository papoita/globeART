import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";

export default function Navbar() {
  const { data } = useAccount();
  const pathName = window.location.pathname;

  return (
    <>
      <div className="navbar bg-transparent flex justify-between absolute h-28 p-5 z-50">
        <div className="ml-3">
          <a
            href="/"
            className="transition ease-in-out duration-300 hover:scale-102 normal-case text-xl
          flex justify-start items-center"
          >
            <img className="mr-2" src="pig-logo.png" alt="Trotter-logo"></img>
            <p className="font-shrikhand text-4xl text-slate-100">Trotter</p>
          </a>
        </div>

        <div className="tabs flex items-center">
          <div class="tabs mr-3">
            {pathName === "/" && (
              <>
                <a href="/" className="tab tab-bordered tab-active">
                  Home
                </a>
                {data && (
                  <a href="/mycollection" className="tab tab-bordered">
                    My Collection
                  </a>
                )}
              </>
            )}
             {pathName === "/mycollection" && (
              <>
                <a href="/" className="tab tab-bordered">
                  Home
                </a>
                {data && (
                  <a href="/mycollection" className="tab tab-bordered tab-active">
                    My Collection
                  </a>
                )}
              </>
            )}
          </div>

          <div className="flex flex-col justify-between items-end">
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
      </div>
    </>
  );
}
