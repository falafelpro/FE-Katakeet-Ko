import React from "react";
import { observer } from "mobx-react";
import ingredientStore from "../stores/ingredientStore";
import IngredientItem from "./IngredientItem";

function IngredientList() {
  const ingredientList = ingredientStore.ingredients.map((ingredient) => (
    <IngredientItem ingredient={ingredient} />
  ));

  return <div>{ingredientList}</div>;
}
export default observer(IngredientList);
