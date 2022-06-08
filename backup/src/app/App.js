import './App.css';
import logo from '../assets/logo.svg';

console.log(logo);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="React" />
        <p>
          Edit <code>src/app/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React 학습!
        </a>
      </header>
    </div>
  );
}

export default App;
