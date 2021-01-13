import React, { useState } from "react";
import local from "../api/local";
import data from "../data/movieData";
import { Modal } from "react-bootstrap";

function addToDatabase() {
  data.map((movie) => {
    const data = {
      title: movie.title,
      tmdbId: movie.movieId,
    };

    local
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
      <button onClick={(() => addToDatabase(), handleShow)}>
        {" "}
        Update film database
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Success!</Modal.Title>
        </Modal.Header>
        <Modal.Body>The database has been updated</Modal.Body>
        <Modal.Footer>
          <button variant="secondary" onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AdminTools;
