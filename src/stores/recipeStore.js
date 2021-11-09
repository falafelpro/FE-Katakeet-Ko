import { makeAutoObservable } from "mobx";
import apis from "./apis";

class RecipeStore {
  recipes = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchRecipes = async () => {
    try {
      const response = await apis.get("/recipes");
      this.recipes = response.data;
    } catch (error) {
      console.error("RecipeStore -> fetchRecipes -> error", error);
    }
  };

  createRecipe = async (recipe) => {
    try {
      const response = await apis.post("/recipes", recipe);
      this.recipes.push(response.data);
    } catch (error) {
      console.error("RecipeStore -> createRecipe -> error", error);
    }
  };
}
const recipeStore = new RecipeStore();
recipeStore.fetchRecipes();
export default recipeStore;
