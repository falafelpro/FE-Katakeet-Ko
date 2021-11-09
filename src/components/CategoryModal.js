import React, { useState } from "react";
import { Form, Modal, Button, InputGroup } from "react-bootstrap";
import categoryStore from "../stores/categoryStore";

function CategoryModal(props) {
  // REVIEW: Destructure props {}
  const [category, setCategory] = useState({
    name: "",
  });

  // REVIEW: No need for the {} since it's a one line arrow function
  const handleChange = (e) => {
    setCategory({ ...category, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    categoryStore.createCategory(category);
    props.closeModal(); // this is to close the modal that is shown
  };
  return (
    <Modal className="" centered show={props.isOpen} onHide={props.closeModal}>
      <Modal.Header className="">
        <Modal.Title>Create a Category</Modal.Title>
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
        {/* REVIEW: The usage of the onClick is here incorrect, also the button must be of type suvmit and must be inside the form tags */}
        {/* REVIEW: Remove the className if it's empty */}
        <Button className="" variant="primary" onClick={handleSubmit}>
          Create Category
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CategoryModal;
