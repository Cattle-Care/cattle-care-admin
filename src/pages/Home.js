import logo from '../logo.svg';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a 
          className="App-link bg-green-900"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Cattle care admin
        </a>
      </header>
    </div>
  );
}

export default Home;
