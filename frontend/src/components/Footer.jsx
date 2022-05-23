export default function Footer() {
  return (
    <footer class="footer items-center p-4 bg-white m-3 w-auto rounded-lg text-neutral-content">
      <div class="grid-flow-col gap-4">
        <a
          href="https://github.com/mjstaus/Trotter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="transition hover:-translate-y-1 hover:scale-110 ease-in-out duration-200" src="GitHub-Mark-32px.png"></img>
        </a>
      </div>
      <div class="items-center grid-flow-col justify-self-end">
        <a href="/">
          <img className="transition ease-in-out duration-200 hover:scale-110" src="pig-dark.png"></img>
        </a>
        <p>Trotter 2022</p>
      </div>
    </footer>
  );
}
