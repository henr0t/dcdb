import "./MovieMedia.css";
import React from "react";

const MovieMedia = (props) => {
  let mediaList = props.children.map((media) => {
    return (
      <a
        key={props.children.indexOf(media)}
        href={"https://image.tmdb.org/t/p/original" + media.file_path}
      >
        <img
          className="movie-media"
          alt={"image" + (props.children.indexOf(media) + 1)}
          src={"https://image.tmdb.org/t/p/w300" + media.file_path}
        />
      </a>
    );
  });
  return (
    <div className="movie-segment">
      <div className="scrolling-wrapper">{mediaList}</div>
    </div>
  );
};

export default MovieMedia;
