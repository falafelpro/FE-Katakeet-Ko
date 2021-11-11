import React, { useState } from "react";
import IngredientModal from "./IngredientModal";
import { Button } from "react-bootstrap";
import authStore from "../stores/authstore";
import IngredientList from "./IngredientList";
import { observer } from "mobx-react";
import recipeStore from "../stores/recipeStore";
import { useParams } from "react-router-dom";

function RecipeDetail() {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  const slug = useParams().recipeSlug;
  // REVIEW: A better way to write this: if(recipeStore.loading)
  if (recipeStore.loading === true) {
    return <h1>Loading...</h1>;
  }
  // REVIEW: Should be recipe instead of info
  const recipe = recipeStore.recipes.find((info) => info.slug === slug);

  return (
    <div>
      <h1>{recipe.name}</h1>
      <div className="recipe-content-container">
        <IngredientList ingredients={recipe.ingredients} />
        <div className="notepad">
          <div className="top"></div>
          <div className="paper" contenteditable="true">
            Step 1: <br></br>
            Step 2:
          </div>
        </div>
      </div>
      {/* // If your ternary operator does not have an else, replace it with && */}
      {authStore.user ? (
        <Button onClick={openModal}>Add Ingredients</Button>
      ) : null}
      <IngredientModal isOpen={isOpen} closeModal={closeModal} />
    </div>
  );
}

export default observer(RecipeDetail);
