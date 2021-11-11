import React from "react";
import IngredientItem from "./IngredientItem";
import { observer } from "mobx-react";

function IngredientList({ ingredients }) {
  const ingredientList = ingredients.map((ingredient) => (
    <IngredientItem ingredient={ingredient} />
  ));

  return <div className="ingredients-container">{ingredientList}</div>;
}
export default observer(IngredientList);
