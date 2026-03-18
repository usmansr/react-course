import Header from "./Header";
import Main from "./Main2";
import { useState } from "react";

// import avatar from "./assets/user.png"
// import starFilled from "./assets/star-filled"
// import starEmpty from "./assets/star-empty.png"

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

function IsGoingOutState() {
  const [isGoingOut, setIsGoingOut] = useState(true);

  function changeMind() {
    setIsGoingOut((prev) => !prev);
  }

  return (
    <main>
      <h1>Do I feel like going out?</h1>
      <button
        onClick={changeMind}
        aria-label={`Current answer is : ${isGoingOut ? "Yes" : "No"}. Click to change `}
      >
        {isGoingOut ? "Yes" : "No"}
      </button>
    </main>
  );
}

function ArrayUsage() {
  /**
   * Challenge: Convert the code below to use an array
   * held in state instead of a local variable. Initialize
   * the state array as an empty array
   *
   * Don't worry about fixing `addFavoriteThing` quite yet.
   */
  const [myFavoriteThings, setMyFavoriteThings] = useState([]);
  const allFavoriteThings = [
    "💦🌹",
    "😺",
    "💡🫖",
    "🔥🧤",
    "🟤🎁",
    "🐴",
    "🍎🥧",
    "🚪🔔",
    "🛷🔔",
    "🥩🍝",
  ];
  const thingsElements = myFavoriteThings.map((thing) => (
    <p key={thing}>{thing}</p>
  ));

  function addFavoriteThing() {
    setMyFavoriteThings((prevFavThings) => [
      ...prevFavThings,
      allFavoriteThings[prevFavThings.length],
    ]);
  }

  return (
    <main>
      <button onClick={addFavoriteThing}>Add item</button>
      <section aria-live="polite">{thingsElements}</section>
    </main>
  );
}

function UseStatePractice() {
  const [myAnimals, setMyAnimals] = useState([]);

  const allAnimals = [
    "🐶 Dog",
    "🐱 Cat",
    "🐰 Rabbit",
    "🦊 Fox",
    "🐼 Panda",
    "🐨 Koala",
  ];

  function addAnimals() {
    setMyAnimals((prevAnimals) => [
      ...prevAnimals,
      allAnimals[prevAnimals.length],
    ]);
  }

  const animalElement = myAnimals.map((animal) => (
    <li key={animal}>{animal}</li>
  ));

  return (
    <main>
      <button onClick={addAnimals}>Add Animal</button>
      <ul>{animalElement}</ul>
    </main>
  );
}

function App_Employee() {
  const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (212) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: true,
  });

  let starIcon = contact.isFavorite ? starFilled : starEmpty;

  function toggleFavorite() {
    setContact((prevContact) => {
      return {
        isFavorite: !prevContact.isFavorite,
      };
    });
  }

  return (
    <main>
      <article className="card">
        <img
          src={avatar}
          className="avatar"
          alt="User profile picture of John Doe"
        />
        <div className="info">
          <button
            onClick={toggleFavorite}
            aria-pressed={contact.isFavorite}
            aria-label={
              contact.isFavorite ? "Remove from favorites" : "Add to favorites"
            }
            className="favorite-button"
          >
            <img
              src={starIcon}
              alt={contact.isFavorite ? "filled star icon" : "empty star icon"}
              className="favorite"
            />
          </button>
          <h2 className="name">
            {contact.firstName} {contact.lastName}
          </h2>
          <p className="contact">{contact.phone}</p>
          <p className="contact">{contact.email}</p>
        </div>
      </article>
    </main>
  );
}

function App_Form() {
  // function handleSubmit(event) {
  //   event.preventDefault();
  //   const formEl = event.currentTarget;
  //   const formData = new FormData(formEl);
  //   console.log(formData);
  //   formEl.reset();
  // }

  function signUp(formData) {
    const email = formData.get("email");
    const password = formData.get("password");
    console.log(email, password);
  }

  return (
    <section>
      <h1>Signup form</h1>
      <form action={signUp}>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="joe@schmoe.com"
        />
        <br />

        <label htmlFor="password">Password:</label>
        <input id="password" type="password" name="password" />
        <br />

        <button>Submit</button>
      </form>
    </section>
  );
}

function HtmlElements() {
  /**
   * Challenge: see if you can remember how to grab an array of checked
   * items from the dietaryRestrictions checkboxes.
   */

  function signUp(formData) {
    const data = Object.fromEntries(formData);
    const dietaryRestrictions = formData.getAll("dietaryRestrictions");

    const allData = {
      ...data,
      dietaryRestrictions,
    };

    console.log(allData);
  }

  return (
    <section>
      <h1>Signup form</h1>
      <form action={signUp}>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          defaultValue="joe@schmoe.com"
          type="email"
          name="email"
          placeholder="joe@schmoe.com"
        />

        <label htmlFor="password">Password:</label>
        <input
          id="password"
          defaultValue="password123"
          type="password"
          name="password"
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          defaultValue="This is a description"
        ></textarea>

        <fieldset>
          <legend>Employment Status:</legend>
          <label>
            <input type="radio" name="employmentStatus" value="unemployed" />
            Unemployed
          </label>
          <label>
            <input type="radio" name="employmentStatus" value="part-time" />
            Part-time
          </label>
          <label>
            <input
              type="radio"
              name="employmentStatus"
              defaultChecked={true}
              value="full-time"
            />
            Full-time
          </label>
        </fieldset>

        <fieldset>
          <legend>Dietary restrictions:</legend>
          <label>
            <input type="checkbox" name="dietaryRestrictions" value="kosher" />
            Kosher
          </label>
          <label>
            <input type="checkbox" name="dietaryRestrictions" value="vegan" />
            Vegan
          </label>
          <label>
            <input
              type="checkbox"
              name="dietaryRestrictions"
              defaultChecked={true}
              value="gluten-free"
            />
            Gluten-free
          </label>
        </fieldset>

        <label htmlFor="favColor">What is your favorite color?</label>
        <select id="favColor" name="favColor" defaultValue="" required>
          <option value="" disabled>
            -- Choose a color --
          </option>
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="indigo">Indigo</option>
          <option value="violet">Violet</option>
        </select>

        <button>Submit</button>
      </form>
    </section>
  );
}

function App_Conditional_Rendering() {
  const [unreadMessages, setUnreadMessages] = useState(["a", "b", "c"]);

  return (
    <div>
      {/* {unreadMessages.length ? (<h1>You have {unreadMessages.length} unread messages!</h1>) : <p>You have no text messages</p>} */}
      {unreadMessages.length > 1 ? (
        <h1>You have {unreadMessages.length} unread messages!</h1>
      ) : unreadMessages.length === 1 ? (
        <p>You have one text message</p>
      ) : (
        <p>You have no text messages</p>
      )}
    </div>
  );
}
export default function App() {
  return (
    <>
      <Header />
      <Main />
      {/* <StatePractice /> */}
      {/*<StatePractice_2 />*/}
      {/* <IsGoingOutState /> */}
      {/* <ArrayUsage /> */}
      {/* <UseStatePractice /> */}
      {/* <App_Employee /> */}
      {/* <App_Form /> */}
      {/* <HtmlElements /> */}
      {/* <App_Conditional_Rendering /> */}
    </>
  );
}
