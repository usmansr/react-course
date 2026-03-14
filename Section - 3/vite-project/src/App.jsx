import Header from "./Header";
import Main from "./Main2";
import { useState } from "react";

function StatePractice() {
  let [isImportant, setIsImportant] = useState("Yes");
  // console.log(isImportant);

  function handleClick() {
    setIsImportant("Definately!");
  }

  return (
    <main>
      <h1>Is this state important to know?</h1>
      <button onClick={handleClick}>{isImportant}</button>
    </main>
  );
}

function StatePractice_2() {
  let [count, setCount] = useState(10);

  /**
   * Note: if you ever need the old value of state
   * to help you determine the new value of state,
   * you should pass a callback function to your
   * state setter function instead of using
   * state directly. This callback function will
   * receive the old value of state as its parameter,
   * which you can then use to determine your new
   * value of state.
   */

  function add() {
    console.log("Add");
    setCount((prevCount) => {
      return prevCount + 1;
    });
  }

  function minus() {
    console.log("minus");
    if (count) {
      setCount(count - 1);
    }
  }

  return (
    <main>
      <h1>State Counter</h1>
      <div className="state-Counter">
        <button aria-label="Decrease Count" onClick={minus}>
          -
        </button>
        <h2>{count}</h2>
        <button aria-label="Increase Count" onClick={add}>
          +
        </button>
      </div>
    </main>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <Main />
      {/* <StatePractice /> */}
      <StatePractice_2 />
    </>
  );
}
