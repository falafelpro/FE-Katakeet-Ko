import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import RecipeList from "./components/RecipeList";
import RecipeDetail from "./components/RecipeDetail";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        {/* REVIEW: Why not call it /recipes */}
        <Route exact path="/" element={<RecipeList />} />
        {/* REVIEW: Why not call it /recipes/:recipeSlug */}
        <Route path="/:recipeSlug" element={<RecipeDetail />} />
      </Routes>
    </div>
  );
}
export default App;
