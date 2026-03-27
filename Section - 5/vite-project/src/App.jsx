import React from "react";
import { useState } from "react";
import Die from "./Die";
import { nanoid } from 'nanoid'

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

  const [dice, setDice] = useState(generateRandomNewDice);
  const diceElements = dice.map(dieObj => (
      <Die 
        key={dieObj.id} 
        value={dieObj.value} 
        isHeld={dieObj.isHeld} 
        hold={() => hold(dieObj.id)}
      />
  ));

  function rollDice() {
    setDice(generateRandomNewDice());
  }

  function hold(id) {
    console.log(id);

  }

  return (
    <main>
      <div className="dice-container">{diceElements}</div>

      <button className="roll-dice" onClick={rollDice}>
        Roll Dice
      </button>
    </main>
  );
}

export default App;
