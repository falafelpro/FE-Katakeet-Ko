import React, { useState } from "react";
import Home from "./Home";
import CategoryList from "./CategoryList";
import recipeStore from "../stores/recipeStore";
import RecipeItem from "./RecipeItem";
import { observer } from "mobx-react";
import RecipeModal from "./RecipeModal";

function RecipeList() {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  const [category, setCategory] = useState(null);

  // REVIEW: Add a key to your RecipeItem
  const recipesList = recipeStore.recipes.map((recipe) => (
    <RecipeItem recipe={recipe} />
  ));
  return (
    <div>
      <Home />
      <div className="container-fluid">
        <CategoryList setCategory={setCategory} />
      </div>
      <div className="card-group">
        <div className="card m-2 border border-info rounded">
          <div className="card-text">
            <button
              className="btn btn-primary my-auto"
              type="button"
              onClick={openModal}
            >
              Add Recipe
            </button>
          </div>
        </div>
        {recipesList}
        <RecipeModal
          isOpen={isOpen}
          closeModal={closeModal}
          category={category}
        />
      </div>
    </div>
  );
}

export default observer(RecipeList);
