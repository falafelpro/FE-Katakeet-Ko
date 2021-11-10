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

  const categoryList = categoryStore.categories.map((category) => (
    <CategoryItem category={category} />
  ));

  return (
    <div>
      <div className="category-container">
        {authStore.user ? (
          <button className="category-add" onClick={openModal}>
            <img src={addCategory} alt="addCategory" />
          </button>
        ) : null}
        <div>
          <CategoryModal isOpen={isOpen} closeModal={closeModal} />
        </div>
        {categoryList}
      </div>
    </div>
  );
}
export default observer(CategoryList);
