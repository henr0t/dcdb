import "./MovieCast.css";
import React, { useState } from "react";
import { Collapse } from "react-bootstrap";

const MovieCast = (props) => {
  const [open, setOpen] = useState(false);

  function getCastList(listSlice) {
    return listSlice.map((cast) => {
      if (cast.profile_path == null) {
        cast.profile_path = "/bFSnP9Gqn18zLWk5Tz0EDurfgOO.jpg";
      }
      return (
        <div key={cast.cast_id} className="row">
          <div className="column1">
            <img
              className="cast-image"
              alt={cast.name}
              src={"http://image.tmdb.org/t/p/w200" + cast.profile_path}
            />
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
