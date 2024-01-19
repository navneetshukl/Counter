import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(10);

  const addValue = () => {
    if (counter >= 20) return;
    counter = counter + 1;
    setCounter(counter);
    console.log("Value added ", counter);
  };

  const removeValue = () => {
    if (counter <= 0) return;
    counter = counter - 1;
    setCounter(counter);
  };

  return (
    <>
      <h1>Navneet Shukla</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>
    </>
  );
}

export default App;
