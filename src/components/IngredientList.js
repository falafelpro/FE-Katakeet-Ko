import React from "react";
import ingredientStore from "../stores/ingredientStore";
import IngredientItem from "./IngredientItem";
import { observer } from "mobx-react";

function IngredientList() {
  const ingredientList = ingredientStore.ingredients.map((ingredient) => (
    <IngredientItem ingredient={ingredient} />
  ));

  return <div className="ingredients-container">{ingredientList}</div>;
}
export default observer(IngredientList);
