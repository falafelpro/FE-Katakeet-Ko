import React from "react";
import Home from "./Home";
import CategoryList from "./CategoryList";
import recipeStore from "../stores/recipeStore";
import RecipeItem from "./RecipeItem";

function RecipeList() {
  const recipesList = recipeStore.recipes.map((recipe) => (
    <RecipeItem recipe={recipe} />
  ));

  return (
    <div>
      <Home />
      <div class="container-fluid">
        <CategoryList />
      </div>
      <div>{recipesList}</div>
    </div>
  );
}

export default RecipeList;
