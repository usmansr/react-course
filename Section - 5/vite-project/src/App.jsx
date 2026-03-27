import React from "react";
import { useState, useRef, useEffect } from "react";
import Die from "./Die";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

function App() {
  function generateRandomNewDice() {
    return new Array(10).fill(0).map(() => ({
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    }));

    // const newDice = [];
    // for (let i = 0; i < 10; i++) {
    //   const randomNumber = Math.ceil(Math.random() * 6);
    //   newDice.push(randomNumber);
    // }
    // return newDice;
  }

  const [dice, setDice] = useState(() => generateRandomNewDice());
  const buttonRef = useRef(null); //save values bw render cycle without triggering a re-render -> DOM node returned as markup

  const diceElements = dice.map((dieObj) => (
    <Die
      key={dieObj.id}
      value={dieObj.value}
      isHeld={dieObj.isHeld}
      hold={() => hold(dieObj.id)}
    />
  ));

  function rollDice() {
    if (!gameWon) {
      setDice((oldDice) => {
        return oldDice.map((die) => {
          return die.isHeld
            ? die
            : { ...die, value: Math.ceil(Math.random() * 6) };
        });
      });
    } else {
      setDice(generateRandomNewDice());
    }
  }

  function hold(id) {
    // console.log(id);
    setDice((oldDice) => {
      return oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      });
    });
  }

  const gameWon =
    dice.every((die) => die.isHeld) &&
    dice.every((die) => die.value === dice[0].value);

    useEffect(() => {
      buttonRef.current.focus()
    } , [gameWon])

  return (
    <main>
      {gameWon && <Confetti />}
      <div aria-live="polite" className="sr-only">
        {gameWon && (
          <p>Congratulations, you won! Press "New Game" to start again</p>
        )}
      </div>
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="dice-container">{diceElements}</div>

      <button className="roll-dice" onClick={rollDice} ref={buttonRef}>
        {gameWon ? "New Game" : "Roll"}
      </button>
    </main>
  );
}

export default App;
