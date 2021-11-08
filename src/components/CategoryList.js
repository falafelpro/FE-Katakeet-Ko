import React from "react";
import CategoryItem from "./CategoryItem";

function CategoryList() {
  return (
    <div>
      <div class="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2">
        <CategoryItem />
      </div>
    </div>
  );
}
export default CategoryList;
