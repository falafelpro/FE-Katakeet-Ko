import { makeAutoObservable } from "mobx";
import api from "./api";

class CategoryStore {
  categories = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchCategories = async () => {
    try {
      const response = await api.get("/categories");
      this.categories = response.data;
    } catch (error) {
      console.error("CategoryStore -> fetchCategories -> error", error);
    }
  };

  createCategory = async (category) => {
    try {
      const formData = new FormData();
      for (const key in category) {
        formData.append(key, category[key]);
      }
      const response = await api.post("/categories", formData);
      this.categories.push(response.data);
    } catch (error) {
      console.error("CategoryStore -> createCategory -> error", error);
    }
  };
}
const categoryStore = new CategoryStore();
categoryStore.fetchCategories();
export default categoryStore;
