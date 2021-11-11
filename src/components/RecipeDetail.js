import React, { useState } from "react";
import IngredientModal from "./IngredientModal";
import { Button } from "react-bootstrap";
import authStore from "../stores/authstore";
import IngredientList from "./IngredientList";
import { observer } from "mobx-react";

function RecipeDetail() {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <div>
      <h1>Recipe Name</h1>
      <div className="recipe-content-container">
        <IngredientList />
        <div className="notepad">
          <div className="top"></div>
          <div className="paper" contenteditable="true">
            Step 1: <br></br>
            Step 2:
          </div>
        </div>
      </div>
      {authStore.user ? (
        <Button onClick={openModal}>Add Ingredients</Button>
      ) : null}
      <IngredientModal isOpen={isOpen} closeModal={closeModal} />
    </div>
  );
}

export default observer(RecipeDetail);
