import "./MovieCast.css";
import React, { useState } from "react";
import { Collapse } from "react-bootstrap";
import castEmpty from "../img/cast_empty.png";

const MovieCast = (props) => {
  const [open, setOpen] = useState(false);

  function getCastList(listSlice) {
    return listSlice.map((cast) => {
      return (
        <div key={cast.cast_id} className="row">
          <div className="column1">
            {cast.profile_path == null ? (
              <img className="cast-image" alt={cast.name} src={castEmpty} />
            ) : (
              <img
                className="cast-image"
                alt={cast.name}
                src={"https://image.tmdb.org/t/p/w200" + cast.profile_path}
              />
            )}
          </div>
          <div className="column2">
            <p>{cast.name}</p>
          </div>
          <div className="column3">
            <p>{cast.character}</p>
          </div>
        </div>
      );
    });
  }

  return (
    <div className="cast-segment">
      <div className="cast-table">
        {getCastList(props.children.slice(0, 10))}
      </div>
      <Collapse in={!open} style={{ transition: "none" }}>
        <button
          className="show-more-button"
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          Show more
        </button>
      </Collapse>
      <Collapse in={open} appear={true}>
        <div id="example-collapse-text">
          <div className="cast-table">
            {getCastList(props.children.slice(10))}
          </div>
          <button
            className="show-more-button"
            onClick={() => setOpen(!open)}
            aria-controls={("example-collapse-text", "show-more-button")}
            aria-expanded={open}
          >
            Show less
          </button>
        </div>
      </Collapse>
    </div>
  );
};

export default MovieCast;
