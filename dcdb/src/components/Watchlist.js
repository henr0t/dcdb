import "./Watchlist.css";
import React from "react";
import MoviePoster from "./MoviePoster";

const Watchlist = ({ watchlist }) => {
  let posters = watchlist.map((movie) => {
    return <MoviePoster width="300" movieId={movie.tmdbId} key={movie.id} />;
  });

  return <div className="watchlist">{posters}</div>;
};

export default Watchlist;
