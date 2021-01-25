import React, { useState } from "react";
import filmapp from "../api/filmapp";
import data from "../data/movieData";
import { Modal } from "react-bootstrap";
import NewUser from "./NewUser";

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
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create new Admin</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <NewUser role="admin" />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AdminTools;
