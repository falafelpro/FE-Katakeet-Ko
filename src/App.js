import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import RecipeDetail from "./components/RecipeDetail";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<RecipeDetail />} />
      </Routes>
    </div>
  );
}
export default App;
