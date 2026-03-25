import Header from "./components/Header";
import Main from "./components/Main";
import { useState, useEffect } from "react";
import WindowTracker from "./WindowTracker";

function StarWars(props) {
  const [starWarsData, setStarWarsData] = useState(null);
  const [count, setCount] = useState(1);

  useEffect(() => {
    console.log("useEffect Ran!");

    fetch(`https://swapi.dev/api/people/${count}`)
      .then((res) => res.json())
      .then((data) => setStarWarsData(data));
  }, [count]);

  console.log("Rendered !");
  return (
    <div>
      <h3>The count is {count}</h3>
      <button onClick={() => setCount((prevVal) => prevVal + 1)}>Add</button>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  );
}

function WindowTracker2() {
  const [show, setShow] = useState(true);

  function toggleShow() {
    setShow((prevVal) => !prevVal);
  }

  return (
    <main className="container">
      <button onClick={toggleShow}>Toggle WindowTracker</button>
      {show && <WindowTracker />}
    </main>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <Main />
      {/* <StarWars /> */}
      {/* <WindowTracker2 /> */}
    </>
  );
}
