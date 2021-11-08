import "./App.css";
import CategoryList from "./components/CategoryList";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <div class="container-fluid">
        <CategoryList />
      </div>
    </div>
  );
}
export default App;
