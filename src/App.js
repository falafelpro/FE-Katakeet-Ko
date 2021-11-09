import "./App.css";
import CategoryList from "./components/CategoryList";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import RecipeList from "./components/RecipeList";

// import IngredientModal from "./components/IngredientModal";
// import { React, useState } from "react";
// import { Button } from "react-bootstrap";
// import authStore from "./stores/authstore";
// import { observer } from "mobx-react";

function App() {
  // const [isOpen, setIsOpen] = useState(false);
  // const closeModal = () => setIsOpen(false);
  // const openModal = () => setIsOpen(true);

  return (
    <div className="App">
      <NavBar />
      <Home />
      <Routes>
        <Route exact path="/" element={<RecipeList />} />
      </Routes>
      <div class="container-fluid">
        <CategoryList />
      </div>
      {/* <div>
        {authStore.user ? (
          <Button onClick={openModal}>Add Ingredients</Button>
        ) : null}
        <IngredientModal isOpen={isOpen} closeModal={closeModal} />
      </div> */}
    </div>
  );
}
export default App;
