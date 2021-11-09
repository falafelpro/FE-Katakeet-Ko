import "./App.css";
import CategoryList from "./components/CategoryList";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

//REMOVE LATER
import IngredientModal from "./components/IngredientModal";
import { React, useState } from "react";
import { Button } from "react-bootstrap";
import authStore from "./stores/authstore";
import { observer } from "mobx-react";
//REMOVE LATER

function App() {
  {
    /* REMOVE THIS LATER */
  }

  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  {
    /* REMOVE THIS LATER */
  }

  return (
    <div className="App">
      <NavBar />
      <Home />
      <div class="container-fluid">
        <CategoryList />
      </div>
      {/* REMOVE THIS LATER */}
      <div>
        {authStore.user ? (
          <Button onClick={openModal}>Add Ingredients</Button>
        ) : null}
        <IngredientModal isOpen={isOpen} closeModal={closeModal} />
      </div>
      {/* REMOVE THIS LATER */}
    </div>
  );
}
export default observer(App);
