export default function Footer() {
  return (
    <footer class="footer items-center p-4 bg-white text-neutral-content">
      <div class="grid-flow-col gap-4">
        <a
          href="https://github.com/mjstaus/Trotter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="GitHub-Mark-32px.png"></img>
        </a>
      </div>
      <div class="items-center grid-flow-col justify-self-end">
        <a href="/">
          <img className="m-2" src="pig-dark.png"></img>
        </a>
        <p>Trotter 2022 - Made in Vancouver, Canada</p>
      </div>
    </footer>
  );
}
