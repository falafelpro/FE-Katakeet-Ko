import { makeAutoObservable } from "mobx";
import api from "./api";

class RecipeStore {
  recipes = [];

  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchRecipes = async () => {
    try {
      const response = await api.get("/recipes");
      this.recipes = response.data;
      this.loading = false;
    } catch (error) {
      console.error("RecipeStore -> fetchRecipes -> error", error);
    }
  };

  createRecipe = async (recipe) => {
    try {
      console.log(recipe);
      const formData = new FormData();
      for (const key in recipe) {
        formData.append(key, recipe[key]);
      }
      const response = await api.post("/recipes", formData);
      this.recipes.push(response.data);
    } catch (error) {
      console.error("CategoryStore -> createCategory -> error", error);
    }
  };
}
const recipeStore = new RecipeStore();
recipeStore.fetchRecipes();
export default recipeStore;
