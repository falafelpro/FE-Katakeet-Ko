import React from "react";
import IngredientItem from "./IngredientItem";
import { observer } from "mobx-react";

function IngredientList({ ingredients }) {
  // REVIEW: Add a key to IngredientItem
  const ingredientList = ingredients.map((ingredient) => (
    <IngredientItem ingredient={ingredient} />
  ));

  return <div className="ingredients-container">{ingredientList}</div>;
}
export default observer(IngredientList);
