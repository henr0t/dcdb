import "./MovieList.css";
import React from "react";
import MoviePoster from "./MoviePoster";

const MovieList = ({ movielist }) => {
  let posters = movielist.map((movie) => {
    return (
      <MoviePoster width="300" movieId={movie.movieId} key={movie.movie} />
    );
  });

  return <div className="movielist">{posters}</div>;
};

export default MovieList;
