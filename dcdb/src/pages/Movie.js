import React from "react";
import tmdb from "../api/tmdb";
import MovieDetails from "../components/MovieDetails";
import MovieMedia from "../components/MovieMedia";
import data from "../data/movieList";

class Movie extends React.Component {
  state = { movie: [], media: [] };

  componentDidMount() {
    let idCheck = data.map((movie) => {
      return movie.movieId;
    });
    if (idCheck.includes(this.props.match.params.movieId)) {
      tmdb.get("/movie/" + this.props.match.params.movieId).then((response) => {
        this.setState({ movie: response.data });
      });
      tmdb
        .get("/movie/" + this.props.match.params.movieId + "/images")
        .then((response) => {
          this.setState({ media: response.data.backdrops });
        });
    }
  }

  render() {
    return (
      <div>
        <MovieDetails>{this.state.movie}</MovieDetails>

        <MovieMedia>{this.state.media}</MovieMedia>

        <div className="movie-segment">
          <div className="movie-segment1">Cast:</div>
        </div>
      </div>
    );
  }
}

export default Movie;
