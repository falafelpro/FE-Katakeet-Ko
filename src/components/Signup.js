import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-modal";
import authStore from "../stores/authstore";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const Signup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) =>
    setUser({ ...user, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    authStore.signup(user);
    closeModal();
  };

  return (
    <>
      <Button variant="outline-success" onClick={openModal}>
        Sign Up
      </Button>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="SignUpModal"
      >
        <h3>Signup</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input
              name="username"
              value={user.username}
              type="text"
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              name="password"
              value={user.password}
              type="text"
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <Button type="submit" variant="outline-success">
            Sign up
          </Button>
        </form>
      </Modal>
    </>
  );
};

export default Signup;
