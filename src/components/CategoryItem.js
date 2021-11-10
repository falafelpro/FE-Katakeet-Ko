import React from "react";
import { observer } from "mobx-react";

function CategoryItem({ category }) {
  return (
    <div className="col-1">
      <div className="card-block">
        <img src={category.image} alt={category.name}></img>
      </div>
      <p>{category.name}</p>
    </div>
  );
}

export default observer(CategoryItem);
