import "./App.css";
import CategoryList from "./components/CategoryList";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div class="container-fluid">
        <CategoryList />
      </div>
    </div>
  );
}
export default App;
