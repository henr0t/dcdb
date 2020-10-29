import React from "react";
import MovieImage from "./MovieImage";
import data from "../data/movieList";
import { Carousel } from "react-bootstrap";

const ImageCarousel = () => {
  let movieList = data.map((movie) => {
    return (
      <Carousel.Item key={movie.movie} interval="10000">
        <MovieImage movieId={movie.movieId} />
        <Carousel.Caption>
          <h3 style={{ textShadow: "1px 1px #181818" }}>{movie.title}</h3>
        </Carousel.Caption>
      </Carousel.Item>
    );
  });

  return (
    <div>
      <Carousel>{movieList}</Carousel>
    </div>
  );
};

export default ImageCarousel;
