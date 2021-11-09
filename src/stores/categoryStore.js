import { makeAutoObservable } from "mobx";
import apis from "./apis";

class CategoryStore {
  categories = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchCategories = async () => {
    try {
      // REVIEW: the common naming convention is res not response
      const response = await apis.get("/categories");
      this.categories = response.data;
    } catch (error) {
      console.error("CategoryStore -> fetchCategories -> error", error);
    }
  };

  createCategory = async (category) => {
    try {
      const response = await apis.post("/categories", category);
      this.categories.push(response.data);
    } catch (error) {
      console.error("CategoryStore -> createCategory -> error", error);
    }
  };
}
const categoryStore = new CategoryStore();
categoryStore.fetchCategories();
export default categoryStore;
