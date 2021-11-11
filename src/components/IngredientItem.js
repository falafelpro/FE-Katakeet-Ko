import React from "react";
import { observer } from "mobx-react";

function IngredientItem({ ingredient }) {
  return <div className="ingredient-block">{ingredient.name}</div>;
}

export default observer(IngredientItem);
