import "./MovieCast.css";
import React from "react";

const MovieCast = (props) => {
  let castList = props.children.map((cast) => {
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
  return (
    <div className="cast-segment">
      <div className="cast-table">{castList}</div>
    </div>
  );
};

export default MovieCast;
