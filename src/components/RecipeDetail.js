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
      <div>
        <IngredientList />
      </div>
      {authStore.user ? (
        <Button onClick={openModal}>Add Ingredients</Button>
      ) : null}
      <IngredientModal isOpen={isOpen} closeModal={closeModal} />
      <div className="notepad">
        <div className="top"></div>
        <div className="paper" contenteditable="true">
          Hello, this is a paper.<br></br>
          Click to write your message.
        </div>
      </div>
    </div>
  );
}

export default observer(RecipeDetail);
