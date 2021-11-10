import { React, useState } from "react";
import IngredientModal from "./components/IngredientModal";
import { Button } from "react-bootstrap";
import authStore from "./stores/authstore";
import { observer } from "mobx-react";

function RecipeDetail() {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return (
    <div>
      {authStore.user ? (
        <Button onClick={openModal}>Add Ingredients</Button>
      ) : null}
      <IngredientModal isOpen={isOpen} closeModal={closeModal} />
    </div>
  );
}

export default observer(RecipeDetail);
