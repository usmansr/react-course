import { useState } from "react";
import IngredientsList from "./components/IngredientsList";
import ClaudeRecipie from "./components/ClaudeRecipie";
import { getRecipeFromMistral } from "./ai";

export default function Main() {
  const [ingredients, setingredients] = useState([
    "beef",
    "pasta",
    "oregano",
    "garlic",
    "tomato paste",
  ]);

  const [recipe, setRecipe] = useState(""); // State to hold the markdown
  const [recipeShown, setRecipeShown] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    if (!newIngredient) return;
    setingredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  async function getRecipie() {
    if (isLoading) return;

    setIsLoading(true);
    setErrorMessage("");

    try {
      const recipieMarkdown = await getRecipeFromMistral(ingredients);
      if (!recipieMarkdown) return;
      setRecipe(recipieMarkdown); // Save the result
      setRecipeShown(true); // Show the component
    } catch (err) {
      console.error("Unable to generate recipe right now:", err?.message || err);
      setRecipeShown(false);
      setErrorMessage("Recipe request timed out or failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main>
      <form action={addIngredient} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. Oregano"
          aria-label="Add Ingredient"
          name="ingredient"
          autoFocus
        />

        <button>Add Ingredient</button>
      </form>

      {ingredients.length > 0 && (
        <IngredientsList
          ingredients={ingredients}
          getRecipie={getRecipie}
          isLoading={isLoading}
        />
      )}

      {errorMessage && <p aria-live="polite">{errorMessage}</p>}

      {recipeShown && <ClaudeRecipie recipe={recipe} />}
    </main>
  );
}
