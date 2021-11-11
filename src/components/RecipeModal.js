import React, { useState, useEffect } from "react";
import { Form, Modal, Button, InputGroup, FormControl } from "react-bootstrap";
import recipeStore from "../stores/recipeStore";
import ingredientStore from "../stores/ingredientStore";
import Creatable, { useCreatable } from "react-select/creatable";
import { observe } from "mobx";
import { observer } from "mobx-react";

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: "1px dotted pink",
    color: state.isSelected ? "red" : "blue",
    padding: 20,
    display: "fit-content",
  }),
};

const ingredientList = ingredientStore.ingredients;
console.log(ingredientList);
const ingredientListTrasformedToSelectList = ingredientList.map((ingred) => ({
  ...ingred,
  label: ingred.name,
  value: ingred._id,
}));
console.log(ingredientListTrasformedToSelectList);

function RecipeModal({ category, closeModal, isOpen }) {
  const [recipe, setRecipe] = useState({
    name: "",
    image: "",
    category: null,
  });
  const [selectValue, setSelectValue] = useState("");

  // if any change happened in the category the set the recipe.
  useEffect(() => {
    if (category) setRecipe({ ...recipe, category: category._id });
  }, [category]);

  const handleSelectChange = (value) => {
    setSelectValue(value);
  };

  console.log(category);
  const handleChange = (e) =>
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  const handleImage = (event) =>
    setRecipe({ ...recipe, image: event.target.files[0] });

  const handleSubmit = (e) => {
    e.preventDefault();
    //delete ingredientListTrasformedToSelectList.label
    recipeStore.createRecipe(recipe);
    closeModal(); // this is to close the modal that is shown
  };
  return (
    <Modal className="" centered show={isOpen} onHide={closeModal}>
      <Modal.Header className="">
        <Modal.Title>Create a Recipe</Modal.Title>
      </Modal.Header>
      <Modal.Body className="">
        <Form onSubmit={handleSubmit}>
          <InputGroup className="mb-3">
            <InputGroup.Text>Name</InputGroup.Text>
            <FormControl
              placeholder="Recipe's name"
              name="name"
              type="text"
              onChange={handleChange}
            />
          </InputGroup>
          <br />
          <InputGroup className="mb-3">
            <InputGroup.Text>Image</InputGroup.Text>
            <FormControl
              name="image"
              type="file"
              onChange={handleImage}
              placeholder="Image"
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <Creatable
              isClearable
              isMulti
              onChange={(value) => handleSelectChange(value)}
              options={ingredientListTrasformedToSelectList}
              value={selectValue}
              styles={customStyles}
            />
          </InputGroup>

          <Button className="" variant="primary" onClick={handleSubmit}>
            Create Recipe
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer className=""></Modal.Footer>
    </Modal>
  );
}

export default observer(RecipeModal);
