import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <h1>This is counter app</h1>
      <div id="counter-val">{counter}</div>
      <button
        id="inc-btn"
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Increment
      </button>
      <button
        id="decrement-btn"
        onClick={() => {
          if (counter == 0) {
            setCounter(0);
          } else setCounter(counter - 1);
        }}
      >
        Decrement
      </button>
    </div>
  );
}

export default App;
