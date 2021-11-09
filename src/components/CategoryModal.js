import { React, useState } from "react";
import { Form, Modal, Button, InputGroup, FormControl } from "react-bootstrap";
import categoryStore from "../stores/categoryStore";

function CategoryModal(props) {
  const [category, setCategory] = useState({
    name: "",
    image: "",
  });
  const handleChange = (e) => {
    setCategory({ ...category, [e.target.name]: e.target.value });
  };
  const handleImage = (event) =>
    setCategory({ ...category, image: event.target.files[0] });

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
          <InputGroup className="mb-3">
            <InputGroup.Text>Name</InputGroup.Text>
            <FormControl
              placeholder="Category's name"
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
          <Button className="" variant="primary" onClick={handleSubmit}>
            Create Category
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer className=""></Modal.Footer>
    </Modal>
  );
}

export default CategoryModal;
