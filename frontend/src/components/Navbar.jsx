import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";

export default function Navbar() {
  const { data, isError, isLoading } = useAccount();

  return (
    <>
      <div className="navbar bg-transparent flex justify-between absolute h-20">
        <div className="ml-3">
          <a
            href="/"
            className="transition ease-in-out duration-300 hover:scale-105 normal-case text-xl
          flex justify-start items-center"
          >
            <img className="m-2" src="pig-logo.png" alt="Trotter-logo"></img>
            <p className="font-shrikhand text-3xl text-slate-100">Trotter</p>
          </a>
        </div>

        <div className="mr-3">
          <ConnectButton
            accountStatus={{
              smallScreen: "avatar",
              largeScreen: "full",
            }}
            chainStatus="icon"
            showBalance={false}
          />
        </div>
      </div>
    </>
  );
}
