import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Trunk-Based Development Demo for my friends!
        </p>
        <a
          className="App-link"
          href="https://harness.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Head over to Harness's Website to learn more about Feature Flags!
        </a>
      </header>
    </div>
  );
}

export default App;
