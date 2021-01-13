import React from "react";
import local from "../api/local";
import data from "../data/movieList";

function addToDatabase() {
  data.map((movie) => {
    const data = {
      title: movie.title,
      tmdbId: movie.movieId,
    };

    local
      .post("/api/v1/film/new", data)
      .then((response) => {})
      .catch((error) => console.log(error));
    return null;
  });
}

const UpdateDatabase = () => {
  return (
    <div>
      <button onClick={() => addToDatabase()}> Update film database</button>
    </div>
  );
};

export default UpdateDatabase;
