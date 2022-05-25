export default function Footer() {
  return (
    <footer className="footer items-center p-4 m-3 w-auto rounded-lg text-neutral-content bg-gradient-to-r from-white  to-purple-400 -bottom-2">
      <div className="grid-flow-col gap-4">
        <a
          href="https://github.com/mjstaus/Trotter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="transition hover:-translate-y-1 hover:scale-110 ease-in-out duration-200" src="GitHub-Mark-32px.png" alt="Github-icon"></img>
        </a>
      </div>
      <div className="items-center grid-flow-col justify-self-end">
        <a href="/">
          <img className="transition ease-in-out duration-200 hover:scale-110" src="pig-dark.png" alt="Trotter-logo"></img>
        </a>
        <p className="text-black">Trotter 2022</p>
      </div>
    </footer>
  );
}
