import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Contacts from "./contacts";

const root = createRoot(document.getElementById("root"));

// Practice of dynamism in react
function App_2() {
  let firstName = "John";
  let lastName = "Shmoe";

  return (
    <>
      <h1>Hello, {firstName + " " + lastName} </h1>
      <h1>
        It is currently {new Date().getHours() % 12} : {new Date().getMinutes()}
      </h1>
      <br />
    </>
  );
}

// Practice of Props on contact cards
function Contacts_Show() {
  return (
    <div>
      <Contacts
        img="./public/vite.svg"
        name="Mr Whiskerson"
        // ** Conditional Rendering **
        // phone = "+92 12345667"
        email="abc@gmail.com"
      />
      <Contacts
        img="./public/vite.svg"
        name="Mr Fluffykin"
        phone="+92 34564332"
        email="def@gmail.com"
      />
      <Contacts
        img="./public/vite.svg"
        name="Mr felix"
        phone="+92 765432456"
        email="ghi@gmail.com"
      />
      <Contacts
        img="./public/vite.svg"
        name="Mr pumpkin"
        phone="+92 6743234"
        email="jkl@gmail.com"
      />
    </div>
  );
}

function Maps() {
  // const jsx = <h1>Donatello</h1>
  // console.log(jsx);
  const ninjaTurtles = ["Don", "Mic", "Raf", "Leo"];

  const turtleHeadings = ninjaTurtles.map((turtle) => {
    return <h1 key={turtle}>{turtle}</h1>;
  });

  return (
    <main>
      {turtleHeadings}
    </main>
  );
}


root.render(
  <>
    <App />
    {/* <App_2 /> */}
    {/* <Contacts_Show /> */}
    <Maps />
  </>,
);
