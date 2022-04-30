// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Buy from './components/Buy';

function App() {
  return (
    <div className="App">
      <h1>globeART</h1>
      <Header className="" name="Julian" message="NFT art collection for wanderlusts" />
      <Buy></Buy>
    </div>
  );
}

export default App;
