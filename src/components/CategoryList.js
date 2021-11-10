import { React, useState } from "react";
import { observer } from "mobx-react";
import authStore from "../stores/authstore";
import categoryStore from "../stores/categoryStore";
import CategoryModal from "./CategoryModal";
import CategoryItem from "./CategoryItem";
import addCategory from "../assets/plus.png";

function CategoryList() {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  const foundCategories = categoryStore.categories.map((category) => (
    <CategoryItem category={category} />
  ));

  return (
    <div>
      {authStore.user ? (
        <button className="card-block" onClick={openModal}>
          <img src={addCategory} alt="addCategory" />
        </button>
      ) : null}
      <div className="category-container">
        <div>
          <CategoryModal isOpen={isOpen} closeModal={closeModal} />
        </div>
        {foundCategories}
      </div>
    </div>
  );
}
export default observer(CategoryList);
