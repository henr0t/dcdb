import React from "react";

const MovieDetails = (props) => {
  const {
    original_title,
    release_date,
    overview,
    poster_path,
    tagline,
    runtime,
    genres,
    budget,
    revenue,
  } = props.children;

  if (release_date != null) {
    var release_year = release_date.substring(0, 4);
  }

  if (genres != null) {
    var genreList = genres.map((genre) => {
      return " | " + genre.name;
    });
  }

  return (
    <div>
      <div className="movie-segment">
        <div className="movie-segment1">
          <div>
            <a href={"http://image.tmdb.org/t/p/original" + poster_path}>
              <img
                className="movie-poster"
                alt={original_title}
                src={"http://image.tmdb.org/t/p/w300" + poster_path}
              />
            </a>
          </div>
          <div className="movie-synopsis">
            <h1>
              {original_title} <small>({release_year})</small>
            </h1>
            <p>
              <i>"{tagline}"</i>
              <br />
              {runtime} min {genreList} - {release_date}
            </p>
            <hr className="title" />
            <h3>
              Budget: <small>{"$" + budget || "N/A"}</small>
              <br />
              Box office: <small>{"$" + revenue || "N/A"}</small>
            </h3>
            <hr className="title" />
            <p>{overview}</p>
            <b>Director:</b>
            <br />
            <b>Writer:</b>
            <br />
            <b>Stars:</b>
          </div>
        </div>
        <button>Add to Watchlist</button>
      </div>
    </div>
  );
};

export default MovieDetails;
