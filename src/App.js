import "./App.css";
import CategoryList from "./components/CategoryList";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";

//REMOVE LATER
import IngredientModal from "./components/IngredientModal";
import { React, useState } from "react";
import { Button } from "react-bootstrap";
import authStore from "./stores/authstore";
import { observer } from "mobx-react";
//REMOVE LATER

function App() {
  {
    /* MOVE THIS TO RECIPES PAGE LATER */
  }

  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  {
    /* MOVE THIS TO RECIPES PAGE LATER */
  }

  return (
    <div className="App">
      <Routes>
        <NavBar />
        <Route exact path="/" element={<Home />}></Route>
        <div class="container-fluid">
          <CategoryList />
        </div>
        {/* MOVE THIS TO RECIPES PAGE LATER */}
        <div>
          {authStore.user ? (
            <Button onClick={openModal}>Add Ingredients</Button>
          ) : null}
          <IngredientModal isOpen={isOpen} closeModal={closeModal} />
        </div>
        {/* MOVE THIS TO RECIPES PAGE LATER */}
      </Routes>
    </div>
  );
}
export default observer(App);
