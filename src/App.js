import logo from "./logo.svg";
import "./App.css";
import Simple from "./Components/simple";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Simple />
      </header>
    </div>
  );
}

export default App;
