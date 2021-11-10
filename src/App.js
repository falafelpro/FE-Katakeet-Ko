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
        <Route exact path="/" element={<RecipeList />} />
        <Route path="/recipe" element={<RecipeDetail />} />
      </Routes>
    </div>
  );
}
export default App;
