import React, { useState } from "react";
import Login from "../components/Login";
import NewUser from "../components/NewUser";
import { Modal } from "react-bootstrap";

const Loginpage = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="fadin-animation">
      <div className="login-segment">
        <div className="login-text">
          <h1>
            <b>DCDB</b>
          </h1>
          <h4>Keep track of all the DC films that you have seen.</h4>
        </div>
        <div className="login-box">
          <Login />
          <p>Forgot Password?</p>
          <hr />
          <button className="new-user-btn" onClick={() => handleShow()}>
            Sign Up
          </button>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Join DCDb</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <NewUser />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Loginpage;
