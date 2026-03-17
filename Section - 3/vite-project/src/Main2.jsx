import { useState } from "react";

export default function Main() {
  const [ingredients, setingredients] = useState([]);

  const ingredientsItemsList = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  function formSubmit(event) {
    event.preventDefault();
    // console.log("submitted!");

    const formData = new FormData(event.currentTarget);
    const newIngredients = formData.get("ingredient");
    // console.log(newIngredients);
    // ingredients.push(newIngredients);
    // console.log(newIngredients);

    setingredients(prevIngredients => [...prevIngredients, newIngredients])
  }
  return (
    <main>
      <form action="" onSubmit={formSubmit} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. Oregano"
          aria-label="Add Ingredient"
          name="ingredient"
          autoFocus
        />

        <button>Add Ingredient</button>
      </form>

      <ul>{ingredientsItemsList}</ul>
    </main>
  );
}
