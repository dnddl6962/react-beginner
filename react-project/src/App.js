import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function Hello() {
  useEffect(() => {
    console.log("created :(");
    return () => console.log("Destroyed :)"); //clean up function
  }, [])
  return <h1>Hello</h1>;
}

function App() {
  const [value, setValue] = useState(false);
  const onClick = () => setValue((prev) => !prev);
  return (
    <div>
      {value ? <Hello /> : null}
      <button onClick={onClick}>{value ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
