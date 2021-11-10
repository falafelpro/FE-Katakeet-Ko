import React from "react";
import { observer } from "mobx-react";

function IngredientItem({ ingredient }) {
  return (
    <div className="col-1">
      <div className="card-block">
        <p>{ingredient.name}</p>
      </div>
    </div>
  );
}

export default observer(IngredientItem);
