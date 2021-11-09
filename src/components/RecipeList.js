import React from "react";
import recipeStore from "../stores/recipeStore";
import RecipeItem from "./RecipeItem";

function RecipeList() {
  const recipesList = recipeStore.recipes.map((recipe) => (
    <RecipeItem recipe={recipe} />
  ));
  return <div>{recipesList}</div>;
}

export default RecipeList;
