import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";

export default function Navbar() {
  const { data, isError, isLoading } = useAccount();

  return (
    <>
      <div className="navbar bg-transparent flex justify-between absolute h-28 items-start p-5">
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

        <div className="flex flex-col justify-between items-end">
          <ConnectButton
            accountStatus={{
              smallScreen: "avatar",
              largeScreen: "full",
            }}
            chainStatus="icon"
            showBalance={false}
          />
          {data && (
            <div>
              <a
                role="button"
                href="/mycollection"
                className="btn btn-ghost mt-3"
              >
                My Collection
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
