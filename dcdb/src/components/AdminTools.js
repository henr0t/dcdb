import "./AdminTools.css";
import React, { useState } from "react";
import filmapp from "../api/filmapp";
import data from "../data/movieData";
import { Modal } from "react-bootstrap";
import NewUser from "./NewUser";
import UserList from "./UserList";

function addToDatabase() {
  data.map((movie) => {
    const data = {
      title: movie.title,
      tmdbId: movie.movieId,
    };

    filmapp
      .post("/api/v1/film/new", data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
    return null;
  });
}

const AdminTools = () => {
  /*Modal create admin */
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  /*Modal user list */
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  return (
    <div>
      <button
        className="admin-tools-btn"
        onClick={() => {
          addToDatabase();
        }}
      >
        Update film database
      </button>
      <br />
      <button
        className="admin-tools-btn"
        onClick={() => {
          handleShow();
        }}
      >
        Create Admin
      </button>
      <button
        className="admin-tools-btn"
        onClick={() => {
          handleShow2();
        }}
      >
        User List
      </button>

      {/* Modal create admin */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create new Admin</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <NewUser role="admin" />
        </Modal.Body>
      </Modal>
      {/* Modal user list */}
      <Modal dialogClassName="modal-lg" show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>User List</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UserList />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AdminTools;
