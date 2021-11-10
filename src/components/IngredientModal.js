import React, { useState } from "react";
import { Form, Modal, Button, InputGroup } from "react-bootstrap";
import ingredientStore from "../stores/ingredientStore";

function IngredientModal(props) {
  const [ingredient, setIngredient] = useState({
    name: "",
  });
  const handleChange = (e) => {
    setIngredient({ ...ingredient, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    ingredientStore.createIngredient(ingredient);
    props.closeModal(); // this is to close the modal that is shown
  };
  return (
    <Modal className="" centered show={props.isOpen} onHide={props.closeModal}>
      <Modal.Header className="">
        <Modal.Title>Create a Ingredient</Modal.Title>
      </Modal.Header>
      <Modal.Body className="">
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <InputGroup.Text>Name</InputGroup.Text>
            <Form.Control type="text" name="name" onChange={handleChange} />
          </InputGroup>
          <br />
          <InputGroup>
            <InputGroup.Text>Image</InputGroup.Text>
            <Form.Control type="text" name="slug" onChange={handleChange} />
          </InputGroup>
        </Form>
      </Modal.Body>
      <Modal.Footer className="">
        <Button className="" variant="primary" onClick={handleSubmit}>
          Create Ingredient
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default IngredientModal;
