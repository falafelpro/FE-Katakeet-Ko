import "./App.css";
import CategoryList from "./components/CategoryList";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import RecipeList from "./components/RecipeList";

function App() {
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
    </div>
  );
}
export default App;
