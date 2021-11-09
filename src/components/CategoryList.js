import { React, useState } from "react";
import { Button } from "react-bootstrap";
import { observer } from "mobx-react";
import authStore from "../stores/authstore";
import categoryStore from "../stores/categoryStore";
import CategoryModal from "./CategoryModal";
import CategoryItem from "./CategoryItem";

function CategoryList() {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  const foundCategories = categoryStore.categories.map((category) => (
    <CategoryItem category={category} />
  ));

  return (
    <div className="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2">
      <div className="col-1">
        {authStore.user ? <Button onClick={openModal}>ADD</Button> : null}

        <CategoryModal isOpen={isOpen} closeModal={closeModal} />
      </div>
      {foundCategories}
    </div>
  );
}
export default observer(CategoryList);
