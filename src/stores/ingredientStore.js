import { makeAutoObservable } from "mobx";
import apis from "./apis";

class IngredientStore {
  ingredients = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchIngredients = async () => {
    try {
      const response = await apis.get("/ingredients");
      this.ingredients = response.data;
    } catch (error) {
      console.error("IngredientStore -> fetchIngredients -> error", error);
    }
  };

  createIngredient = async (ingredient) => {
    try {
      const response = await apis.post("/ingredients", ingredient);
      this.ingredients.push(response.data);
    } catch (error) {
      console.error("IngredientStore -> createIngredient -> error", error);
    }
  };
}
const ingredientStore = new IngredientStore();
ingredientStore.fetchIngredients();
export default ingredientStore;
