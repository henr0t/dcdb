import "./MovieDetails.css";
import React from "react";
import local from "../api/local";
import WatchButton from "./WatchButton";

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
    id,
  } = movies;

  var releaseYear = release_date.substring(0, 4);
  var genreList = genres.map((genre) => {
    if (genres.indexOf(genre) !== genres.length - 1) {
      return genres[genres.indexOf(genre)].name.concat(" | ");
    } else return genre.name;
  });

  function numberWithCommas(number) {
    return number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }

  function filterCrew(isExact, job, department) {
    var CrewFiltered = crew
      .filter((crew) =>
        isExact
          ? crew.job === job
          : crew.job.includes(job) && crew.department.includes(department)
      )
      .map((crewMember) => {
        return crewMember.name + " (" + crewMember.job + ")";
      });

    var CrewFilteredCommas = CrewFiltered.map((item) => {
      if (CrewFiltered.indexOf(item) !== CrewFiltered.length - 1) {
        return CrewFiltered[CrewFiltered.indexOf(item)].concat(", ");
      } else return item;
    });
    return CrewFilteredCommas;
  }

  return (
    <div>
      <div className="movie-segment">
        <div className="movie-segment1">
          <picture className="overlay">
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
              {original_title} <small>{"(" + releaseYear + ")"}</small>
            </h1>
            <p>
              <i>"{tagline || "N/A"}"</i>
              <br />
              {runtime} min · {genreList} · {release_date}
            </p>
            <hr className="title" />
            <h3>
              Budget: <small>{"$" + numberWithCommas(budget) || "N/A"}</small>
              <br />
              Box office:{" "}
              <small>{"$" + numberWithCommas(revenue) || "N/A"}</small>
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
        <WatchButton>{id}</WatchButton>
      </div>
    </div>
  );
};

export default MovieDetails;
