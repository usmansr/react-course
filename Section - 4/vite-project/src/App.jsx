import Header from "./components/Header";
import Main from "./components/Main";
import { useState } from "react";

function StarWars(props) {
  const [starWarsData, setStarWarsData] = useState(null);

  fetch("https://swapi.dev/api/people/1")
    .then((res) => res.json())
    .then((data) => setStarWarsData(data));

  return (
    <div>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <Main />
      <StarWars />
    </>
  );
}
