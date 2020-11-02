import React from "react";
import tmdb from "../api/tmdb";
import MovieDetails from "../components/MovieDetails";
import data from "../data/movieList";

class Movie extends React.Component {
  state = { movie: [] };

  componentDidMount() {
    tmdb.get("/movie/" + this.props.match.params.movieId).then((response) => {
      let idCheck = data.map((movie) => {
        return movie.movieId;
      });

      if (idCheck.includes(this.props.match.params.movieId)) {
        this.setState({ movie: response.data });
      }
    });
  }

  render() {
    return (
      <div>
        <MovieDetails>{this.state.movie}</MovieDetails>
        <div className="movie-segment">
          <div className="movie-segment1">Photos</div>
        </div>
        <div className="movie-segment">
          <div className="movie-segment1">Cast:</div>
        </div>
      </div>
    );
  }
}

export default Movie;
