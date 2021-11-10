import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import RecipeList from "./components/RecipeList";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route exact path="/" element={<RecipeList />} />
      </Routes>
    </div>
  );
}
export default App;
