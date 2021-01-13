import React from "react";
import MovieBackdrop from "./MovieBackdrop";
import data from "../data/movieData";
import { Carousel } from "react-bootstrap";

const ImageCarousel = () => {
  let movieList = data.slice(8).map((movie) => {
    return (
      <Carousel.Item key={movie.movie} interval="10000">
        <MovieBackdrop movieId={movie.movieId} />
        <Carousel.Caption>
          <h3 style={{ textShadow: "1px 1px #181818" }}>{movie.title}</h3>
        </Carousel.Caption>
      </Carousel.Item>
    );
  });

  return (
    <div>
      <Carousel className="carousel-image">{movieList}</Carousel>
    </div>
  );
};

export default ImageCarousel;
