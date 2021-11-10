import React, { useState } from "react";
import { observer } from "mobx-react";
import authStore from "../stores/authstore";
import categoryStore from "../stores/categoryStore";
import CategoryModal from "./CategoryModal";
import CategoryItem from "./CategoryItem";
import addCategoryButton from "../assets/plus.png";

function CategoryList(props) {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  const categoryList = categoryStore.categories.map((category) => (
    <CategoryItem category={category} setCategory={props.setCategory} />
  ));

  return (
    <div>
      <div className="category-container">
        <div>
          {authStore.user ? (
            <button className="category-add" onClick={openModal}>
              <img src={addCategoryButton} alt="addCategory" />
            </button>
          ) : null}
        </div>
        <CategoryModal isOpen={isOpen} closeModal={closeModal} />
        {categoryList}
      </div>
    </div>
  );
}
export default observer(CategoryList);
