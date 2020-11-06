import "./MovieDetails.css";
import React from "react";

const MovieDetails = ({ movies, crew }) => {
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
  } = movies;

  var release_year = release_date.substring(0, 4);
  var genreList = genres.map((genre) => {
    return " | " + genre.name;
  });

  function filterCrew(isExact, job, department) {
    var printCrew = crew
      .filter((crew) =>
        isExact
          ? crew.job === job
          : crew.job.includes(job) && crew.department.includes(department)
      )
      .map((crewMember) => {
        return crewMember.name + " (" + crewMember.job + ")";
      });

    var printCrewFix = printCrew.map((item) => {
      if (printCrew.indexOf(item) !== printCrew.length - 1) {
        return printCrew[printCrew.indexOf(item)].concat(", ");
      } else return item;
    });
    return printCrewFix;
  }

  return (
    <div>
      <div className="movie-segment">
        <div className="movie-segment1">
          <picture>
            <a href={"http://image.tmdb.org/t/p/original" + poster_path}>
              <img
                className="movie-poster"
                alt={original_title}
                src={"http://image.tmdb.org/t/p/w300" + poster_path}
              />
              <div className="expand-text">Click to expand</div>
            </a>
          </picture>
          <div className="movie-synopsis">
            <h1>
              {original_title} <small>{"(" + release_year + ")"}</small>
            </h1>
            <p>
              <i>"{tagline || "N/A"}"</i>
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
            <b>Director:</b> {filterCrew(true, "Director", "Directing")}
            <br />
            <b>Writer:</b> {filterCrew(false, "", "Writing")}
            <br />
            <b>Composer:</b> {filterCrew(false, "Original Music Composer", "")}
          </div>
        </div>
        <button className="add-to-watchlist">Add to Watchlist</button>
      </div>
    </div>
  );
};

export default MovieDetails;
