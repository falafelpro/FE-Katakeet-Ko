import React, { useState } from "react";
import Home from "./Home";
import CategoryList from "./CategoryList";
import recipeStore from "../stores/recipeStore";
import RecipeItem from "./RecipeItem";
import { observer } from "mobx-react";
import RecipeModal from "./RecipeModal";
import authStore from "../stores/authstore";
import { Button } from "react-bootstrap";

function RecipeList() {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  const [category, setCategory] = useState(null);

  const recipesList = recipeStore.recipes.map((recipe) => (
    <RecipeItem recipe={recipe} />
  ));
  return (
    <div>
      <Home />
      <div className="container-fluid">
        <CategoryList setCategory={setCategory} />
      </div>

      {authStore.user && (
        <>
          <div className="card-group ">
            <div className="card m-2 border border-info rounded">
              <div className="card-text">
                <Button
                  variant="outline-success"
                  onClick={openModal}
                  className="centera"
                >
                  Add Recipe
                </Button>
              </div>
            </div>
            {recipesList}
            <RecipeModal
              isOpen={isOpen}
              closeModal={closeModal}
              category={category}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default observer(RecipeList);
