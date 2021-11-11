import React from "react";
import { observer } from "mobx-react";

function IngredientItem({ ingredient }) {
  return (
    // REVIEW: Why 2 divs?
    <div>
      <div className="ingredient-block">{ingredient.name}</div>
    </div>
  );
}

export default observer(IngredientItem);
