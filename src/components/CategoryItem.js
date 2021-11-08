import React from "react";
import { observer } from "mobx-react";

function CategoryItem({ category }) {
  return (
    <div class="col-1">
      <div class="card card-block card-1"></div>
      <p>{category.name}</p>
    </div>
  );
}

export default observer(CategoryItem);
