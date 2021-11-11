import React from "react";
import { observer } from "mobx-react";

function IngredientItem({ ingredient }) {
  return (
    <div>
      <div className="ingredient-block">{ingredient.name}</div>
    </div>
  );
}

export default observer(IngredientItem);
