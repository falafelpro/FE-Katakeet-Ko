import React from "react";
import { useState } from "react";
import categoryStore from "../stores/categoryStore";
import CategoryItem from "./CategoryItem";
import { observer } from "mobx-react";
import { Button } from "react-bootstrap";
import CategoryModal from "./CategoryModal";

function CategoryList() {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  const foundCategories = categoryStore.categories.map((category) => (
    <CategoryItem category={category} />
  ));

  return (
    <div class="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2">
      <div class="col-1">
        <Button onClick={openModal}>ADD</Button>
        <CategoryModal isOpen={isOpen} closeModal={closeModal} />
      </div>
      {foundCategories}
    </div>
  );
}
export default observer(CategoryList);
