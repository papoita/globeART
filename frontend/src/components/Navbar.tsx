import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi"; 
import { Location, Ref } from "../interfaces";

interface NavbarProps {
  location: Location;
  globeEl: Ref;
}

export default function Navbar({location, globeEl}: NavbarProps) {
  const { data } = useAccount();
  const pathName = window.location.pathname;

  const centerOnLocation = () => {
    const MAP_CENTER = {
      lat: location?.coordinates?.lat,
      lng: location?.coordinates?.lon,
      altitude: 2.5,
    };
    const ROTATION_SPEED = 500;
    globeEl.current.pointOfView(MAP_CENTER, ROTATION_SPEED);
  };

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
            chainStatus={"icon"}
            showBalance={false}
          />
        </div>
        <button
            className="btn btn-round  p-2 py-1 m-3"
            onClick={centerOnLocation}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </button>
      </div>
    </>
  );
}
