import { useEffect } from "react";
import { useState } from "react";
import {useRef} from "react";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);

  useEffect(() => {
    if (count === 10) {
      alert("Endi oshirolmaysiz")
    } else {
      output.current = "";
    }
  })
  useEffect(() => {
    if (count === -10) {
      alert("Endi kamaytiraolmaysiz");
      
    } else {
      output.current = "";
    }
  });
  const output = useRef(null);
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)} disabled={count === 10}>
        Increase
      </button>
      <button onClick={() => setCount(count - 1)} disabled={count === -10}>
        Decrease
      </button>
    </div>
  );
}

export default App;
