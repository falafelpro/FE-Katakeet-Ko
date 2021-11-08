import { makeAutoObservable } from "mobx";
import apis from "./apis";

class KStore {
  categories = [];

  constructor() {
    makeAutoObservable(this);
  }
}

const kStore = new KStore();
kStore.fetchKStore();
export default kStore;
