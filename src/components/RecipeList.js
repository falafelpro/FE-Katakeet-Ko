import React from "react";
import recipeStore from "../stores/recipeStore";
import RecipeItem from "./RecipeItem";
import { observer } from "mobx-react";

function RecipeList() {
  const recipesList = recipeStore.recipes.map((recipe) => (
    <RecipeItem recipe={recipe} />
  ));
  return <div>{recipesList}</div>;
}

export default observer(RecipeList);
