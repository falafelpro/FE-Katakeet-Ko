import { makeAutoObservable } from "mobx";
import api from "./api";

class RecipeStore {
  recipes = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchRecipes = async () => {
    try {
      const response = await api.get("/recipes");
      this.recipes = response.data;
    } catch (error) {
      console.error("RecipeStore -> fetchRecipes -> error", error);
    }
  };

  createRecipe = async (recipe) => {
    try {
      const response = await api.post("/recipes", recipe);
      this.recipes.push(response.data);
    } catch (error) {
      console.error("RecipeStore -> createRecipe -> error", error);
    }
  };
}
const recipeStore = new RecipeStore();
recipeStore.fetchRecipes();
export default recipeStore;
