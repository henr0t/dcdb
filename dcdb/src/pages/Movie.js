import React from "react";
import tmdb from "../api/tmdb";
import MovieDetails from "../components/MovieDetails";
import MovieMedia from "../components/MovieMedia";
import MovieCast from "../components/MovieCast";
import data from "../data/movieList";
import Axios from "axios";

class Movie extends React.Component {
  state = { movie: [], media: [], cast: [], crew: [] };

  componentDidMount() {
    const requestData = tmdb.get("/movie/" + this.props.match.params.movieId);
    const requestMedia = tmdb.get(
      "/movie/" + this.props.match.params.movieId + "/images"
    );
    const requestCast = tmdb.get(
      "/movie/" + this.props.match.params.movieId + "/credits"
    );

    let idCheck = data.map((movie) => {
      return movie.movieId;
    });

    if (idCheck.includes(this.props.match.params.movieId)) {
      Axios.all([requestData, requestMedia, requestCast]).then((response) => {
        this.setState({
          movie: response[0].data,
          media: response[1].data.backdrops,
          cast: response[2].data.cast,
          crew: response[2].data.crew,
        });
      });
    }
  }

  render() {
    return (
      <div>
        <MovieDetails movies={this.state.movie} crew={this.state.crew} />
        <h3 className="underline-header">Photos</h3>
        <MovieMedia>{this.state.media}</MovieMedia>
        <h3 className="underline-header">Cast </h3>
        <MovieCast>{this.state.cast}</MovieCast>
        <h3 className="underline-header">Videos</h3>
        <div className="movie-segment">
          <div className="movie-segment1">Videos</div>
        </div>
      </div>
    );
  }
}

export default Movie;
